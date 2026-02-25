const PROFILE = {
  name: "Uziel Rivera-Lopez",
  location: "Bloomington, Indiana",
  email: "uzrivera@iu.edu",
  github: "github.com/url-it",  
  linkedin: "linkedin.com/in/uzielrivlop/",
  imagePlaceholder: false,
};

const EDUCATION = [
  { degree: "M.S. in Data Science" , school: "Indiana University Bloomington", year: "2026"}, 
  { degree: "B.S. in Computer Science, Specialization in Artificial Intelligence", school: "Indiana University Bloomington", year: "2025" },
];

const TIMELINE_JOBS = [
  {
    id: 1,
    title: "Research Intern",
    company: "Indiana University School of Medicine",
    date: "Summer 2021",
    description: "Established a database for Fontan liver disease patients",
  },
  {
    id: 2,
    title: "Intern",
    company: "ACS Division of Medicinal Chemistry",
    date: "Summer 2022",
    description: "Conducted in-depth research on current chemistry trends and subjects",
  },
  {
    id: 3,
    title: "Career Exploration",
    company: "TechPoint",
    date: "Summer 2023",
    description: "Engagement in simulated roles: Data Scientist, PM, SWE, SDE",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Melvin & Bren Simon Cancer Center",
    date: "Summer 2024",
    description: "Analytics on Multiple Myeloma cancer test runs of a possible treatement",
  },
  {
    id: 5,
    title: "Undergraduate Research Assistant",
    company: "MathCancer Lab",
    date: "Aug 2024 - May 2025",
    description: "Migration and refactoring of Physicell Training Apps",
  },
  {
    id: 6,
    title: "Undergraduate Instructor",
    company: "IUB Luddy School",
    date: "August 2024 - March 2025",
    description: "Undergraduate Instructor for CSCI-C200",
  },
  {
    id: 6,
    title: "Conference Assistant",
    company: "IU ResLife",
    date: "May 2025 - August 2025",
    description: "Provided assistant, and organization of conferences hosted at IU",
  },
  {
    id: 7,
    title: "REU Researcher",
    company: "Da Yan, IUB Luddy",
    date: "May 2025 - December 2025",
    description: "Working under Dr. Da Yan on leveraging UAV LiDAR data to analyze the environmental impact of the March 2023 EF3 tornado at McCormick’s Creek State Park.",
  },
  {
    id: 8,
    title: "Lead Teaching Assistant",
    company: "IUB Luddy",
    date: "March 2025 - Present",
    description: "Leading the course for CSCI-C200, with 12+ TAs to manage, and 500+ students for content"
  },
];

const PROJECTS = [
  {
    title: "Automated Simplification of Clinical Discharge Summaries Using Large Language Models",
    description: "In development — Building an LLM-based pipeline to automatically simplify clinical discharge summaries into patient-friendly language, bridging the communication gap between medical documentation and patient understanding.",
    year: "2026",
    link: "#",
  },
  {
    title: "Large-Scale Spatial Machine Learning for 3D Surface Topology in Hydrological Application",
    description: "Under Dr. Da Yan, this NSF REU research developing an interactive annotation tool that aligns bird's-eye view imagery with 3D UAV LiDAR point clouds to label tornado-induced forest disturbances, supporting deep learning models for geomorphic change quantification in storm-affected environments.",
    year: "2025",
    link: "https://github.com/url-it/uav-lidar-tornado-geomorphic-analysis/blob/main/uzielRiveraLopez_FA25.pdf",
  },
  {
    title: "PhysiCell training apps: A case study for creating interactive training materials for scientific software",
    description: "Working with the MathCancer Lab, we built a collection of interactive Google Colab training applications for PhysiCell, an open-source agent-based multicellular simulator, covering core cell behaviors including mechanics, motility, secretion, death, cycle, and microenvironment modeling.",
    year: "2024",
    link: "https://github.com/url-it/PhysiCell_Training_Apps",
  },
{
  title: "Synergistic Cytotoxic Effects of p62 Modulation and Proteasome Inhibitors on Multiple Myeloma: Molecular Mechanisms and Therapeutic Potential",
  description: "Working with Dr. Suvannasankha's team, this research is on investigating the synergistic cytotoxic effects of p62 modulation (XRK3F2) and proteasome inhibition (carfilzomib) in Multiple Myeloma, exploring molecular mechanisms through RNA sequencing, western blotting, and gene expression analysis across MM cell lines.",
  year: "2024",
  link: "https://github.com/url-it/p62-carfilzomib-synergy-MM/blob/main/uzielRiveraLopezPoster2024_fv1.pdf",
},

    {
    title: "Registry Database for Fontan Liver Patients ",
    description: "Research internship project focused on establishing a REDCap patient registry for Fontan-associated liver disease at Indiana University, contributing to the understanding of long-term hepatic complications in congenital heart disease patients.",
    year: "2021",
    link: "https://iu.mediaspace.kaltura.com/media/t/1_km513szi/215165513",
  },
];

