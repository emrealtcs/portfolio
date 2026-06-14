/**
 * Homepage: renders project cards from PROJECTS data.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderNavigation('home');
  renderFooter('home');
  renderProjectGrid();
});

/**
 * Renders all project cards into #projects-grid.
 */
function renderProjectGrid() {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  grid.innerHTML = PROJECTS.map((project) => createProjectCard(project)).join(
    ''
  );

  grid.querySelectorAll('.project-card-link').forEach((link) => {
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  });
}

/**
 * Creates HTML for a single project card.
 * @param {object} project
 * @returns {string}
 */
function createProjectCard(project) {
  const tags = renderTechTags(project.technologies);
  const imageSrc = resolveAssetPath(project.image, 'home');
  const inDevelopment = project.inDevelopment === true;

  const cardBody = `
    <div class="project-card-image">
      <img
        src="${escapeHtml(imageSrc)}"
        alt="${escapeHtml(project.title)} project thumbnail"
        width="640"
        height="360"
        loading="lazy"
      />
    </div>
    <div class="project-card-body">
      <h3 class="project-card-title">${escapeHtml(project.title)}</h3>
      <p class="project-card-desc">${escapeHtml(project.description)}</p>
      <ul class="tag-list" aria-label="Technologies">${tags}</ul>
      ${inDevelopment ? '<p class="project-card-status">In development</p>' : ''}
    </div>
  `;

  if (inDevelopment) {
    return `
      <li class="project-card project-card--in-development">
        <div class="project-card-content" aria-label="${escapeHtml(project.title)} — in development">
          ${cardBody}
        </div>
      </li>
    `;
  }

  const href = `projects/${project.slug}.html`;
  return `
    <li class="project-card">
      <a class="project-card-link" href="${href}" aria-label="View ${escapeHtml(project.title)}">
        ${cardBody}
      </a>
    </li>
  `;
}
