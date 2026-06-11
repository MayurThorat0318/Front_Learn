/**
 * Custom Lightweight Code Syntax Highlighter
 * Tokenizes strings using RegEx patterns for educational and display purposes.
 * Supports: html, css, javascript, jsx, react
 * 
 * @param {string} code - The raw source code text
 * @param {string} language - The syntax language identifier
 * @returns {string} - Styled HTML string with colored tokens
 */
export function highlightCode(code, language = 'javascript') {
  if (!code) return '';
  const lang = language.toLowerCase();

  // Step 1: Escape standard HTML characters to prevent rendering issues
  let escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Step 2: Apply token expressions based on grammar rules
  if (lang === 'javascript' || lang === 'js' || lang === 'jsx' || lang === 'react') {
    // Match line comments //
    escaped = escaped.replace(/(\/\/.*)/g, '<span class="token-comment">$1</span>');
    
    // Match block comments /* */
    escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>');
    
    // Match string literals (single, double, template backticks)
    escaped = escaped.replace(/(["'`])([\s\S]*?)\1/g, '<span class="token-string">$1$2$1</span>');
    
    // Match language numeric constants
    escaped = escaped.replace(/\b(\d+)\b/g, '<span class="token-number">$1</span>');

    // Match core syntax keywords
    const keywords = [
      'const', 'let', 'var', 'function', 'return', 'class', 'import', 'export', 
      'from', 'default', 'extends', 'if', 'else', 'for', 'while', 'new', 
      'this', 'async', 'await', 'true', 'false', 'null', 'undefined', 'try', 'catch'
    ];
    keywords.forEach((kw) => {
      // Use boundary checker \b to match exact word
      const regex = new RegExp(`\\b(${kw})\\b`, 'g');
      escaped = escaped.replace(regex, '<span class="token-keyword">$1</span>');
    });

    // Match invoked functions e.g. functionName(
    escaped = escaped.replace(/\b([a-zA-Z0-9_]+)(?=\()/g, '<span class="token-function">$1</span>');

  } else if (lang === 'html') {
    // Match XML/HTML tag tags e.g. <div> or </div>
    // Matches tag names inside brackets
    escaped = escaped.replace(/&lt;(\/?[a-zA-Z0-9:-]+)(\s|&gt;)/g, '&lt;<span class="token-tag">$1</span>$2');
    
    // Match HTML tag attributes e.g. class= or onClick=
    escaped = escaped.replace(/(\s)([a-zA-Z0-9-]+)=/g, '$1<span class="token-attr">$2</span>=');
    
    // Match attribute values inside quotes e.g. ="wrapper"
    escaped = escaped.replace(/="([^"]*)"/g, '="<span class="token-attr-val">$1</span>"');
    
    // Match HTML comments <!-- -->
    escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="token-comment">$1</span>');

  } else if (lang === 'css') {
    // Match CSS selectors before bracket open e.g. .header {
    escaped = escaped.replace(/([a-zA-Z0-9_#.:\s,-]+)\s*\{/g, '<span class="token-selector">$1</span> {');
    
    // Match CSS properties before colon e.g. color:
    escaped = escaped.replace(/([a-zA-Z-]+)\s*:/g, '<span class="token-property">$1</span>:');
    
    // Match CSS property values between colon and semicolon
    escaped = escaped.replace(/:\s*([^;]+);/g, ': <span class="token-value">$1</span>;');
    
    // Match CSS comments /* */
    escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>');
  }

  return escaped;
}
