# RoboMath — Project Site

Final-report website for the EECS/BioE/MechE C106A/206A Spring 2026 project.

Static, no build step. Hosted on GitHub Pages.

## Local preview

Open `index.html` in a browser, or serve the directory:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## File layout

```
index.html         # single page, all 7 graded sections
styles.css         # all styling
script.js          # nav highlighting + image lightbox
assets/
  diagrams/        # architecture.svg, software_flow.svg (replace with your own)
  images/          # hardware photos, RViz screenshots, team headshots
  videos/          # only if you choose to self-host instead of YouTube
  pdf/             # proposal + final report PDFs
```

## Things to fill in before submitting

The site is scaffolded with prose for sections 1 (Introduction) and 2 (Design),
and `TODO` markers everywhere else. Search `index.html` for `TODO` and replace.

Specifically:

1. **Hero / Results videos** — replace `VIDEO_ID` in the two YouTube `iframe`s
   with the IDs of your unlisted YouTube uploads.
2. **Architecture diagrams** — `assets/diagrams/architecture.svg` and
   `assets/diagrams/software_flow.svg` are placeholders. Replace with your
   real diagrams if you have them; the placeholders are accurate to the
   current launch file and should be fine to keep as a fallback.
3. **Hardware photos** — drop into `assets/images/`:
   - `hardware_workspace.jpg` (overall setup)
   - `hardware_gripper.jpg` (gripper holding marker)
   - `result_rviz.png` (RViz screenshot)
   - `result_writing.jpg` (whiteboard after a run)
   - `team_alex.jpg`, `team_shu.jpg`, `team_natalie.jpg`, `team_yolanda.jpg`
4. **Results numbers** — fill in success rate, run time, failure modes in
   section 4.
5. **Conclusion** — section 5 has placeholder bullets for difficulties and
   future work; rewrite with what actually happened.
6. **Team contributions** — section 6 has placeholders for each member.
7. **GitHub link** — currently points to `shuo-yuan/eecs106a-project`; update
   if the project repo URL is different.
8. **Proposal PDF** — copy `EECS106A_Project_Proposal-2.pdf` from the project
   repo into `assets/pdf/EECS106A_Project_Proposal.pdf`.

## Deploy to GitHub Pages

1. Create a new public repo, e.g. `eecs106a-project-page`.
2. `git init && git add . && git commit -m "Initial site"`
3. `git remote add origin https://github.com/<you>/eecs106a-project-page.git`
4. `git push -u origin main`
5. Repo Settings → Pages → Source: **Deploy from a branch**, Branch:
   **main / (root)**.
6. The site will be available at
   `https://<you>.github.io/eecs106a-project-page/`.
7. Submit that URL to the Gradescope assignment (due 5/15 11:59 pm).
