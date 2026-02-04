import { reviews } from '../data/movies.js'

export function renderReviews() {
    return `
    <div class="reviews-page">
      <div class="container">
        <div class="page-header">
          <h1>⭐ รีวิวจากผู้ใช้งาน</h1>
          <p class="page-subtitle">อ่านความคิดเห็นและรีวิวจากสมาชิกของเรา</p>
        </div>
        
        <div class="review-stats">
          <div class="stat-card">
            <div class="stat-value">4.8</div>
            <div class="stat-label">คะแนนเฉลี่ย</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">1,234</div>
            <div class="stat-label">รีวิวทั้งหมด</div>
          </div>
        </div>
        
        <div class="reviews-list">
          ${reviews.map(review => `
            <div class="review-card">
              <div class="review-header">
                <h3>${review.reviewer}</h3>
                <div>${'⭐'.repeat(review.rating)}</div>
              </div>
              <h4>${review.movieTitle}</h4>
              <p>${review.comment}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `
}
