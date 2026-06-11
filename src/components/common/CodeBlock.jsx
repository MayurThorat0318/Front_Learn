import React, { useState } from 'react';
import { highlightCode } from '../../utils/syntaxHighlight';
import './CodeBlock.css';

/**
 * Interactive CodeBlock Component
 * Displays formatted code with line numbers, syntax highlighting, and copy capabilities.
 * 
 * @param {string} code - The raw source code text
 * @param {string} language - Syntax parser: 'javascript' | 'html' | 'css'
 * @param {boolean} showLineNumbers - Toggles the line-number gutter
 */
export default function CodeBlock({
  code = '',
  language = 'javascript',
  showLineNumbers = true
}) {
  const [copied, setCopied] = useState(false);

  // Trim code to prevent trailing empty lines
  const cleanCode = code.trim();
  const highlightedHtml = highlightCode(cleanCode, language);
  
  // Calculate lines for the gutter
  const lineCount = cleanCode.split('\n').length;
  const lineNumbers = Array.from({ length: lineCount }, (_, idx) => idx + 1);

  // Handle Clipboard action
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanCode);
      setCopied(true);
      // Reset copied state indicator after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code text:', err);
    }
  };

  return (
    <div className="code-block-wrapper">
      {/* Code Block Header (File Info / Copy action) */}
      <div className="code-block-header">
        <span className="code-block-lang">{language.toUpperCase()}</span>
        <button
          className={`code-block-copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon-success"><path d="M20 6 9 17l-5-5"></path></svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Container */}
      <div className="code-block-body">
        {showLineNumbers && (
          <div className="code-block-gutter" aria-hidden="true">
            {lineNumbers.map((num) => (
              <span key={num} className="gutter-num">{num}</span>
            ))}
          </div>
        )}
        <pre className="code-block-content">
          <code 
            className={`language-${language}`} 
            dangerouslySetInnerHTML={{ __html: highlightedHtml }} 
          />
        </pre>
      </div>
    </div>
  );
}
