import React from 'react';
import './Button.css';

/**
 * Reusable Button Component
 * @param {string} variant - Visual style: 'primary' | 'secondary' | 'outline' | 'text'
 * @param {string} size - Sizing: 'sm' | 'md' | 'lg'
 * @param {boolean} loading - Displays a loading spinner if true
 * @param {React.ReactNode} children - Button text or inner elements
 * @param {string} className - Additional custom classes
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${loading ? 'btn-loading' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="btn-spinner" aria-hidden="true">
          <svg className="spinner-svg" viewBox="0 0 24 24" fill="none">
            <circle className="spinner-track" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="spinner-arc" d="M12 2a10 10 0 0 1 10 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
      )}
      <span className="btn-content">{children}</span>
    </button>
  );
}
