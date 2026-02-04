import { stars } from '../data/movies.js'

export function renderStars() {
    return `
    <div class="stars-page">
      <div class="container">
        <div class="page-header">
          <h1>⭐ ดาราสาว</h1>
          <p class="page-subtitle">พบกับดาราสาวชื่อดังและผลงานของพวกเธอ</p>
        </div>
        
        <div class="grid grid-4">
          ${stars.map(star => `
            <div class="star-card">
              <img src="${star.photo}" alt="${star.name}" class="star-photo">
              <div class="star-info">
                <h3 class="star-name">${star.name}</h3>
                <p class="star-bio">${star.bio}</p>
                <div class="star-stats">
                  <span>🎬 ${star.movies} เรื่อง</span>
                  <span>⭐ ${star.rating}</span>
                </div>
                <button class="btn btn-primary btn-sm">ดูผลงาน</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    
    <style>
      .star-card {
        background: var(--color-bg-card);
        border-radius: var(--radius-lg);
        overflow: hidden;
        border: 1px solid var(--color-border);
        transition: all var(--transition-normal);
      }
      
      .star-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(255, 0, 0, 0.3);
      }
      
      .star-photo {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
      
      .star-info {
        padding: var(--spacing-md);
      }
      
      .star-name {
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-xs);
      }
      
      .star-bio {
        color: var(--color-text-secondary);
        margin-bottom: var(--spacing-sm);
        font-size: var(--font-size-sm);
      }
      
      .star-stats {
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--spacing-md);
        font-size: var(--font-size-sm);
        color: var(--color-text-muted);
      }
    </style>
  `
}
