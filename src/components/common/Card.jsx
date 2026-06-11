import React from 'react';
import './Card.css';

/**
 * Reusable Card Component
 * @param {string} category - Optional subheader category name
 * @param {string} title - Main header title
 * @param {string} tag - Small status badge/tag text
 * @param {string} image - Optional banner image URL
 * @param {React.ReactNode} children - Core body content
 * @param {React.ReactNode} footer - Optional footer elements
 * @param {Function} onClick - Action handler (turns card into a button container)
 * @param {string} className - Extensible custom classes
 */
export default function Card({
  category,
  title,
  tag,
  image,
  children,
  footer,
  onClick,
  className = '',
  ...props
}) {
  const CardContainer = onClick ? 'button' : 'div';

  return (
    <CardContainer
      className={`card-box ${onClick ? 'card-clickable' : ''} ${className}`}
      onClick={onClick}
      {...(onClick ? { type: 'button' } : {})}
      {...props}
    >
      {/* Optional Card Image Banner */}
      {image && (
        <div className="card-image-wrap">
          <img src={image} alt={title} className="card-image" loading="lazy" />
        </div>
      )}

      {/* Card Content Shell */}
      <div className="card-body">
        {/* Category & Badge */}
        {(category || tag) && (
          <div className="card-meta">
            {category && <span className="card-category">{category}</span>}
            {tag && <span className="card-tag">{tag}</span>}
          </div>
        )}

        {/* Title */}
        {title && <h3 className="card-title">{title}</h3>}

        {/* Inner Card Child Body */}
        {children && <div className="card-content">{children}</div>}
      </div>

      {/* Optional Card Footer */}
      {footer && <div className="card-footer">{footer}</div>}
    </CardContainer>
  );
}