const AWARDS_PRESENTATIONS = [
    {
    course:  "Luddy Computer Science Fellowship",
    role: "Fellowship",
    description: "",
    year: "2026",
  },
  {
    course:  "Hudson & Holland Fellowship",
    role: "Fellowship",
    description: "",
    year: "2026",
  },
      {
    course:  "Luddy Winter Research Symposium",
    role: "Presented Quantifying Geomorphic Change Using UAV LiDAR & Deep Learning",
    description: "",
    year: "Dec 2025",
  },
    {
    course:  "Indiana University Undergraduate Summer Presentation",
    role: "Presented Quantifying Geomorphic Change Using UAV LiDAR & Deep Learning",
    description: "",
    year: "July 2025",
  },
    {
    course:  "Luddy Spring Research Symposium",
    role: "Presented Integration of PhysiCell Training Apps With Google Colab to Enhance Accessibility",
    description: "",
    year: "April 2025",
  },

  {
    course:  "Luddy Fall Research Symposium",
    role: "Presented Integration of PhysiCell Training Apps With Google Colab to Enhance Accessibility",
    description: "",
    year: "Dec 2024",
  },

    {
 course: "Simon Comprehensive Cancer Center – DICR Spotlight",
  role: "Featured Researcher, Cancer Research Program",
  description: "Featured by the Melvin and Bren Simon Comprehensive Cancer Center for summer research under Dr. Attaya Suvannasankha, exploring the intersection of AI and cancer biology through wet lab techniques and data analysis. ",
      link: "https://cancer.iu.edu/about/news/stories/2024-07-25-dicr-spotlight.html",
  year: "July 2024",
  },
  
  {
    course:  "Peters Computer Science Program",
    role: "Scholarship",
    description: "",
    year: "2022-2025",
  },
  {
    course:  "Indiana Excellence Scholarship (formerly the Provost's Scholarship)",
    role: "Scholarship",
    description: "",
    year: "2022-2025",
  },
    {
    course:  "Luddy and Hudson & Holland Partnership",
    role: "Scholarship",
    description: "",
    year: "2022-2025",
  },
  {
    course:  "Arts & Sciences and Hudson & Holland Partnership",
    role: "Scholarship",
    description: "",
    year: "2022-2025",
  },
  {
    course: "Hudson & Holland Scholar",
    role: "Scholarship",
    description: "",
    year: "2022-2025",
  },
  {
    course: "Top 10 Finalist HOSA",
    role: "Public Service Announcement Competition",
    description: "",
    year: "2022",
  },
];

const TABS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards & Presentations" },
];

let activeTab = "home";

const sidebarEl = document.getElementById("sidebar");
const navEl = document.getElementById("navigation");
const contentEl = document.getElementById("main-content");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function iconMapPin(size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>`;
}

function iconMail(size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>`;
}

