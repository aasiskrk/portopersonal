// Fetch GitHub repository data
fetch('https://api.github.com/users/YourGitHubUsername/repos')
    .then(response => response.json())
    .then(data => {
        // Sort repositories based on last update timestamp
        data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        const projectsContainer = document.getElementById('projects-container');

        data.forEach(repo => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
        <div class="card-content">
          <div class="card-image">
            <img src="${extractImageFromDescription(repo.description)}" alt="Project Image">
          </div>
          <div class="card-info-wrapper">
            <div class="card-info">
              <div class="card-info-title">
                <h3>${repo.name}</h3>
                <p>${repo.description}</p>
              </div>
            </div>
          </div>
        </div>
      `;
            projectsContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching GitHub data:', error);
    });

// Function to extract image URL from repository description
function extractImageFromDescription(description) {
    const regex = /!\[.*?\]\((.*?)\)/; // Regular expression to extract image URLs in Markdown format
    const match = description.match(regex);
    return match ? match[1] : ''; // Return the first matched URL
}
