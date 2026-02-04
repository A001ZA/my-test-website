import { movies, categories } from '../data/movies.js'
import { renderMovieCard } from '../components/movie-card.js'
import { renderAd } from '../components/ads.js'

export function renderHomepage() {
    const featuredMovies = movies.slice(0, 6)
    const topCategories = categories.slice(0, 6)

    return `
    <div class="homepage">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">ยินดีต้อนรับสู่ <span class="text-accent">AdultHub</span></h1>
          <p class="hero-subtitle">แพลตฟอร์มบันเทิงสำหรับผู้ใหญ่คุณภาพสูง</p>
          <div class="hero-actions">
            <button class="btn btn-primary">เริ่มดูเลย</button>
            <button class="btn btn-outline">เรียนรู้เพิ่มเติม</button>
          </div>
        </div>
        <div class="hero-bg"></div>
      </section>
      
      <!-- Ad Banner -->
      ${renderAd('banner')}
      
      <!-- Featured Movies -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2>🔥 หนังแนะนำ</h2>
            <a href="#" data-nav="categories" class="view-all">ดูทั้งหมด →</a>
          </div>
          <div class="grid grid-3">
            ${featuredMovies.map(movie => renderMovieCard(movie)).join('')}
          </div>
        </div>
      </section>
      
      <!-- Categories -->
      <section class="section categories-section">
        <div class="container">
          <h2 class="text-center">📂 ประเภทหนัง</h2>
          <div class="grid grid-3">
            ${topCategories.map(cat => `
              <div class="category-card">
                <span class="category-icon">${cat.icon}</span>
                <h3 class="category-name">${cat.name}</h3>
                <p class="category-count">${cat.count} เรื่อง</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
      
      <!-- Ad Square -->
      <div class="container">
        ${renderAd('square')}
      </div>
      
      <!-- CTA Section -->
      <section class="section cta-section">
        <div class="container text-center">
          <h2>พร้อมเริ่มต้นแล้วหรือยัง?</h2>
          <p class="cta-text">สมัครสมาชิกวันนี้ รับชมคอนเทนต์พรีเมียมไม่จำกัด</p>
          <button class="btn btn-primary btn-lg">สมัครสมาชิก</button>
        </div>
      </section>
    </div>
    
    <style>
      .hero {
        position: relative;
        min-height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin-bottom: var(--spacing-xl);
      }
      
      .hero-bg {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #ff0000 0%, #0a0a0a 100%);
        opacity: 0.2;
        z-index: -1;
      }
      
      .hero-content {
        text-align: center;
        z-index: 1;
        max-width: 800px;
        padding: var(--spacing-xl);
      }
      
      .hero-title {
        font-size: var(--font-size-3xl);
        margin-bottom: var(--spacing-md);
        text-shadow: 0 2px 10px rgba(255, 0, 0, 0.5);
      }
      
      .hero-subtitle {
        font-size: var(--font-size-xl);
        color: var(--color-text-secondary);
        margin-bottom: var(--spacing-lg);
      }
      
      .hero-actions {
        display: flex;
        gap: var(--spacing-md);
        justify-content: center;
        flex-wrap: wrap;
      }
      
      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--spacing-lg);
      }
      
      .view-all {
        color: var(--color-accent-primary);
        font-weight: 600;
        transition: transform var(--transition-fast);
      }
      
      .view-all:hover {
        transform: translateX(4px);
      }
      
      .categories-section {
        background: var(--color-bg-secondary);
        padding: var(--spacing-xl) 0;
      }
      
      .category-card {
        background: var(--color-bg-card);
        padding: var(--spacing-lg);
        border-radius: var(--radius-lg);
        text-align: center;
        transition: all var(--transition-normal);
        border: 1px solid var(--color-border);
        cursor: pointer;
      }
      
      .category-card:hover {
        transform: translateY(-4px);
        border-color: var(--color-accent-primary);
        box-shadow: 0 8px 20px rgba(255, 0, 0, 0.2);
      }
      
      .category-icon {
        font-size: 3rem;
        display: block;
        margin-bottom: var(--spacing-sm);
      }
      
      .category-name {
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-xs);
      }
      
      .category-count {
        color: var(--color-text-muted);
      }
      
      .cta-section {
        background: linear-gradient(135deg, var(--color-accent-secondary), var(--color-accent-primary));
        padding: var(--spacing-xl) 0;
        border-radius: var(--radius-lg);
      }
      
      .cta-text {
        font-size: var(--font-size-lg);
        margin-bottom: var(--spacing-lg);
        opacity: 0.9;
      }
      
      .btn-lg {
        padding: var(--spacing-md) var(--spacing-xl);
        font-size: var(--font-size-lg);
      }
      
      @media (max-width: 768px) {
        .hero {
          min-height: 400px;
        }
        
        .hero-title {
          font-size: var(--font-size-2xl);
        }
        
        .hero-subtitle {
          font-size: var(--font-size-lg);
        }
      }
    </style>
  `
}