function iconGithub(size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-4.5 1.4-4.5-2.3-6.3-2.8M15.3 21v-3.5a3 3 0 0 0-.9-2.2c3-.3 6.1-1.4 6.1-6.2a4.9 4.9 0 0 0-1.3-3.4 4.5 4.5 0 0 0-.1-3.3s-1.1-.3-3.6 1.3a12.7 12.7 0 0 0-6.5 0C6.5 2.1 5.4 2.4 5.4 2.4a4.5 4.5 0 0 0-.1 3.3A4.9 4.9 0 0 0 4 9c0 4.8 3.1 5.9 6.1 6.2a3 3 0 0 0-.9 2.2V21"></path></svg>`;
}

function iconLinkedin(size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;
}

function iconExternalLink(size = 16) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="m10 14 11-11"></path></svg>`;
}

function iconChevronRight(size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>`;
}

function iconCheckCircle(size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>`;
}

function renderSidebar() {
  sidebarEl.innerHTML = `
    <div class="profile-picture">
      ${
        PROFILE.imagePlaceholder
          ? `<div class="text-center"><span class="font-primary" style="font-size:0.875rem; line-height:1.1;">Profile<br/>Picture</span></div>`
          : `<img src="assets/profile.png" alt="Profile" />`
      }
    </div>

    <h1 class="profile-name font-primary">${escapeHtml(PROFILE.name)}</h1>

    <div class="contact-info font-primary">
      <div class="contact-item">
        ${iconMapPin(18)}
        <span>: ${escapeHtml(PROFILE.location)}</span>
      </div>

      <div class="contact-item">
        ${iconMail(18)}
        <a href="mailto:${escapeHtml(PROFILE.email)}">: ${escapeHtml(PROFILE.email)}</a>
      </div>

      <div class="contact-item">
        ${iconGithub(18)}
        <a href="https://${escapeHtml(PROFILE.github)}" target="_blank" rel="noopener noreferrer">: Github</a>
      </div>

      <div class="contact-item">
        ${iconLinkedin(18)}
        <a href="https://${escapeHtml(PROFILE.linkedin)}" target="_blank" rel="noopener noreferrer">: LinkedIn</a>
      </div>
    </div>
  `;
}

function renderNavigation() {
  navEl.innerHTML = TABS.map(
    (tab) => `
      <button class="nav-button font-primary ${tab.id === activeTab ? "active" : ""}" data-tab="${tab.id}" type="button">
        ${tab.label}
      </button>
    `,
  ).join("");

  navEl.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTab = button.getAttribute("data-tab");
      if (!nextTab || nextTab === activeTab) {
        return;
      }
      activeTab = nextTab;
      renderNavigation();
      renderMain();
    });
  });
}

function timelineCard(job, positionClass) {
  return `
    <div class="timeline-card ${positionClass}">
      <h3 class="font-primary">${escapeHtml(job.title)}</h3>
      <p>${escapeHtml(job.company)}</p>
      <span class="timeline-date">${escapeHtml(job.date)}</span>
    </div>
  `;
}

function renderTimeline() {
  const itemSpacing = 220;
  const canvasWidth = Math.max(800, (TIMELINE_JOBS.length + 1) * itemSpacing);

  const timelineItems = TIMELINE_JOBS.map((job, index) => {
    const isTop = index % 2 === 0;
    const leftPos = (index + 1) * itemSpacing;

    return `
      <div
        class="timeline-item"
        style="left:${leftPos}px; top:${isTop ? "10%" : "50%"}; height:40%; justify-content:${isTop ? "flex-end" : "flex-start"};"
      >
        ${isTop ? timelineCard(job, "top-card") : ""}

        <div class="connector ${isTop ? "h-full" : "h-12"}"></div>

        <div class="timeline-dot" style="top:${isTop ? "100%" : "0"};"></div>

        ${!isTop ? '<div class="connector h-full"></div>' : ""}

        ${!isTop ? timelineCard(job, "bottom-card") : ""}
      </div>
    `;
  }).join("");

  return `
    <div class="timeline-wrapper">
      <h2 class="timeline-title font-primary">Timeline:</h2>

      <div class="timeline-scroll custom-scrollbar">
        <div class="timeline-canvas" style="width:${canvasWidth}px;">
          <div class="timeline-line">
            <div class="timeline-arrow"></div>
          </div>

          <div class="timeline-items">
            ${timelineItems}
          </div>
        </div>
      </div>

    </div>
  `;
}

function renderHomeView() {
  const educationItems = EDUCATION.map((edu, idx) => `
    <li class="education-item">
      <div class="education-left">
        ${idx === 0 ? iconChevronRight(20) : iconCheckCircle(20)}
        <span class="education-degree font-primary">${escapeHtml(edu.degree)} &mdash; ${escapeHtml(edu.school)}</span>
      </div>
      <span class="education-year font-primary">${escapeHtml(edu.year)}</span>
    </li>
  `).join("");

  return `
    <div class="animate-fade-in">
      <section class="section">
        <h2 class="section-title font-primary">Bio:</h2>
        <div class="bio-text font-primary">
          <p>
I am a Master's student in Data Science driven by a single question: How can we use AI to make complex systems accessible to everyone?
</p>
<p>
My research sits at the intersection of Large Language Models (LLMs), Natural Language Processing (NLP), and Data Mining, where I focus on "deconstructing" barriers to entry. Whether I am migrating biological simulators to the cloud for the MathCancer Lab or engineering pipelines to simplify clinical discharge summaries, I build tools that empower users to understand their own data.
</p>
This "builder" mindset defines my approach to infrastructure. I treat my courses like software products, building custom automation to solve operational headaches. I engineered a suite of tools—including for bulk data manipulation, visualization dashboards to simulate drop scenarios. I am passionate about applying these skills in AI to build solutions that are not just powerful, but usable. So that one day, all our questions are answered!
          </p>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title font-primary">Education:</h2>
        <ul class="education-list">
          ${educationItems}
        </ul>
      </section>

      ${renderTimeline()}
    </div>
  `;
}

function renderProjectsView() {
  const rows = PROJECTS.map((project) => `
    <div class="list-row">
      <div class="list-row-main">
        <h3 class="font-primary">
          - ${escapeHtml(project.title)}
          <a href="${escapeHtml(project.link)}" class="external-link" aria-label="Project link">
            ${iconExternalLink(16)}
          </a>
        </h3>
        <p class="list-row-description font-primary">${escapeHtml(project.description)}</p>
      </div>
      <span class="list-row-year font-primary">${escapeHtml(project.year)}</span>
    </div>
  `).join("");

  return `
    <div class="animate-fade-in">
      <!-- <h1 class="page-title font-primary">Projects</h1> -->
      <div class="list-rows">
        ${rows}
      </div>
    </div>
  `;
}

function renderAwardsView() {
  const rows = AWARDS_PRESENTATIONS.map((role) => `
    <div class="list-row">
      <div class="list-row-main">
        <h3 class="font-primary">
          - ${escapeHtml(role.course)}
          ${
            role.link
              ? `<a href="${escapeHtml(role.link)}" class="external-link" aria-label="Award or presentation link" target="_blank" rel="noopener noreferrer">${iconExternalLink(16)}</a>`
              : ""
          }
        </h3>
        <p class="role-line font-primary">${escapeHtml(role.role)}</p>
        <p class="list-row-description font-primary">${escapeHtml(role.description)}</p>
      </div>
      <span class="list-row-year font-primary">${escapeHtml(role.year)}</span>
    </div>
  `).join("");

  return `
    <div class="animate-fade-in">
      <!-- <h1 class="page-title font-primary">Awards & Presentations</h1> -->
      <div class="list-rows" style="gap:2.5rem;">
        ${rows}
      </div>
    </div>
  `;
}

function renderMain() {
  if (activeTab === "home") {
    contentEl.innerHTML = renderHomeView();
    return;
  }

  if (activeTab === "projects") {
    contentEl.innerHTML = renderProjectsView();
    return;
  }

  contentEl.innerHTML = renderAwardsView();
}

function init() {
  renderSidebar();
  renderNavigation();
  renderMain();
}

init();
