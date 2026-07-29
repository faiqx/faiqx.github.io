---
title: Sixteen months of re-entry on a compromised WordPress estate
summary: An incident response that started as a cleanup and turned out to be three separate intrusions, the earliest predating the engagement by two years.
description: 'Incident response on a compromised WordPress estate: two RCE droppers, a trojaned theme relaying POST bodies to an attacker host, and a database-stored JavaScript injector that no file scan could see.'
chapter: wood-wide-web
linkLabel: The incident response
year: '2026'
date: 2026-06-11
outcome: Entry point confirmed across three intrusion artifacts spanning January 2024 to May 2026, with the data-exfiltration relay corroborated by 61 victim POSTs in the access logs.
stack:
  - Incident response
  - WordPress
  - Forensics
  - DNS and mail auth
status: draft
---


## The constraint

The brief was a cleanup. A small resort's WordPress site was sending phishing mail that spoofed its own staff, the hosting account held about six sites accreted by a run of contractors, and nobody could say who held which credential. The working assumption when I picked it up was that the breach was email-only: someone had a mailbox password, rotate everything and move on.

That premise was wrong, and finding out how wrong took the engagement from cleanup to incident response. The estate was not compromised. It had been compromised repeatedly, by at least three distinct methods, over roughly sixteen months, and the earliest artifact predated the engagement by two years.

The constraint that shaped everything after: the site was live and taking bookings. I could not pull it offline while I worked, and I could not modify anything before I understood what was there, because the first modification destroys the timeline you need to reconstruct what happened.

## What I did not do

**I did not start from the malware scanner.** A free Wordfence scan was already sitting there with 52 findings, and its criticals were all cached page output under the cache directory. That is a symptom, not a source: injected HTML written to disk by a page that was already compromised. Clearing that cache would have made the scanner go quiet and changed nothing. Treating a scanner's output as the finding rather than the lead is how a cleanup misses the injector and gets re-owned a week later.

**I did not clean as I went.** Every check in the audit was read-only: `SELECT`s against the live database, `grep` over access logs, and a file review against an offline `tar` copy rather than the running site. Removal was a separate, later phase. It is slower and it is tempting to delete a backdoor the moment you find it, but each artifact is evidence of how the attacker got in, and deleting the first one you find usually means never finding the third.

**I did not retrieve the payload.** The database injector pulled remote JavaScript from attacker infrastructure. I decoded the loader statically and stopped there rather than fetching what the server would have served. That leaves a real gap in what I can claim, and I would rather have the gap than an executed payload and a polluted machine.

## The approach

The file layer came first, from the offline copy. It produced two artifacts:

- **Two self-deleting RCE droppers** in the uploads directory (`rejljgbl.php`, `lgd53ok6.php`, dropped 2025-06-29). Each `eval()`s attacker-supplied input taken from a cookie or POST body, base64 and XOR encoded, then writes itself, executes, and unlinks. They also disable their own error logging. That combination — arbitrary remote code execution, self-deletion, log silencing — has no legitimate reading.
- **A trojaned active theme.** The child theme's `functions.php` carried a hidden endpoint at a secret random path (`/uR7DU9u72DDNhkRo2nQRKN`) that forwarded raw POST bodies by `curl` to `hxxps://track[.]ssl-connecti[.]com/api/track`, alongside a self-hosted page impersonating Calendly that harvested names and phone numbers. Injected 2026-05-23.

The theme block is the one that mattered, because it is data exfiltration rather than nuisance SEO malware. Three independent things corroborated it: the token embedded in the code (`ikSfdXpiiHKk33Ym`) matched the phishing-email evidence exactly, a third party had independently reported the site hosting a phishing page, and the access logs showed **61 victim POSTs to the relay path**. That last number is the reason this stopped being a technical problem and became a disclosure problem.

Then the layer a file scan cannot reach. A "simple custom CSS and JS" plugin stores its code as rows in the database rather than as files, so nothing on disk carries it. There was a live malicious injector there, published into every page footer, front end and admin:

- The destination domain was hidden as an XOR'd integer array (`^ 28966`, then `String.fromCharCode`), not cleartext.
- It read `document.referrer` and returned immediately if there was none, so it stayed dormant for direct hits and anything that looked like a sandbox, and fired only for search and link traffic.
- It built a Unix timestamp rounded into ten-minute buckets, hex encoded, and used that as the filename when injecting a remote script from `hxxps://js.schema-forms[.]org/compose-<hex-time-bucket>.js`, so the payload URL rotated every ten minutes.
- It carried an unused campaign identifier, `c6d8478dd96380432ebf3733544c7d88`.

Its row was created **2024-01-22**, which made it the earliest confirmed artifact and pushed the timeline two years back. A partner row created eight seconds earlier held nothing but an MD5-style marker.

The last piece was accounts. The login table showed the site's own `Admin` account used from `89.105.204.107` twenty-eight seconds before the 2026-05-23 theme write, and the 2024 intrusion coming from a burner administrator logging in from `142.4.16.155`, a datacenter address. Four accounts had been deleted before the earlier user audit ran, which is why that audit had concluded there were no hidden users: it could only see the accounts that still existed.

## The tradeoff

Read-only forensics cost about a week during which the site was still compromised and still exfiltrating. That is a genuinely uncomfortable trade and I would defend it: the DB injector was only found because the file-layer work was finished and documented rather than rushed into cleanup, and a remediation that had missed it would have left the attacker a working channel behind a clean-looking scan.

The cost I am less comfortable with is the payload gap. Because I never retrieved what `js.schema-forms[.]org` served, what it did to a visitor is inference from the loader's design, not observation. The engagement notes carry that split explicitly — the loader is fact, the served payload is a lead — so that the classification can be handed to a host, a registrar, or a lawyer without anyone mistaking one for the other.

## The outcome

Entry point confirmed, with three artifacts and a reconstructed timeline from January 2024 to May 2026, and the account-level path corroborated independently of the file evidence. The mail side was rebuilt on SPF, DKIM and DMARC, moving SPF off softfail and repointing a DMARC report address that had been sending every report to a typosquat of the client's own domain. The DNS zone was exported as evidence, audited record by record, and moved off the compromised hosting account.

The finding I would put first, though, is the one that changed the shape of the job: the 61 POSTs. A site can be cleaned in an afternoon. The moment the logs show that real guests' names and phone numbers reached an attacker's host, the technical work stops being the whole engagement, and telling the client plainly what happened to their customers becomes the part that actually matters.
