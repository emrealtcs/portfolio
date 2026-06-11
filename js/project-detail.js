/**
 * Project detail pages: populates content from PROJECTS by slug.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderNavigation('project');
  renderFooter('project');
  renderProjectDetail();
});

/**
 * Reads slug from document body and fills the project page template.
 */
function renderProjectDetail() {
  const slug = document.body.dataset.project;
  if (!slug) {
    showProjectError('Project not specified.');
    return;
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    showProjectError('Project not found.');
    return;
  }

  document.title = `${project.title} | Portfolio`;

  setText('project-title', project.title);
  setHtml('project-overview', project.overview);
  setHtml('project-problem', project.problemStatement);
  setHtml('project-architecture', project.architecture);

  const techList = document.getElementById('project-technologies');
  if (techList) {
    techList.innerHTML = project.technologies
      .map((t) => `<li>${escapeHtml(t)}</li>`)
      .join('');
  }

  const featuresList = document.getElementById('project-features');
  if (featuresList) {
    featuresList.innerHTML = project.features
      .map((f) => `<li>${escapeHtml(f)}</li>`)
      .join('');
  }

  const demoBtn = document.getElementById('demo-link');
  if (demoBtn) {
    demoBtn.href = project.demoUrl;
    demoBtn.setAttribute('aria-label', `Live demo for ${project.title}`);
  }

  renderProjectMedia(project);
}

/**
 * Renders hero image or video in the media container.
 * @param {object} project
 */
function renderProjectMedia(project) {
  const container = document.getElementById('project-media');
  if (!container) return;

  if (project.videoUrl) {
    container.innerHTML = `
      <video
        class="project-hero-video"
        controls
        preload="metadata"
        poster="${escapeHtml(project.image)}"
        aria-label="${escapeHtml(project.title)} demonstration video"
      >
        <source src="${escapeHtml(project.videoUrl)}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    container.innerHTML = `
      <img
        class="project-hero-image"
        src="${escapeHtml(project.image)}"
        alt="${escapeHtml(project.title)}"
        width="1200"
        height="675"
      />
    `;
  }
}

/**
 * Sets text content for an element by id.
 * @param {string} id
 * @param {string} text
 */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/**
 * Sets HTML content (escaped paragraphs) for an element by id.
 * @param {string} id
 * @param {string} text
 */
function setHtml(id, text) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = `<p>${escapeHtml(text)}</p>`;
  }
}

/**
 * Shows an error state when project data is missing.
 * @param {string} message
 */
function showProjectError(message) {
  const main = document.querySelector('.project-main');
  if (main) {
    main.innerHTML = `
      <h1>Project unavailable</h1>
      <p>${escapeHtml(message)}</p>
      <a class="btn btn-secondary" href="../index.html">Back to projects</a>
    `;
  }
}
