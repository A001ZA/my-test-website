export function renderMovieCard(movie) {
    return `
    <div class="card movie-card">
      <div class="card-img-wrapper">
        <img src="${movie.thumbnail}" alt="${movie.title}" class="card-img" loading="lazy">
        <div class="card-overlay">
          <span class="badge">${movie.category}</span>
          <span class="duration">${movie.duration}</span>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${movie.title}</h3>
        <p class="card-text">${movie.description}</p>
        <div class="card-meta">
          <span class="rating">⭐ ${movie.rating}</span>
          <span class="views">👁️ ${movie.views}</span>
        </div>
      </div>
    </div>
    
    <style>
      .movie-card {
        cursor: pointer;
      }
      
      .card-img-wrapper {
        position: relative;
        overflow: hidden;
      }
      
      .card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: var(--spacing-sm);
        display: flex;
        justify-content: space-between;
        background: linear-gradient(to bottom, rgba(0,0,0,0.7), transparent);
      }
      
      .duration {
        background: rgba(0, 0, 0, 0.8);
        color: var(--color-text-primary);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius-sm);
        font-size: var(--font-size-sm);
      }
      
      .card-meta {
        display: flex;
        justify-content: space-between;
        margin-top: var(--spacing-sm);
        font-size: var(--font-size-sm);
        color: var(--color-text-muted);
      }
      
      .rating, .views {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
    </style>
  `
}
