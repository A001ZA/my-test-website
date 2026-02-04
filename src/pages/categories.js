import { categories, movies } from '../data/movies.js'
import { renderMovieCard } from '../components/movie-card.js'

export function renderCategories() {
    return `
    <div class="categories-page">
      <div class="container">
        <div class="page-header">
          <h1>📂 ประเภทหนัง</h1>
          <p class="page-subtitle">เลือกดูหนังตามหมวดหมู่ที่คุณชื่นชอบ</p>
        </div>
        
        <!-- All Categories -->
        <div class="grid grid-3">
          ${categories.map(cat => `
            <div class="category-card-large">
              <span class="category-icon-large">${cat.icon}</span>
              <div class="category-info">
                <h3 class="category-name">${cat.name}</h3>
                <p class="category-count">${cat.count} เรื่อง</p>
              </div>
              <button class="btn btn-outline btn-sm">ดูทั้งหมด</button>
            </div>
          `).join('')}
        </div>
        
        <!-- Sample Movies by Category -->
        <section class="section">
          <h2>🔥 หนังยอดนิยมในแต่ละหมวด</h2>
          <div class="grid grid-4">
            ${movies.map(movie => renderMovieCard(movie)).join('')}
          </div>
        </section>
      </div>
    </div>
    
    <style>
      .page-header {
        text-align: center;
        margin-bottom: var(--spacing-xl);
        padding: var(--spacing-xl) 0;
      }
      
      .page-header h1 {
        font-size: var(--font-size-3xl);
        margin-bottom: var(--spacing-sm);
      }
      
      .page-subtitle {
        font-size: var(--font-size-lg);
        color: var(--color-text-secondary);
      }
      
      .category-card-large {
        background: var(--color-bg-card);
        padding: var(--spacing-lg);
        border-radius: var(--radius-lg);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-md);
        border: 2px solid var(--color-border);
        transition: all var(--transition-normal);
        cursor: pointer;
      }
      
      .category-card-large:hover {
        border-color: var(--color-accent-primary);
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(255, 0, 0, 0.3);
      }
      
      .category-icon-large {
        font-size: 4rem;
      }
      
      .category-info {
        text-align: center;
      }
      
      .category-name {
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-xs);
      }
      
      .category-count {
        color: var(--color-text-muted);
        font-size: var(--font-size-sm);
      }
    </style>
  `
}
