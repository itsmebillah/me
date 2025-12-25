const GAS_URL = "https://script.google.com/macros/s/AKfycbwM263dREny57y2nXBCrAvgesWLdITWPHJLjqv2NmALXkCMIK016bZ819bMwzX0hn4t2g/exec";

document.addEventListener('DOMContentLoaded', loadProjects);

async function loadProjects() {
  const res = await fetch(`${GAS_URL}?action=projects`);
  const json = await res.json();

  if (!json.success) return;

  const container = document.getElementById('projectsContainer');
  container.innerHTML = '';

  json.data.forEach(p => {
    container.innerHTML += `
      <div class="project-card">
        <img src="${p.image || 'https://via.placeholder.com/400'}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <small>${p.tech}</small>
        <div class="links">
          <a href="${p.github}" target="_blank">GitHub</a>
          <a href="${p.demo}" target="_blank">Live</a>
        </div>
      </div>
    `;
  });
}
