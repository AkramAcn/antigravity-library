# Akram's Antigravity Library

A clean, minimalist personal prompt library for **Antigravity**.

Instead of filling out website forms or copying hardcoded personal data, each card features a **1-click copy** prompt. When you paste it into Antigravity, the AI automatically interviews you with a few quick questions and generates the corresponding `SKILL.md` file directly in your local environment.

---

## 🛠 Included Skills

1. **Canvas Deadlines Sync (`canvas-deadlines-sync`)**
   - **What it does**: Audits all active Columbia University CourseWorks courses for pending coursework, quizzes, and discussion forum posts with peer reply requirements.
   - **Interactive Setup in Chat**: Antigravity asks for your preferred destination (Microsoft OneNote, Google Docs, Notion, or Markdown) and course list, normalizes timestamps to Eastern Time (`America/New_York`), and creates the skill.

2. **Job Application Automation (`job-application-automation`)**
   - **What it does**: Autonomous job application assistant for application portals (Ashby, Greenhouse, Workday, Lever). Fills standard profile fields, truthfully tailors resume bullets to job postings without inventing experience, pauses for human approval before submitting open-ended essays, and logs submissions.
   - **Interactive Setup in Chat**: Antigravity asks the applicant for their candidate details (name, email, phone, location, work authorization, base resume path, and tracker sheet) so zero private information is exposed.

3. **Human-Voice Writing & Anti-AI Calibrator (`writing-skill`)**
   - **What it does**: Calibrates academic reflections, discussion posts, or technical essays into an authentic, thoughtful, human voice. Strips out synthetic AI clichés (*delve, tapestry, testament*), bans robotic openers (*Moreover, In conclusion*), avoids em-dashes in favor of spaced hyphens, and grounds arguments in concrete operational realities rather than corporate veneer.
   - **Interactive Setup in Chat**: Antigravity asks about your background, typical writing types, and key operational trade-offs to anchor the voice.

4. **Google Drive Organization & Cleanup (`google-drive-organization`)**
   - **What it does**: Safely audits, classifies, and organizes loose documents in Google Drive. Proposes clean folder trees (by semester, subject, or project) with zero risk of accidental deletions.
   - **Interactive Setup in Chat**: Antigravity asks for your target drive section, categorization hierarchy, and naming rules before generating the skill.

---

## 🚀 How to Run Locally

Open `index.html` directly in your browser or run:

```bash
# Python
python -m http.server 3000

# Node
npx serve .
```

---

## 🌐 Deploy to Vercel (Free)

```bash
npx vercel
```
Accept the defaults, and your site is live in 30 seconds at a free `https://<project-name>.vercel.app` address!
