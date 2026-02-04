export function renderAd(size = 'banner') {
    const adSizes = {
        banner: { width: '100%', height: '120px' },
        square: { width: '300px', height: '300px' },
        sidebar: { width: '300px', height: '600px' }
    }

    const { width, height } = adSizes[size] || adSizes.banner

    return `
    <div class="ad-container" style="width: ${width}; height: ${height};">
      <div class="ad-content">
        <span class="ad-label">โฆษณา</span>
        <p class="ad-placeholder">พื้นที่โฆษณา ${size}</p>
      </div>
    </div>
    
    <style>
      .ad-container {
        background: var(--color-bg-card);
        border: 2px dashed var(--color-border);
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: var(--spacing-md) auto;
        position: relative;
      }
      
      .ad-content {
        text-align: center;
      }
      
      .ad-label {
        display: block;
        font-size: var(--font-size-sm);
        color: var(--color-text-muted);
        margin-bottom: var(--spacing-xs);
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      .ad-placeholder {
        color: var(--color-text-secondary);
        font-size: var(--font-size-base);
      }
    </style>
  `
}
