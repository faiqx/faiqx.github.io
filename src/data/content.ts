import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Visibility resolution.
 *
 * `published` is live. `draft` and `hidden` both stay out of production; they
 * are kept distinct so "unfinished" and "finished but not showing this" remain
 * different facts. Both are rendered while developing, badged, so nothing is
 * invisible to you locally.
 *
 * Visibility cascades down the foreign keys. A case study or project is only
 * ever as visible as the chapter it belongs to: hiding the NoscAi chapter
 * hides its case studies and any project built during it, without touching
 * their own status.
 */
type Status = 'draft' | 'published' | 'hidden';

const isDev = import.meta.env.DEV;

/** Would this row render on its own, ignoring its parents? */
function selfVisible(status: Status): boolean {
  return status === 'published' || isDev;
}

export async function getChapters(): Promise<CollectionEntry<'chapters'>[]> {
  const entries = await getCollection('chapters', ({ data }) => selfVisible(data.status));
  // Chronological, not reverse-chronological. Deliberate.
  return entries.sort((a, b) => a.data.position - b.data.position);
}

export async function getCaseStudies(): Promise<CollectionEntry<'work'>[]> {
  const visibleChapters = new Set((await getChapters()).map((c) => c.id));
  const entries = await getCollection(
    'work',
    ({ data }) => selfVisible(data.status) && visibleChapters.has(data.chapter.id)
  );
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects(): Promise<CollectionEntry<'projects'>[]> {
  const visibleChapters = new Set((await getChapters()).map((c) => c.id));
  const entries = await getCollection(
    'projects',
    ({ data }) =>
      selfVisible(data.status) && (!data.chapter || visibleChapters.has(data.chapter.id))
  );
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Chapters with their children attached, for the timeline. Children are
 * derived from the foreign keys rather than listed on the chapter, so adding a
 * case study never means editing the chapter it belongs to.
 */
export async function getTimeline() {
  const [chapters, caseStudies, projects] = await Promise.all([
    getChapters(),
    getCaseStudies(),
    getProjects(),
  ]);

  return chapters.map((chapter) => ({
    chapter,
    caseStudies: caseStudies.filter((entry) => entry.data.chapter.id === chapter.id),
    projects: projects.filter((entry) => entry.data.chapter?.id === chapter.id),
  }));
}

/** Ids of case studies that will actually render, for guarding cross-links. */
export async function getVisibleCaseStudyIds(): Promise<Set<string>> {
  return new Set((await getCaseStudies()).map((entry) => entry.id));
}
