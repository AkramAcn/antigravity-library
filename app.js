// Akram's Antigravity Library - Clean & Minimalist Prompt Generator

const SKILLS = [
  {
    id: 'canvas-deadlines-sync',
    title: 'Canvas Deadlines Sync',
    explanation: 'Audits all active Columbia CourseWorks (Canvas) courses for pending assignments, discussion posts, peer replies, and quizzes, then synchronizes an organized, hyperlinked checklist into your notes app. Automatically excludes lecture attendance and standardizes deadlines to Eastern Time.',
    prompt: `I want to install and configure a custom Antigravity skill called "canvas-deadlines-sync" for tracking Columbia University CourseWorks deadlines.

Before creating the skill files, please ask me these 2-3 quick questions to tailor it to my workflow:
1. Destination App: Where do you want your coursework to-do list organized? (e.g., Microsoft OneNote section/page, Google Docs, Notion, Apple Notes, or a Markdown file)
2. Target Courses: Which courses or subjects do you want to track? (e.g., all active semester courses, or specific course names)
3. Custom Rules: Any specific rules? (e.g., exclude class attendance sessions, prioritize overdue items, flag items needing revisions)

Once I answer, create the skill in my Antigravity configuration directory at .gemini/config/skills/canvas-deadlines-sync/SKILL.md with:
- Target LMS: Columbia CourseWorks (courseworks2.columbia.edu) via active browser session.
- Mandatory Timezone normalization: UTC to Eastern Time (ET).
- Deep-linking standard: Direct URLs to specific assignment/quiz/discussion topic IDs (never generic tab roots).
- Exclusion rule: Exclude live class sessions and pure attendance tracking; only track actionable coursework.
- My chosen destination formatted cleanly without overwriting my existing personal notes.
Confirm once the skill is created and ready to run!`
  },
  {
    id: 'job-application-automation',
    title: 'Job Application Automation',
    explanation: 'An autonomous job application copilot that navigates job portals (Ashby, Greenhouse, Workday, Lever), fills candidate profile fields accurately, tailors resume bullet points to the job description without inventing experience, pauses for your approval on open-ended essays, and logs submissions.',
    prompt: `I want to install and configure a custom Antigravity skill called "job-application-automation" to assist with job and internship applications.

Before writing the skill files, please interview me with these essential onboarding questions so no personal details are hardcoded incorrectly:
1. Candidate Details: What is your Full Name, Email, Phone number, and Location/Postal code?
2. Target Roles: What job titles and seniority levels are you targeting?
3. Work Authorization: What is your legal US work authorization and visa sponsorship status?
4. Resume Source: What is the local file path to your base resume (PDF or LaTeX source)?
5. Tracking Destination: Do you have a master tracking spreadsheet (e.g. Google Sheet link) or preferred logging format?

Once I answer:
- Create the skill in my Antigravity configuration directory at .gemini/config/skills/job-application-automation/SKILL.md.
- Enforce these non-negotiable safety rules:
  a) Strict Truthfulness: Tailor resume wording to job descriptions, but NEVER invent skills, tools, metrics, or experiences not in my base resume.
  b) Human-in-the-Loop Gate: Always draft and pause for my explicit review and approval before submitting any open-ended essay questions.
  c) De-duplication: Check previous applications before applying.
Confirm once the skill is created and ready to use!`
  },
  {
    id: 'writing-skill',
    title: 'Human-Voice Writing & Anti-AI Calibrator',
    explanation: 'Rewrites and calibrates drafts, academic reflections, or professional communications into an authentic, thoughtful, human voice. Strips out synthetic AI markers, bans formulaic transitions, eliminates em-dashes in favor of spaced hyphens, and grounds arguments in concrete operational realities rather than corporate buzzwords.',
    prompt: `I want to install and configure a custom Antigravity skill called "writing-skill" to enforce an authentic, thoughtful human voice across my writing, reflections, and technical communications.

Before creating the skill, ask me:
1. Content Types: What types of writing do you typically draft or polish? (e.g., academic discussion posts, personal reflections, cover letters, technical essays)
2. Vantage Point: What is your professional or academic background? (e.g., software engineer, product manager, student)
3. Themes & Friction: Are there particular topics, operational trade-offs, or themes you frequently focus on?

Once I respond, create the skill in .gemini/config/skills/writing-skill/SKILL.md enforcing:
- Zero AI Clichés & Banned Lexicon: Ban words like delve, tapestry, testament, multifaceted, foster, navigate, pivotal, beacon, vital, burgeoning, landscape, realm, transformative, harness.
- Spoken Transitions: Ban robotic openers ("Furthermore", "Moreover", "In conclusion"). Use natural conversational connectors ("At the same time", "However", "In my experience").
- Punctuation Rule: Never use em-dashes (—); always use spaced hyphens ( - ) for pauses.
- Plainspoken Reality: Cut corporate buzzwords; describe technical and organizational trade-offs directly and pragmatically.
- Natural Cadence: Dynamic variation between concise assertions and substantive explanations.
Confirm once the skill is installed!`
  },
  {
    id: 'google-drive-organization',
    title: 'Google Drive Organization & Cleanup',
    explanation: 'Safely audits, categorizes, and organizes files across your Google Drive. Discovers loose or misfiled documents, proposes clean folder structures (by semester, project, or date), and renames or organizes items with zero risk of accidental deletions.',
    prompt: `I want to install and configure a custom Antigravity skill called "google-drive-organization" to safely organize and clean up my Google Drive.

Before writing the skill, please ask me:
1. Target Section: Which Google Drive folder or section do you want to organize? (e.g., My Drive root, Coursework, Downloads, or a specific folder link)
2. Hierarchy Scheme: What folder hierarchy or grouping scheme do you prefer? (e.g., by course/semester, by project, by year)
3. Naming Standard: What naming convention should be standardized? (e.g., clean descriptive names with ISO dates YYYY-MM-DD, or keeping original names)

Once I answer, create the skill in .gemini/config/skills/google-drive-organization/SKILL.md with:
- Read-Only Audit First: Scan and summarize loose files before proposing changes.
- Human Confirmation Gate: Always present a clear proposed folder tree for my approval before moving or renaming anything.
- Absolute Zero Deletion: Never delete or trash files without explicit instruction.
Confirm once the skill is installed and ready to run!`
  }
];

