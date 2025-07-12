// Load and display portfolio projects from JSON
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");
  if (container) {
    fetch("data/projects.json")
      .then(response => response.json())
      .then(data => {
        container.innerHTML = "";
        data.projects.forEach(project => {
          const card = document.createElement("div");
          card.className = "project-card";
          card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn" target="_blank">View</a>
          `;
          container.appendChild(card);
        });
      })
      .catch(error => {
        container.innerHTML = "<p>❌ Error loading projects.</p>";
        console.error("Error:", error);
      });
  }
});
