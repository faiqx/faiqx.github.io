import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Drafts are visible while developing and dropped from production builds, so
 * an unfinished piece can be previewed locally without ever shipping.
 */
export async function getPublishedWork(): Promise<CollectionEntry<'work'>[]> {
  const entries = await getCollection('work', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
