import React, { useRef, useEffect, useState } from 'react';
import './LiveDemo.css';

/**
 * LiveDemo Component
 * Renders HTML/CSS code inside a sandboxed iframe for a true live preview.
 * Shows both the rendered output and the source code side-by-side.
 */
export default function LiveDemo({ code, title }) {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(280);
  const [viewMode, setViewMode] = useState('preview'); // 'preview' | 'code'

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    const handleLoad = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc && doc.body) {
          const contentHeight = doc.body.scrollHeight;
          setIframeHeight(Math.min(Math.max(contentHeight + 16, 200), 600));
        }
      } catch (e) {
        // Cross-origin restriction fallback
      }
    };

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, [code]);

  // Extract just the displayable code (strip boilerplate for readability)
  const getDisplayCode = () => {
    // Find the <style> content
    const styleMatch = code.match(/<style>([\s\S]*?)<\/style>/);
    const bodyMatch = code.match(/<body>([\s\S]*?)<\/body>/);
    
    let displayParts = [];
    if (styleMatch) {
      displayParts.push(`/* CSS */\n${styleMatch[1].trim()}`);
    }
    if (bodyMatch) {
      displayParts.push(`<!-- HTML -->\n${bodyMatch[1].trim()}`);
    }
    return displayParts.join('\n\n') || code;
  };

  return (
    <div className="live-demo-container">
      {/* Toggle Bar */}
      <div className="demo-toggle-bar">
        <span className="demo-title">{title || 'Live Demo'}</span>
        <div className="demo-view-toggles">
          <button
            type="button"
            className={`demo-toggle-btn ${viewMode === 'preview' ? 'active' : ''}`}
            onClick={() => setViewMode('preview')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            Preview
          </button>
          <button
            type="button"
            className={`demo-toggle-btn ${viewMode === 'code' ? 'active' : ''}`}
            onClick={() => setViewMode('code')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            Code
          </button>
        </div>
      </div>

      {/* Preview Pane */}
      {viewMode === 'preview' && (
        <div className="demo-preview-pane">
          <iframe
            ref={iframeRef}
            srcDoc={code}
            title={title || 'Live Demo'}
            className="demo-iframe"
            style={{ height: `${iframeHeight}px` }}
            sandbox="allow-scripts"
            loading="lazy"
          />
        </div>
      )}

      {/* Code Pane */}
      {viewMode === 'code' && (
        <div className="demo-code-pane">
          <pre className="demo-code-block">
            <code>{getDisplayCode()}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
