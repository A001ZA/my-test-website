export function renderFooter() {
    const currentYear = new Date().getFullYear()

    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">Adult<span class="text-accent">Hub</span></h3>
            <p class="footer-text">แพลตฟอร์มบันเทิงสำหรับผู้ใหญ่ชั้นนำ</p>
            <p class="footer-warning">⚠️ เนื้อหาสำหรับผู้มีอายุ 18 ปีขึ้นไปเท่านั้น</p>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">เมนูหลัก</h4>
            <ul class="footer-links">
              <li><a href="#" data-nav="home">หน้าแรก</a></li>
              <li><a href="#" data-nav="categories">ประเภทหนัง</a></li>
              <li><a href="#" data-nav="reviews">รีวิว</a></li>
              <li><a href="#" data-nav="stars">ดาราสาว</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">ข้อมูล</h4>
            <ul class="footer-links">
              <li><a href="#">เกี่ยวกับเรา</a></li>
              <li><a href="#">นโยบายความเป็นส่วนตัว</a></li>
              <li><a href="#">เงื่อนไขการใช้งาน</a></li>
              <li><a href="#">ติดต่อเรา</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">ติดตามเรา</h4>
            <div class="social-links">
              <a href="#" class="social-link">📱 Twitter</a>
              <a href="#" class="social-link">📷 Instagram</a>
              <a href="#" class="social-link">💬 Discord</a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; ${currentYear} AdultHub. All rights reserved.</p>
          <p class="footer-disclaimer">เว็บไซต์นี้มีเนื้อหาสำหรับผู้ใหญ่ กรุณาใช้ดุลยพินิจในการเข้าชม</p>
        </div>
      </div>
    </footer>
    
    <style>
      .site-footer {
        background: var(--color-bg-secondary);
        border-top: 2px solid var(--color-accent-primary);
        padding: var(--spacing-xl) 0 var(--spacing-md);
        margin-top: var(--spacing-xl);
      }
      
      .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-lg);
      }
      
      .footer-title {
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-sm);
      }
      
      .text-accent {
        color: var(--color-accent-primary);
      }
      
      .footer-text {
        color: var(--color-text-secondary);
        margin-bottom: var(--spacing-xs);
      }
      
      .footer-warning {
        color: var(--color-accent-primary);
        font-size: var(--font-size-sm);
        font-weight: 600;
      }
      
      .footer-subtitle {
        font-size: var(--font-size-lg);
        margin-bottom: var(--spacing-sm);
        color: var(--color-accent-primary);
      }
      
      .footer-links {
        list-style: none;
      }
      
      .footer-links li {
        margin-bottom: var(--spacing-xs);
      }
      
      .footer-links a {
        color: var(--color-text-secondary);
        transition: color var(--transition-fast);
      }
      
      .footer-links a:hover {
        color: var(--color-accent-primary);
      }
      
      .social-links {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
      }
      
      .social-link {
        color: var(--color-text-secondary);
        transition: color var(--transition-fast);
      }
      
      .social-link:hover {
        color: var(--color-accent-primary);
      }
      
      .footer-bottom {
        text-align: center;
        padding-top: var(--spacing-md);
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: var(--font-size-sm);
      }
      
      .footer-disclaimer {
        margin-top: var(--spacing-xs);
        font-size: 0.75rem;
      }
      
      @media (max-width: 768px) {
        .footer-content {
          grid-template-columns: 1fr;
        }
      }
    </style>
  `
}
