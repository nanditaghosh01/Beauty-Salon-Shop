import { useState } from 'react'
import { X } from 'lucide-react'
import { galleryItems, galleryCategories } from '../data/gallery.js'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

export default function Gallery() {
  const containerRef = useScrollAnimation([])
  const [filter, setFilter] = useState('All')
  const [lightboxItem, setLightboxItem] = useState(null)

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter)

  return (
    <section id="gallery" ref={containerRef}>
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Gallery</span>
          <h2>Every look tells a little story.</h2>
        </div>
        <div className="gallery-filters" data-reveal>
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="gallery-masonry">
          {filtered.map((item) => (
            <div
              className="gallery-item"
              key={item.id}
              onClick={() => setLightboxItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setLightboxItem(item) }}
              aria-label={`View ${item.title}`}
            >
              <img src={item.image} alt={`${item.title} — Nandita Beauty Studio`} loading="lazy" />
              <div className="gallery-caption">
                <strong>{item.title}</strong>
                <span>Nandita Beauty Studio</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxItem && (
        <div className="lightbox-overlay" onClick={() => setLightboxItem(null)} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={() => setLightboxItem(null)} aria-label="Close image">
            <X size={20} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxItem.image} alt={lightboxItem.title} />
            <p className="lightbox-caption">{lightboxItem.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}
