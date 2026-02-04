export function renderHeader() {
    return `
    <header class="site-header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a href="#" data-nav="home">
              <span class="logo-icon">🔞</span>
              <span class="logo-text">Adult<span class="logo-accent">Hub</span></span>
            </a>
          </div>
          
          <nav class="main-nav">
            <a href="#" data-nav="home" class="nav-link">หน้าแรก</a>
            <a href="#" data-nav="categories" class="nav-link">ประเภทหนัง</a>
            <a href="#" data-nav="reviews" class="nav-link">รีวิว</a>
            <a href="#" data-nav="stars" class="nav-link">ดาราสาว</a>
          </nav>
          
          <div class="header-actions">
            <button class="btn btn-outline btn-sm">เข้าสู่ระบบ</button>
          </div>
        </div>
      </div>
    </header>
    
    <style>
      .site-header {
        background: var(--color-bg-secondary);
        border-bottom: 2px solid var(--color-accent-primary);
        padding: var(--spacing-md) 0;
        position: sticky;
        top: 0;
        z-index: 1000;
        backdrop-filter: blur(10px);
        background: rgba(26, 26, 26, 0.95);
      }
      
      .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-lg);
      }
      
      .logo a {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        font-size: var(--font-size-xl);
        font-weight: 800;
        color: var(--color-text-primary);
      }
      
      .logo-icon {
        font-size: 1.5rem;
      }
      
      .logo-accent {
        color: var(--color-accent-primary);
      }
      
      .main-nav {
        display: flex;
        gap: var(--spacing-lg);
      }
      
      .nav-link {
        color: var(--color-text-secondary);
        font-weight: 500;
        transition: color var(--transition-fast);
        position: relative;
      }
      
      .nav-link:hover {
        color: var(--color-accent-primary);
      }
      
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--color-accent-primary);
        transition: width var(--transition-fast);
      }
      
      .nav-link:hover::after {
        width: 100%;
      }
      
      .btn-sm {
        padding: 0.5rem 1rem;
        font-size: var(--font-size-sm);
      }
      
      @media (max-width: 768px) {
        .header-content {
          flex-wrap: wrap;
        }
        
        .main-nav {
          order: 3;
          width: 100%;
          justify-content: space-around;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-sm);
        }
        
        .nav-link {
          font-size: var(--font-size-sm);
        }
      }
    </style>
  `
}
