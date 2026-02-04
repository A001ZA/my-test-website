import './style.css'
import { renderHeader } from './components/header.js'
import { renderFooter } from './components/footer.js'
import { renderHomepage } from './pages/homepage.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Render header
  const headerContainer = document.getElementById('header')
  if (headerContainer) {
    headerContainer.innerHTML = renderHeader()
  }

  // Render main content (homepage by default)
  const mainContainer = document.getElementById('main-content')
  if (mainContainer) {
    mainContainer.innerHTML = renderHomepage()
  }

  // Render footer
  const footerContainer = document.getElementById('footer')
  if (footerContainer) {
    footerContainer.innerHTML = renderFooter()
  }

  // Setup navigation
  setupNavigation()
})

function setupNavigation() {
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-nav]')) {
      e.preventDefault()
      const page = e.target.getAttribute('data-nav')
      navigateTo(page)
    }
  })
}

async function navigateTo(page) {
  const mainContainer = document.getElementById('main-content')
  
  switch(page) {
    case 'home':
      const { renderHomepage } = await import('./pages/homepage.js')
      mainContainer.innerHTML = renderHomepage()
      break
    case 'categories':
      const { renderCategories } = await import('./pages/categories.js')
      mainContainer.innerHTML = renderCategories()
      break
    case 'reviews':
      const { renderReviews } = await import('./pages/reviews.js')
      mainContainer.innerHTML = renderReviews()
      break
    case 'stars':
      const { renderStars } = await import('./pages/stars.js')
      mainContainer.innerHTML = renderStars()
      break
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
