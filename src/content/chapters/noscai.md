---
year: '2025'
company: NoscAi
companyUrl: https://nosc.ai
location: Hamburg · remote · present
title: Building healthcare AI from the ground up
position: 3
status: published
---

As an early core engineer on ClinicOS, a German medical-practice platform, I work across a codebase where almost everything carries regulatory weight and one clinic can never see another&rsquo;s patient data. My headline work is the ambient clinical transcription system, the feature that turns a recorded consultation into a structured medical note. I rebuilt it through three architecture generations until the backend became completely stateless for recording, so dropped connections, network blips, and refreshes stopped losing audio.

I also own the platform&rsquo;s search: I replaced a legacy importer with a Go indexer and cut its memory footprint roughly six-fold by streaming the 800,000-product German drug database through an on-disk join. Alongside that I built the task-management module, the e-prescribing flow (eRezept and KBV-compliant medication plans with conformant barcodes), and the doctor-letter system on the DIN 5008 standard, and I&rsquo;ve caught the kind of bugs that matter in a pharmacy, like drug strengths printing a hundred times too large.
