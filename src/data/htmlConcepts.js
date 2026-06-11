// HTML Concepts Reference Database
// Each concept includes: brief info, syntax, and a full HTML demo string for iframe rendering

export const htmlConcepts = [
  {
    id: 'document-structure',
    title: 'Document Structure & Boilerplate',
    icon: '📄',
    description: 'Every HTML page starts with a standard boilerplate. The <!DOCTYPE html> declaration tells the browser to use modern standards mode. The <html> tag wraps everything, <head> holds metadata, and <body> contains visible content.',
    syntax: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <!-- visible content goes here -->
</body>
</html>`,
    demoCode: `<!DOCTYPE html>
<html lang="en">
<head>
<style>
  body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8fafc; color: #1e293b; }
  .structure-diagram { display: flex; flex-direction: column; gap: 8px; }
  .tag-block { border: 2px dashed; border-radius: 10px; padding: 12px 16px; position: relative; }
  .tag-block .label { position: absolute; top: -10px; left: 12px; background: #f8fafc; padding: 0 6px; font-size: 12px; font-weight: 700; letter-spacing: 0.5px; }
  .html-block { border-color: #8b5cf6; }
  .html-block .label { color: #8b5cf6; }
  .head-block { border-color: #0ea5e9; margin: 8px 0; }
  .head-block .label { color: #0ea5e9; }
  .body-block { border-color: #10b981; margin-top: 4px; }
  .body-block .label { color: #10b981; }
  .meta-line { font-size: 13px; color: #64748b; padding: 3px 0; font-family: monospace; }
  .content-preview { background: #e0f2fe; border-radius: 8px; padding: 12px; text-align: center; color: #0369a1; font-weight: 600; margin-top: 8px; }
</style>
</head>
<body>
  <div class="structure-diagram">
    <div class="tag-block html-block">
      <span class="label">&lt;html&gt;</span>
      <div class="tag-block head-block">
        <span class="label">&lt;head&gt;</span>
        <div class="meta-line">&lt;meta charset="UTF-8"&gt;</div>
        <div class="meta-line">&lt;title&gt;My Page&lt;/title&gt;</div>
      </div>
      <div class="tag-block body-block">
        <span class="label">&lt;body&gt;</span>
        <div class="content-preview">✨ Your visible content appears here</div>
      </div>
    </div>
  </div>
</body>
</html>`,
    notes: [
      'Always include <!DOCTYPE html> at the very top',
      'The lang attribute on <html> helps screen readers pronounce text correctly',
      '<meta charset="UTF-8"> ensures special characters display properly',
      'The viewport meta tag is essential for responsive mobile layouts'
    ]
  },
  {
    id: 'headings',
    title: 'Headings (h1 – h6)',
    icon: '📌',
    description: 'HTML provides six levels of headings from <h1> (most important) to <h6> (least important). Headings create a document outline that search engines and screen readers use to understand page structure. Use only one <h1> per page.',
    syntax: `<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Sub-subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: linear-gradient(135deg, #f8fafc 0%, #e8edf5 100%); }
  h1, h2, h3, h4, h5, h6 { margin: 0 0 6px 0; padding: 10px 16px; border-radius: 8px; transition: transform 0.2s; }
  h1:hover, h2:hover, h3:hover, h4:hover, h5:hover, h6:hover { transform: translateX(8px); }
  h1 { font-size: 2rem; color: #7c3aed; background: #ede9fe; border-left: 5px solid #7c3aed; }
  h2 { font-size: 1.6rem; color: #2563eb; background: #dbeafe; border-left: 5px solid #2563eb; }
  h3 { font-size: 1.35rem; color: #0891b2; background: #cffafe; border-left: 5px solid #0891b2; }
  h4 { font-size: 1.15rem; color: #059669; background: #d1fae5; border-left: 5px solid #059669; }
  h5 { font-size: 1rem; color: #d97706; background: #fef3c7; border-left: 5px solid #d97706; }
  h6 { font-size: 0.875rem; color: #dc2626; background: #fee2e2; border-left: 5px solid #dc2626; }
  .size-label { float: right; font-size: 0.7em; opacity: 0.6; font-weight: 400; }
</style></head>
<body>
  <h1>h1 — Main Page Title <span class="size-label">2rem</span></h1>
  <h2>h2 — Section Heading <span class="size-label">1.6rem</span></h2>
  <h3>h3 — Subsection Heading <span class="size-label">1.35rem</span></h3>
  <h4>h4 — Group Heading <span class="size-label">1.15rem</span></h4>
  <h5>h5 — Minor Heading <span class="size-label">1rem</span></h5>
  <h6>h6 — Smallest Heading <span class="size-label">0.875rem</span></h6>
</body></html>`,
    notes: [
      'Use only one <h1> per page — it represents the main topic',
      'Don\'t skip heading levels (e.g., don\'t jump from h2 to h5)',
      'Headings are block-level elements — they take full width',
      'Screen readers use headings to build a navigable page outline'
    ]
  },
  {
    id: 'paragraphs-text',
    title: 'Paragraphs & Text Formatting',
    icon: '✏️',
    description: 'The <p> tag defines a paragraph of text. HTML also provides inline text formatting tags: <strong> for bold importance, <em> for italic emphasis, <mark> for highlighted text, <small> for fine print, and <del>/<ins> for edits.',
    syntax: `<p>This is a paragraph.</p>
<strong>Bold/Important</strong>
<em>Italic/Emphasized</em>
<mark>Highlighted</mark>
<small>Fine print</small>
<del>Deleted</del> <ins>Inserted</ins>`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: #f8fafc; color: #1e293b; line-height: 1.8; }
  .demo-box { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); margin-bottom: 12px; }
  .demo-box:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
  .tag-name { display: inline-block; font-family: monospace; font-size: 0.8em; background: #ede9fe; color: #7c3aed; padding: 2px 8px; border-radius: 4px; margin-right: 8px; }
  p { margin: 0 0 8px 0; }
  mark { background: #fef08a; padding: 2px 4px; border-radius: 3px; }
  del { color: #ef4444; }
  ins { color: #10b981; text-decoration: none; border-bottom: 2px solid #10b981; }
</style></head>
<body>
  <div class="demo-box">
    <span class="tag-name">&lt;p&gt;</span>
    <p>This is a standard paragraph. It creates a block of text with spacing above and below.</p>
  </div>
  <div class="demo-box">
    <span class="tag-name">&lt;strong&gt;</span>
    <p>This text has <strong>important bold words</strong> inside it.</p>
  </div>
  <div class="demo-box">
    <span class="tag-name">&lt;em&gt;</span>
    <p>This text has <em>emphasized italic words</em> inside it.</p>
  </div>
  <div class="demo-box">
    <span class="tag-name">&lt;mark&gt;</span>
    <p>You can <mark>highlight key phrases</mark> using the mark tag.</p>
  </div>
  <div class="demo-box">
    <span class="tag-name">&lt;del&gt; + &lt;ins&gt;</span>
    <p>The price was <del>$50</del> <ins>$35</ins> — showing edits visually.</p>
  </div>
  <div class="demo-box">
    <span class="tag-name">&lt;small&gt;</span>
    <p>Regular text with <small>small fine print below it</small>.</p>
  </div>
</body></html>`,
    notes: [
      '<strong> conveys importance — screen readers stress it. <b> is purely visual bold',
      '<em> conveys emphasis — different from <i> which is just italic styling',
      'Paragraphs are block elements with default margin spacing',
      '<mark> is great for search result highlighting'
    ]
  },
  {
    id: 'links',
    title: 'Links (Anchor Tag)',
    icon: '🔗',
    description: 'The <a> tag creates hyperlinks that connect pages together. The href attribute specifies the destination URL. Links can be absolute (full URL), relative (within your site), or anchor links (jump to sections on the same page with #id).',
    syntax: `<a href="https://example.com">External Link</a>
<a href="/about">Internal Link</a>
<a href="#section">Anchor Link</a>
<a href="mailto:hi@mail.com">Email Link</a>
<a href="tel:+1234567890">Phone Link</a>`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: #f8fafc; }
  .link-row { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: white; border-radius: 10px; margin-bottom: 10px; box-shadow: 0 1px 4px rgba(0,0,0,0.06); transition: transform 0.2s, box-shadow 0.2s; }
  .link-row:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
  .link-icon { font-size: 1.4em; }
  a { color: #7c3aed; font-weight: 600; text-decoration: none; border-bottom: 2px solid transparent; transition: border-color 0.2s; }
  a:hover { border-bottom-color: #7c3aed; }
  .desc { font-size: 0.85em; color: #64748b; }
  .attr { font-family: monospace; font-size: 0.8em; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; color: #0ea5e9; }
</style></head>
<body>
  <div class="link-row">
    <span class="link-icon">🌐</span>
    <div>
      <a href="#">External Link</a>
      <div class="desc">Uses full URL <span class="attr">href="https://..."</span></div>
    </div>
  </div>
  <div class="link-row">
    <span class="link-icon">📁</span>
    <div>
      <a href="#">Relative Link</a>
      <div class="desc">Points to local page <span class="attr">href="/about"</span></div>
    </div>
  </div>
  <div class="link-row">
    <span class="link-icon">⚓</span>
    <div>
      <a href="#">Anchor Link</a>
      <div class="desc">Jumps to section <span class="attr">href="#section-id"</span></div>
    </div>
  </div>
  <div class="link-row">
    <span class="link-icon">📧</span>
    <div>
      <a href="#">Email Link</a>
      <div class="desc">Opens mail client <span class="attr">href="mailto:..."</span></div>
    </div>
  </div>
  <div class="link-row">
    <span class="link-icon">📱</span>
    <div>
      <a href="#">Phone Link</a>
      <div class="desc">Triggers phone dialer <span class="attr">href="tel:..."</span></div>
    </div>
  </div>
</body></html>`,
    notes: [
      'Use target="_blank" to open links in a new tab',
      'Always add rel="noopener noreferrer" with target="_blank" for security',
      'Anchor links (#id) scroll to elements with matching id attributes',
      'Use descriptive link text — avoid "click here"'
    ]
  },
  {
    id: 'images',
    title: 'Images',
    icon: '🖼️',
    description: 'The <img> tag embeds images into a page. It is a self-closing tag (no end tag needed). The src attribute points to the image file, and the alt attribute provides a text description for accessibility and when the image fails to load.',
    syntax: `<img src="photo.jpg" alt="Description of the image" />
<img src="photo.jpg" alt="Photo" width="300" height="200" />
<figure>
  <img src="chart.png" alt="Sales chart" />
  <figcaption>Q4 Sales Results</figcaption>
</figure>`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: #f8fafc; }
  .img-demo { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .img-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  .img-placeholder { height: 100px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; }
  .img-card:nth-child(1) .img-placeholder { background: linear-gradient(135deg, #a78bfa, #7c3aed); }
  .img-card:nth-child(2) .img-placeholder { background: linear-gradient(135deg, #67e8f9, #06b6d4); }
  .img-card:nth-child(3) .img-placeholder { background: linear-gradient(135deg, #86efac, #22c55e); }
  .img-card:nth-child(4) .img-placeholder { background: linear-gradient(135deg, #fbbf24, #f59e0b); }
  .img-info { padding: 12px 16px; }
  .img-info code { font-size: 0.75em; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; }
  .img-info p { margin: 4px 0 0; font-size: 0.85em; color: #64748b; }
  figure { margin: 0; }
  figcaption { font-size: 0.85em; color: #64748b; text-align: center; padding: 8px; font-style: italic; }
</style></head>
<body>
  <div class="img-demo">
    <div class="img-card">
      <div class="img-placeholder">🏔️</div>
      <div class="img-info">
        <code>&lt;img src="..." alt="..."&gt;</code>
        <p>Basic image with alt text</p>
      </div>
    </div>
    <div class="img-card">
      <div class="img-placeholder">📐</div>
      <div class="img-info">
        <code>width="300" height="200"</code>
        <p>Fixed dimensions prevent layout shift</p>
      </div>
    </div>
    <div class="img-card">
      <figure>
        <div class="img-placeholder">📊</div>
        <figcaption>Figure caption below the image</figcaption>
      </figure>
      <div class="img-info">
        <code>&lt;figure&gt; + &lt;figcaption&gt;</code>
        <p>Semantic image with caption</p>
      </div>
    </div>
    <div class="img-card">
      <div class="img-placeholder">⚠️</div>
      <div class="img-info">
        <code>alt="Description"</code>
        <p>Alt text shown when image fails to load</p>
      </div>
    </div>
  </div>
</body></html>`,
    notes: [
      'The alt attribute is required for accessibility — screen readers read it aloud',
      'Set width and height to prevent Cumulative Layout Shift (CLS)',
      'Use <figure> and <figcaption> for images that need captions',
      'Use loading="lazy" for images below the fold to improve performance'
    ]
  },
  {
    id: 'lists',
    title: 'Lists (Ordered & Unordered)',
    icon: '📋',
    description: 'HTML provides three types of lists: <ul> for unordered (bulleted) lists, <ol> for ordered (numbered) lists, and <dl> for definition lists. Each list item goes inside an <li> tag. Lists can be nested inside each other.',
    syntax: `<ul>
  <li>Unordered item</li>
</ul>

<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: #f8fafc; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .list-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  .list-card h3 { margin: 0 0 12px; font-size: 1rem; display: flex; align-items: center; gap: 8px; }
  .badge { font-size: 0.7em; padding: 3px 8px; border-radius: 20px; font-weight: 600; }
  .ul-badge { background: #ede9fe; color: #7c3aed; }
  .ol-badge { background: #dbeafe; color: #2563eb; }
  .dl-badge { background: #d1fae5; color: #059669; }
  .nest-badge { background: #fef3c7; color: #d97706; }
  ul, ol { padding-left: 24px; margin: 0; }
  li { padding: 4px 0; color: #334155; }
  li::marker { color: #7c3aed; }
  ol li::marker { color: #2563eb; font-weight: 700; }
  dl { margin: 0; }
  dt { font-weight: 700; color: #059669; margin-top: 8px; }
  dd { margin: 2px 0 0 20px; color: #64748b; }
</style></head>
<body>
  <div class="list-card">
    <h3><span class="badge ul-badge">&lt;ul&gt;</span> Unordered List</h3>
    <ul>
      <li>HTML Structure</li>
      <li>CSS Styling</li>
      <li>JavaScript Logic</li>
    </ul>
  </div>
  <div class="list-card">
    <h3><span class="badge ol-badge">&lt;ol&gt;</span> Ordered List</h3>
    <ol>
      <li>Learn fundamentals</li>
      <li>Practice projects</li>
      <li>Build portfolio</li>
    </ol>
  </div>
  <div class="list-card">
    <h3><span class="badge dl-badge">&lt;dl&gt;</span> Definition List</h3>
    <dl>
      <dt>HTML</dt>
      <dd>Structure of web pages</dd>
      <dt>CSS</dt>
      <dd>Visual styling and layout</dd>
    </dl>
  </div>
  <div class="list-card">
    <h3><span class="badge nest-badge">Nested</span> Lists Inside Lists</h3>
    <ul>
      <li>Frontend
        <ul>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </li>
      <li>Backend</li>
    </ul>
  </div>
</body></html>`,
    notes: [
      '<ul> renders bullet points, <ol> renders numbers',
      'Lists can be nested — put a <ul> or <ol> inside an <li>',
      'Use <ol type="A"> for letters, <ol type="I"> for Roman numerals',
      'Navigation menus often use <ul> inside <nav> for semantics'
    ]
  },
  {
    id: 'tables',
    title: 'Tables',
    icon: '📊',
    description: 'HTML tables display data in rows and columns. Use <table> as the container, <tr> for table rows, <th> for header cells (bold, centered), and <td> for regular data cells. Tables also support <thead>, <tbody>, and <tfoot> for structural grouping.',
    syntax: `<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: #f8fafc; }
  table { width: 100%; border-collapse: collapse; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  thead { background: linear-gradient(135deg, #7c3aed, #6d28d9); }
  th { color: white; padding: 14px 18px; text-align: left; font-size: 0.9rem; letter-spacing: 0.02em; }
  td { padding: 12px 18px; border-bottom: 1px solid #e2e8f0; background: white; font-size: 0.9rem; color: #334155; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #f1f5f9; }
  .status { padding: 3px 10px; border-radius: 20px; font-size: 0.8em; font-weight: 600; }
  .active { background: #d1fae5; color: #059669; }
  .pending { background: #fef3c7; color: #d97706; }
  .inactive { background: #fee2e2; color: #dc2626; }
</style></head>
<body>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice Johnson</td>
        <td>Frontend Dev</td>
        <td><span class="status active">Active</span></td>
      </tr>
      <tr>
        <td>Bob Smith</td>
        <td>Designer</td>
        <td><span class="status pending">Pending</span></td>
      </tr>
      <tr>
        <td>Carol White</td>
        <td>Backend Dev</td>
        <td><span class="status active">Active</span></td>
      </tr>
      <tr>
        <td>Dave Brown</td>
        <td>DevOps</td>
        <td><span class="status inactive">Inactive</span></td>
      </tr>
    </tbody>
  </table>
</body></html>`,
    notes: [
      'Use <th> in <thead> for header cells — they are bold and centered by default',
      '<thead>, <tbody>, <tfoot> help group rows logically',
      'Use colspan and rowspan to merge cells across columns or rows',
      'Tables should only be used for tabular data — never for page layout'
    ]
  },
  {
    id: 'forms-inputs',
    title: 'Forms & Input Elements',
    icon: '📝',
    description: 'The <form> tag groups interactive controls for user input. Inside a form, you use <input>, <textarea>, <select>, and <button> elements. Each input type serves a different purpose — text, email, password, checkbox, radio, number, date, and more.',
    syntax: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <textarea rows="4">Message</textarea>
  <select>
    <option>Option 1</option>
  </select>
  <button type="submit">Submit</button>
</form>`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: #f8fafc; }
  form { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); max-width: 400px; }
  h3 { margin: 0 0 20px; color: #7c3aed; font-size: 1.1rem; }
  .form-group { margin-bottom: 16px; }
  label { display: block; font-size: 0.85rem; font-weight: 600; color: #334155; margin-bottom: 5px; }
  input, select, textarea { width: 100%; padding: 10px 14px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; font-family: inherit; outline: none; transition: border-color 0.2s; box-sizing: border-box; }
  input:focus, select:focus, textarea:focus { border-color: #7c3aed; }
  .row { display: flex; gap: 12px; }
  .checkbox-row { display: flex; align-items: center; gap: 8px; }
  .checkbox-row input { width: auto; }
  button { width: 100%; padding: 11px; background: linear-gradient(135deg, #7c3aed, #6d28d9); color: white; border: none; border-radius: 8px; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: opacity 0.2s; }
  button:hover { opacity: 0.9; }
  textarea { resize: vertical; min-height: 60px; }
</style></head>
<body>
  <form onsubmit="event.preventDefault(); alert('Form submitted!')">
    <h3>📝 Sample Form</h3>
    <div class="form-group">
      <label for="fname">Full Name</label>
      <input type="text" id="fname" placeholder="John Doe" required />
    </div>
    <div class="row">
      <div class="form-group" style="flex:1">
        <label for="femail">Email</label>
        <input type="email" id="femail" placeholder="john@mail.com" />
      </div>
      <div class="form-group" style="flex:1">
        <label for="fphone">Phone</label>
        <input type="tel" id="fphone" placeholder="+1 234 5678" />
      </div>
    </div>
    <div class="form-group">
      <label for="frole">Role</label>
      <select id="frole">
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Designer</option>
      </select>
    </div>
    <div class="form-group">
      <label for="fmsg">Message</label>
      <textarea id="fmsg" placeholder="Tell us about yourself..."></textarea>
    </div>
    <div class="form-group checkbox-row">
      <input type="checkbox" id="fterms" />
      <label for="fterms" style="margin:0">I agree to the terms</label>
    </div>
    <button type="submit">Submit Form</button>
  </form>
</body></html>`,
    notes: [
      'Always pair <label> with <input> using the for/id connection',
      'The required attribute prevents form submission without that field filled',
      'Use type="email" and type="number" for built-in browser validation',
      'The name attribute is what gets sent to the server as key-value pairs'
    ]
  },
  {
    id: 'semantic-elements',
    title: 'Semantic HTML5 Elements',
    icon: '🏗️',
    description: 'Semantic elements describe their meaning to both the browser and developer. Instead of using generic <div> tags everywhere, use <header>, <nav>, <main>, <section>, <article>, <aside>, and <footer>. This improves accessibility, SEO, and code readability.',
    syntax: `<header>Site header / navigation</header>
<nav>Navigation links</nav>
<main>Primary page content</main>
<section>Thematic grouping</section>
<article>Self-contained content</article>
<aside>Sidebar / related info</aside>
<footer>Footer content</footer>`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 16px; background: #f8fafc; margin: 0; }
  .layout { display: flex; flex-direction: column; gap: 6px; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
  .tag-visual { padding: 14px 18px; display: flex; align-items: center; gap: 10px; color: white; font-weight: 600; font-size: 0.9rem; }
  .tag-label { font-family: monospace; font-size: 0.8rem; background: rgba(255,255,255,0.2); padding: 3px 8px; border-radius: 4px; }
  .v-header { background: linear-gradient(135deg, #7c3aed, #6d28d9); }
  .v-nav { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }
  .content-row { display: flex; gap: 6px; }
  .v-main { background: linear-gradient(135deg, #0ea5e9, #0284c7); flex: 3; padding: 20px 18px; }
  .v-aside { background: linear-gradient(135deg, #f59e0b, #d97706); flex: 1; padding: 20px 14px; }
  .v-section { background: linear-gradient(135deg, #06b6d4, #0891b2); }
  .v-article { background: linear-gradient(135deg, #10b981, #059669); }
  .v-footer { background: linear-gradient(135deg, #64748b, #475569); }
  .inner-tags { display: flex; flex-direction: column; gap: 4px; margin-top: 8px; }
  .inner-tag { background: rgba(255,255,255,0.15); padding: 8px 12px; border-radius: 6px; font-size: 0.8rem; }
</style></head>
<body>
  <div class="layout">
    <div class="tag-visual v-header">
      <span class="tag-label">&lt;header&gt;</span> Site Header & Logo
    </div>
    <div class="tag-visual v-nav">
      <span class="tag-label">&lt;nav&gt;</span> Navigation Menu
    </div>
    <div class="content-row">
      <div class="tag-visual v-main">
        <div>
          <span class="tag-label">&lt;main&gt;</span> Primary Content
          <div class="inner-tags">
            <div class="inner-tag"><span class="tag-label">&lt;section&gt;</span> Thematic Group</div>
            <div class="inner-tag"><span class="tag-label">&lt;article&gt;</span> Blog Post</div>
          </div>
        </div>
      </div>
      <div class="tag-visual v-aside">
        <div>
          <span class="tag-label">&lt;aside&gt;</span>
          <div style="margin-top:4px;font-size:0.8rem;">Sidebar</div>
        </div>
      </div>
    </div>
    <div class="tag-visual v-footer">
      <span class="tag-label">&lt;footer&gt;</span> Page Footer
    </div>
  </div>
</body></html>`,
    notes: [
      '<main> should appear only once per page — it wraps the primary content',
      '<article> is for self-contained content that could stand alone (blog posts, comments)',
      '<section> groups thematically related content with a heading',
      'Screen readers announce landmark elements for easier navigation'
    ]
  },
  {
    id: 'media-elements',
    title: 'Audio & Video Elements',
    icon: '🎬',
    description: 'HTML5 provides native <audio> and <video> elements to embed media without plugins. Both support the controls attribute for play/pause buttons, and you can specify multiple source formats for browser compatibility using <source> tags.',
    syntax: `<video controls width="400">
  <source src="movie.mp4" type="video/mp4" />
  Your browser does not support video.
</video>

<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
  Your browser does not support audio.
</audio>`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: #f8fafc; }
  .media-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .media-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
  .media-preview { height: 120px; display: flex; align-items: center; justify-content: center; font-size: 3rem; }
  .video-prev { background: linear-gradient(135deg, #1e1b4b, #312e81); }
  .audio-prev { background: linear-gradient(135deg, #164e63, #0e7490); }
  .media-info { padding: 16px; }
  .media-info h4 { margin: 0 0 8px; color: #1e293b; }
  .media-info p { margin: 0; font-size: 0.85rem; color: #64748b; }
  .attr-list { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 6px; }
  .attr-chip { font-size: 0.75rem; padding: 3px 10px; border-radius: 20px; font-family: monospace; }
  .attr-blue { background: #dbeafe; color: #1d4ed8; }
  .attr-green { background: #d1fae5; color: #047857; }
  .attr-purple { background: #ede9fe; color: #6d28d9; }
</style></head>
<body>
  <div class="media-grid">
    <div class="media-card">
      <div class="media-preview video-prev">🎥</div>
      <div class="media-info">
        <h4>&lt;video&gt; Element</h4>
        <p>Embeds a video player with native browser controls.</p>
        <div class="attr-list">
          <span class="attr-chip attr-blue">controls</span>
          <span class="attr-chip attr-green">autoplay</span>
          <span class="attr-chip attr-purple">loop</span>
          <span class="attr-chip attr-blue">muted</span>
          <span class="attr-chip attr-green">poster</span>
        </div>
      </div>
    </div>
    <div class="media-card">
      <div class="media-preview audio-prev">🎵</div>
      <div class="media-info">
        <h4>&lt;audio&gt; Element</h4>
        <p>Embeds an audio player for music or sound clips.</p>
        <div class="attr-list">
          <span class="attr-chip attr-blue">controls</span>
          <span class="attr-chip attr-green">autoplay</span>
          <span class="attr-chip attr-purple">loop</span>
          <span class="attr-chip attr-blue">preload</span>
        </div>
      </div>
    </div>
  </div>
  <div style="margin-top: 16px; background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
    <h4 style="margin:0 0 8px; font-size: 0.9rem; color: #7c3aed;">&lt;source&gt; — Multiple Formats</h4>
    <p style="margin:0; font-size: 0.85rem; color: #64748b;">Use multiple &lt;source&gt; tags inside &lt;video&gt; or &lt;audio&gt; so the browser picks the first supported format (MP4, WebM, OGG).</p>
  </div>
</body></html>`,
    notes: [
      'Always include the controls attribute so users can play/pause',
      'Add text between tags as fallback for unsupported browsers',
      'Use the poster attribute on <video> to show a thumbnail before playing',
      'Autoplay only works if the video is also muted (browser policy)'
    ]
  }
];