// Initialize
function init() {
  loadTheme();
  renderSkillCards();
  setupParallax();
}

// Theme
function loadTheme() {
  const isDark = localStorage.getItem('akram_theme') === 'dark' ||
    (!localStorage.getItem('akram_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('akram_theme', isDark ? 'dark' : 'light');
}

// Render clean cards with 1-click copy
function renderSkillCards() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = SKILLS.map(skill => `
    <div class="prompt-card border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 bg-white dark:bg-neutral-900 flex flex-col justify-between">
      <div>
        <h3 class="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          ${escapeHTML(skill.title)}
        </h3>
        <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
          ${escapeHTML(skill.explanation)}
        </p>

        <!-- Collapsible Preview -->
        <details class="group mb-5">
          <summary class="text-xs text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer font-mono select-none flex items-center gap-1 transition-colors">
            <span class="group-open:rotate-90 inline-block transition-transform duration-150">▸</span>
            <span>Preview prompt</span>
          </summary>
          <pre class="mt-2.5 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/80 text-[11px] font-mono text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap leading-relaxed select-all">${escapeHTML(skill.prompt)}</pre>
        </details>
      </div>

      <div class="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-end">
        <button 
          onclick="copySkillPrompt('${skill.id}', this)"
          class="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-900 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
          </svg>
          <span>Copy Prompt</span>
        </button>
      </div>
    </div>
  `).join('');
}

// 1-Click Copy
function copySkillPrompt(skillId, btnElement) {
  const skill = SKILLS.find(s => s.id === skillId);
  if (!skill) return;

  navigator.clipboard.writeText(skill.prompt).then(() => {
    if (btnElement) {
      const originalHTML = btnElement.innerHTML;
      btnElement.innerHTML = `
        <svg class="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Copied!</span>
      `;
      btnElement.classList.add('bg-neutral-800', 'dark:bg-white');
      setTimeout(() => {
        btnElement.innerHTML = originalHTML;
        btnElement.classList.remove('bg-neutral-800', 'dark:bg-white');
      }, 2000);
    }
    showToast(`Copied "${skill.title}" prompt! Paste into Antigravity.`);
  }).catch(err => {
    console.error('Copy failed:', err);
    showToast('Failed to copy. Please copy from the preview.');
  });
}

// Toast
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove('hidden');
  toast.classList.add('flex', 'toast-enter');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex', 'toast-enter');
  }, 2400);
}

// Subtle Parallax Engine
function setupParallax() {
  const hero = document.getElementById('hero-section');
  const grid = document.getElementById('parallax-grid');
  const floating = document.getElementById('parallax-floating');
  if (!hero || !grid || !floating) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let ticking = false;
  let mouseX = 0;
  let mouseY = 0;

  function update() {
    const scrolled = window.pageYOffset;
    if (scrolled < 700) {
      grid.style.transform = `translate3d(0, ${scrolled * 0.12}px, 0)`;
      floating.style.transform = `translate3d(${mouseX * -16}px, ${scrolled * 0.28 + mouseY * -16}px, 0)`;
    }
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    requestTick();
  }, { passive: true });

  hero.addEventListener('mouseleave', () => {
    mouseX = 0;
    mouseY = 0;
    requestTick();
  }, { passive: true });

  window.addEventListener('scroll', requestTick, { passive: true });
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', init);
