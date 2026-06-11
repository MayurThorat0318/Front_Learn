// CSS Concepts Reference Database
// Each concept includes: brief info, syntax, and full HTML+CSS demo code for iframe rendering

export const cssConcepts = [
  {
    id: 'selectors',
    title: 'CSS Selectors',
    icon: '🎯',
    description: 'Selectors are patterns used to target HTML elements for styling. Basic selectors include element (div), class (.name), and ID (#name). Combinators like descendant (space), child (>), adjacent (+), and general sibling (~) let you target elements based on their relationships.',
    syntax: `/* Element Selector */
p { color: blue; }

/* Class Selector */
.highlight { background: yellow; }

/* ID Selector */
#main-title { font-size: 2rem; }

/* Combinators */
div > p { }    /* Direct child */
div p { }      /* Any descendant */
h2 + p { }     /* Adjacent sibling */
h2 ~ p { }     /* General sibling */`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8fafc; }
  .selector-demo { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .sel-card { background: white; border-radius: 10px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
  .sel-card h4 { margin: 0 0 10px; font-size: 0.85rem; color: #7c3aed; }
  .sel-card code { font-size: 0.8rem; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; display: inline-block; margin-bottom: 8px; }
  .target-el { padding: 8px 12px; border-radius: 6px; font-size: 0.85rem; margin: 4px 0; transition: all 0.3s; }
  .target-el:hover { transform: scale(1.02); }
  /* Demo selectors */
  .demo-element { background: #dbeafe; color: #1d4ed8; border: 2px dashed #93c5fd; }
  .demo-class { background: #d1fae5; color: #047857; border: 2px dashed #6ee7b7; }
  .demo-id { background: #ede9fe; color: #6d28d9; border: 2px dashed #c4b5fd; }
  .demo-combo { background: #fef3c7; color: #92400e; border: 2px dashed #fcd34d; }
  .arrow { color: #94a3b8; font-size: 0.8rem; text-align: center; }
</style></head>
<body>
  <div class="selector-demo">
    <div class="sel-card">
      <h4>Element Selector</h4>
      <code>p { color: blue; }</code>
      <div class="target-el demo-element">Every &lt;p&gt; gets styled</div>
    </div>
    <div class="sel-card">
      <h4>Class Selector</h4>
      <code>.highlight { background: yellow; }</code>
      <div class="target-el demo-class">Elements with class="highlight"</div>
    </div>
    <div class="sel-card">
      <h4>ID Selector</h4>
      <code>#title { font-size: 2rem; }</code>
      <div class="target-el demo-id">One unique element with id="title"</div>
    </div>
    <div class="sel-card">
      <h4>Combinator Selector</h4>
      <code>div > p { }</code>
      <div class="target-el demo-combo">Direct children of &lt;div&gt;</div>
    </div>
  </div>
  <div style="margin-top:16px; background:white; border-radius:10px; padding:14px; text-align:center; font-size:0.85rem; color:#64748b;">
    <strong>Specificity:</strong> ID (100) > Class (10) > Element (1) — higher specificity wins
  </div>
</body></html>`,
    notes: [
      'Class selectors (.name) are reusable — use them for common styles',
      'ID selectors (#name) target one unique element — use sparingly',
      'Specificity determines which rule wins: ID > Class > Element',
      'Use attribute selectors like [type="text"] to target specific input types'
    ]
  },
  {
    id: 'colors-backgrounds',
    title: 'Colors & Backgrounds',
    icon: '🎨',
    description: 'CSS supports multiple color formats: named colors (red, blue), hexadecimal (#ff0000), RGB (rgb(255,0,0)), and HSL (hsl(0,100%,50%)). HSL is the most intuitive — hue is the color wheel angle, saturation is intensity, lightness is brightness. Backgrounds can be solid colors, gradients, or images.',
    syntax: `/* Color Formats */
color: red;                    /* Named */
color: #ff6b35;               /* Hex */
color: rgb(255, 107, 53);     /* RGB */
color: hsl(16, 100%, 60%);   /* HSL */
color: rgba(0, 0, 0, 0.5);   /* With transparency */

/* Backgrounds */
background: linear-gradient(135deg, #667eea, #764ba2);
background-image: url('bg.jpg');`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8fafc; }
  .color-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px; }
  .color-chip { height: 60px; border-radius: 10px; display: flex; align-items: flex-end; padding: 8px 12px; font-size: 0.75rem; font-weight: 600; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.3); transition: transform 0.2s; }
  .color-chip:hover { transform: scale(1.05); }
  .gradient-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .gradient-chip { height: 70px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 600; color: white; text-shadow: 0 1px 3px rgba(0,0,0,0.3); }
  .format-label { background: white; border-radius: 10px; padding: 12px; margin-top: 12px; display: flex; justify-content: space-around; font-size: 0.8rem; box-shadow: 0 1px 4px rgba(0,0,0,0.05); }
  .format-item { text-align: center; }
  .format-item strong { display: block; margin-bottom: 2px; }
</style></head>
<body>
  <div class="color-grid">
    <div class="color-chip" style="background:#ef4444;">Hex #ef4444</div>
    <div class="color-chip" style="background:rgb(59,130,246);">RGB(59,130,246)</div>
    <div class="color-chip" style="background:hsl(262,83%,58%);">HSL(262,83%,58%)</div>
    <div class="color-chip" style="background:#f59e0b;">Hex #f59e0b</div>
    <div class="color-chip" style="background:#10b981;">Hex #10b981</div>
    <div class="color-chip" style="background:rgba(0,0,0,0.4);">RGBA (0.4 alpha)</div>
  </div>
  <div class="gradient-row">
    <div class="gradient-chip" style="background:linear-gradient(135deg,#667eea,#764ba2);">Linear Gradient ↘</div>
    <div class="gradient-chip" style="background:radial-gradient(circle,#fbbf24,#f59e0b,#d97706);">Radial Gradient ●</div>
    <div class="gradient-chip" style="background:linear-gradient(90deg,#06b6d4,#8b5cf6,#ec4899);">Multi-stop Gradient →</div>
    <div class="gradient-chip" style="background:conic-gradient(from 0deg,#ef4444,#f59e0b,#10b981,#3b82f6,#ef4444);">Conic Gradient ◎</div>
  </div>
  <div class="format-label">
    <div class="format-item"><strong>Named</strong>red, blue</div>
    <div class="format-item"><strong>Hex</strong>#ff6b35</div>
    <div class="format-item"><strong>RGB</strong>rgb(255,107,53)</div>
    <div class="format-item"><strong>HSL</strong>hsl(16,100%,60%)</div>
  </div>
</body></html>`,
    notes: [
      'HSL is most human-readable: adjust hue (0-360°), saturation (0-100%), lightness (0-100%)',
      'Use rgba() or hsla() for transparency — the "a" is alpha (0 to 1)',
      'linear-gradient() creates color transitions along a line',
      'radial-gradient() radiates colors from a center point outward'
    ]
  },
  {
    id: 'box-model',
    title: 'The Box Model',
    icon: '📦',
    description: 'Every HTML element is a rectangular box made of four layers: Content (the text or image), Padding (space inside the border), Border (the edge), and Margin (space outside the border). By default, width applies only to content. Setting box-sizing: border-box makes width include padding and border.',
    syntax: `.element {
  width: 300px;
  padding: 20px;
  border: 3px solid #333;
  margin: 16px;
  box-sizing: border-box; /* recommended */
}`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: #f8fafc; display: flex; justify-content: center; }
  .box-visual { position: relative; }
  .margin-layer { background: #fef3c7; border: 2px dashed #f59e0b; border-radius: 16px; padding: 24px; position: relative; }
  .margin-label { position: absolute; top: 6px; left: 12px; font-size: 0.7rem; font-weight: 700; color: #d97706; }
  .border-layer { background: #a3a3a3; border-radius: 12px; padding: 4px; }
  .border-label { font-size: 0.7rem; font-weight: 700; color: white; text-align: center; padding: 2px; }
  .padding-layer { background: #bbf7d0; border-radius: 10px; padding: 24px; position: relative; }
  .padding-label { position: absolute; top: 6px; left: 12px; font-size: 0.7rem; font-weight: 700; color: #15803d; }
  .content-layer { background: #bfdbfe; border-radius: 8px; padding: 20px; text-align: center; color: #1e40af; font-weight: 700; font-size: 0.9rem; min-width: 160px; }
  .legend { display: flex; gap: 12px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
  .legend-item { display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #475569; }
  .legend-dot { width: 14px; height: 14px; border-radius: 4px; }
</style></head>
<body>
  <div>
    <div class="box-visual">
      <div class="margin-layer">
        <span class="margin-label">MARGIN</span>
        <div class="border-layer">
          <div class="border-label">BORDER</div>
          <div class="padding-layer">
            <span class="padding-label">PADDING</span>
            <div class="content-layer">CONTENT<br><small style="font-weight:400;font-size:0.75rem;">width × height</small></div>
          </div>
        </div>
      </div>
    </div>
    <div class="legend">
      <div class="legend-item"><div class="legend-dot" style="background:#fef3c7;border:1px solid #f59e0b;"></div>Margin</div>
      <div class="legend-item"><div class="legend-dot" style="background:#a3a3a3;"></div>Border</div>
      <div class="legend-item"><div class="legend-dot" style="background:#bbf7d0;"></div>Padding</div>
      <div class="legend-item"><div class="legend-dot" style="background:#bfdbfe;"></div>Content</div>
    </div>
  </div>
</body></html>`,
    notes: [
      'Default box-sizing is content-box — width only applies to the content area',
      'With border-box, padding and border are included inside the set width',
      'Vertical margins collapse — two stacked 20px margins result in 20px gap, not 40px',
      'Most developers add * { box-sizing: border-box; } globally'
    ]
  },
  {
    id: 'typography',
    title: 'Typography & Fonts',
    icon: '🔤',
    description: 'CSS typography controls how text looks. Key properties include font-family (typeface), font-size (text size), font-weight (thickness), line-height (spacing between lines), letter-spacing, text-align, and text-transform. You can load custom fonts from Google Fonts.',
    syntax: `p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.02em;
  text-align: left;
  text-transform: uppercase;
}`,
    demoCode: `<!DOCTYPE html>
<html><head>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;700&family=Fira+Code&display=swap" rel="stylesheet">
<style>
  body { font-family: 'Inter', sans-serif; padding: 20px; background: #f8fafc; }
  .type-row { background: white; border-radius: 10px; padding: 16px 20px; margin-bottom: 10px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); display: flex; justify-content: space-between; align-items: center; }
  .type-row:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
  .prop-name { font-size: 0.75rem; font-weight: 700; color: #7c3aed; font-family: monospace; background: #ede9fe; padding: 3px 8px; border-radius: 4px; white-space: nowrap; }
  .sample-serif { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: #1e293b; }
  .sample-sans { font-family: 'Inter', sans-serif; font-size: 1.1rem; color: #334155; }
  .sample-mono { font-family: 'Fira Code', monospace; font-size: 0.95rem; color: #0ea5e9; background: #f1f5f9; padding: 4px 10px; border-radius: 6px; }
  .sample-weight { display: flex; gap: 16px; }
  .sample-weight span { font-size: 1rem; }
  .sample-transform { display: flex; gap: 12px; font-size: 0.85rem; }
  .sample-transform span { padding: 4px 10px; border-radius: 6px; background: #f1f5f9; }
  .sample-line-height { line-height: 2; font-size: 0.9rem; color: #64748b; border-left: 3px solid #e2e8f0; padding-left: 12px; }
</style></head>
<body>
  <div class="type-row">
    <span class="prop-name">font-family: serif</span>
    <span class="sample-serif">Elegant Serif Font</span>
  </div>
  <div class="type-row">
    <span class="prop-name">font-family: sans-serif</span>
    <span class="sample-sans">Clean Sans-Serif Font</span>
  </div>
  <div class="type-row">
    <span class="prop-name">font-family: monospace</span>
    <span class="sample-mono">const code = true;</span>
  </div>
  <div class="type-row">
    <span class="prop-name">font-weight</span>
    <div class="sample-weight">
      <span style="font-weight:300;">Light</span>
      <span style="font-weight:400;">Regular</span>
      <span style="font-weight:600;">Semi</span>
      <span style="font-weight:700;">Bold</span>
      <span style="font-weight:900;">Black</span>
    </div>
  </div>
  <div class="type-row">
    <span class="prop-name">text-transform</span>
    <div class="sample-transform">
      <span style="text-transform:uppercase;">uppercase</span>
      <span style="text-transform:lowercase;">LOWERCASE</span>
      <span style="text-transform:capitalize;">capitalize me</span>
    </div>
  </div>
  <div class="type-row">
    <span class="prop-name">line-height: 2</span>
    <div class="sample-line-height">Lines with extra<br>vertical spacing<br>between them</div>
  </div>
</body></html>`,
    notes: [
      'Use rem units for font-size — they scale relative to the root element',
      'line-height: 1.5 to 1.8 is ideal for body text readability',
      'Always provide fallback fonts: font-family: "Inter", Arial, sans-serif',
      'Use Google Fonts or @font-face to load custom typefaces'
    ]
  },
  {
    id: 'display-property',
    title: 'Display Property',
    icon: '📐',
    description: 'The display property controls how an element behaves in the layout flow. Block elements (div, p) take full width and start on a new line. Inline elements (span, a) sit side-by-side. Inline-block combines both behaviors. Display: none hides elements completely.',
    syntax: `display: block;        /* Full width, new line */
display: inline;       /* Side by side, no width/height */
display: inline-block; /* Side by side, accepts width/height */
display: none;         /* Completely hidden */
display: flex;         /* Flexbox container */
display: grid;         /* Grid container */`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8fafc; }
  .demo-section { background: white; border-radius: 12px; padding: 16px; margin-bottom: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .demo-section h4 { margin: 0 0 10px; font-size: 0.85rem; color: #7c3aed; display: flex; align-items: center; gap: 8px; }
  .demo-section h4 code { font-size: 0.8rem; background: #ede9fe; padding: 2px 8px; border-radius: 4px; }
  .block-el { background: #dbeafe; border: 2px solid #93c5fd; padding: 8px 16px; border-radius: 6px; margin: 4px 0; text-align: center; font-size: 0.85rem; color: #1e40af; font-weight: 600; }
  .inline-el { background: #d1fae5; border: 2px solid #6ee7b7; padding: 4px 12px; border-radius: 6px; font-size: 0.85rem; color: #047857; font-weight: 600; display: inline; }
  .inline-block-el { background: #fef3c7; border: 2px solid #fcd34d; padding: 8px 16px; border-radius: 6px; font-size: 0.85rem; color: #92400e; font-weight: 600; display: inline-block; width: 120px; text-align: center; }
  .arrow-hint { font-size: 0.75rem; color: #94a3b8; margin-top: 6px; }
</style></head>
<body>
  <div class="demo-section">
    <h4><code>display: block</code> — Each takes full width</h4>
    <div class="block-el">Block A (full width)</div>
    <div class="block-el">Block B (full width)</div>
    <div class="block-el">Block C (full width)</div>
    <p class="arrow-hint">↕ Each starts on a new line</p>
  </div>
  <div class="demo-section">
    <h4><code>display: inline</code> — Sit side by side</h4>
    <span class="inline-el">Inline A</span>
    <span class="inline-el">Inline B</span>
    <span class="inline-el">Inline C</span>
    <p class="arrow-hint">↔ Flow like text, ignore width/height</p>
  </div>
  <div class="demo-section">
    <h4><code>display: inline-block</code> — Side by side + accepts dimensions</h4>
    <div class="inline-block-el">Box A</div>
    <div class="inline-block-el">Box B</div>
    <div class="inline-block-el">Box C</div>
    <p class="arrow-hint">↔ Side by side but respects width & height</p>
  </div>
</body></html>`,
    notes: [
      'Block elements: div, p, h1-h6, section, article, header, footer',
      'Inline elements: span, a, strong, em, img, input',
      'display: none removes the element from layout entirely',
      'visibility: hidden hides visually but keeps the space reserved'
    ]
  },
  {
    id: 'flexbox',
    title: 'Flexbox Layout',
    icon: '↔️',
    description: 'Flexbox is a one-dimensional layout system for arranging items in a row or column. Set display: flex on the parent container. Use justify-content to align along the main axis (horizontal by default) and align-items for the cross axis (vertical). Flex items can grow, shrink, and wrap.',
    syntax: `.container {
  display: flex;
  flex-direction: row;       /* row | column */
  justify-content: center;   /* start | center | space-between | space-around */
  align-items: center;       /* start | center | stretch | end */
  gap: 16px;
  flex-wrap: wrap;
}
.item {
  flex: 1;  /* grow to fill space */
}`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 16px; background: #f8fafc; }
  .flex-demo { background: white; border-radius: 12px; padding: 14px; margin-bottom: 10px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .flex-demo h4 { margin: 0 0 10px; font-size: 0.8rem; color: #64748b; }
  .flex-demo h4 code { color: #7c3aed; background: #ede9fe; padding: 2px 6px; border-radius: 4px; }
  .flex-container { display: flex; gap: 8px; padding: 12px; background: #f1f5f9; border-radius: 8px; border: 2px dashed #cbd5e1; min-height: 60px; }
  .flex-item { padding: 10px 16px; border-radius: 6px; font-size: 0.8rem; font-weight: 700; color: white; text-align: center; }
  .fi-1 { background: #7c3aed; }
  .fi-2 { background: #0ea5e9; }
  .fi-3 { background: #10b981; }
  .fi-4 { background: #f59e0b; }
  .jc-between { justify-content: space-between; }
  .jc-center { justify-content: center; }
  .jc-around { justify-content: space-around; }
  .ai-center { align-items: center; }
  .fd-column { flex-direction: column; }
</style></head>
<body>
  <div class="flex-demo">
    <h4><code>justify-content: space-between</code></h4>
    <div class="flex-container jc-between">
      <div class="flex-item fi-1">A</div>
      <div class="flex-item fi-2">B</div>
      <div class="flex-item fi-3">C</div>
    </div>
  </div>
  <div class="flex-demo">
    <h4><code>justify-content: center</code></h4>
    <div class="flex-container jc-center">
      <div class="flex-item fi-1">A</div>
      <div class="flex-item fi-2">B</div>
      <div class="flex-item fi-3">C</div>
    </div>
  </div>
  <div class="flex-demo">
    <h4><code>justify-content: space-around</code></h4>
    <div class="flex-container jc-around">
      <div class="flex-item fi-1">A</div>
      <div class="flex-item fi-2">B</div>
      <div class="flex-item fi-3">C</div>
    </div>
  </div>
  <div class="flex-demo">
    <h4><code>flex-direction: column</code></h4>
    <div class="flex-container fd-column" style="align-items:flex-start;">
      <div class="flex-item fi-1">Row 1</div>
      <div class="flex-item fi-2">Row 2</div>
      <div class="flex-item fi-3">Row 3</div>
    </div>
  </div>
</body></html>`,
    notes: [
      'justify-content aligns items on the main axis (horizontal in row, vertical in column)',
      'align-items aligns items on the cross axis',
      'flex: 1 makes items grow equally to fill available space',
      'Use gap instead of margins between flex items for cleaner spacing'
    ]
  },
  {
    id: 'grid-layout',
    title: 'CSS Grid Layout',
    icon: '⊞',
    description: 'CSS Grid is a two-dimensional layout system for rows AND columns simultaneously. Define columns with grid-template-columns and rows with grid-template-rows. The fr unit represents a fraction of available space. Grid items can span multiple rows/columns.',
    syntax: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
}
.item {
  grid-column: span 2;  /* span across 2 columns */
  grid-row: 1 / 3;      /* from row 1 to row 3 */
}`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8fafc; }
  h4 { margin: 0 0 8px; font-size: 0.85rem; color: #64748b; }
  h4 code { color: #7c3aed; background: #ede9fe; padding: 2px 6px; border-radius: 4px; }
  .grid-wrapper { margin-bottom: 16px; }
  .grid-demo { display: grid; gap: 8px; padding: 12px; background: white; border-radius: 12px; border: 2px dashed #cbd5e1; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .g1 { grid-template-columns: 1fr 1fr 1fr; }
  .g2 { grid-template-columns: 1fr 2fr; }
  .g3 { grid-template-columns: repeat(3, 1fr); grid-template-rows: auto auto; }
  .grid-cell { padding: 14px; border-radius: 8px; text-align: center; font-size: 0.8rem; font-weight: 700; color: white; }
  .gc-1 { background: #7c3aed; }
  .gc-2 { background: #0ea5e9; }
  .gc-3 { background: #10b981; }
  .gc-4 { background: #f59e0b; }
  .gc-5 { background: #ec4899; }
  .gc-6 { background: #64748b; }
  .span-2 { grid-column: span 2; }
  .span-row { grid-row: span 2; display: flex; align-items: center; justify-content: center; }
</style></head>
<body>
  <div class="grid-wrapper">
    <h4><code>grid-template-columns: 1fr 1fr 1fr</code> — Equal columns</h4>
    <div class="grid-demo g1">
      <div class="grid-cell gc-1">1fr</div>
      <div class="grid-cell gc-2">1fr</div>
      <div class="grid-cell gc-3">1fr</div>
    </div>
  </div>
  <div class="grid-wrapper">
    <h4><code>grid-template-columns: 1fr 2fr</code> — Unequal</h4>
    <div class="grid-demo g2">
      <div class="grid-cell gc-4">1fr (narrow)</div>
      <div class="grid-cell gc-5">2fr (double wide)</div>
    </div>
  </div>
  <div class="grid-wrapper">
    <h4><code>grid-column: span 2</code> — Spanning cells</h4>
    <div class="grid-demo g3">
      <div class="grid-cell gc-1 span-2">Spans 2 Columns</div>
      <div class="grid-cell gc-2 span-row">Spans 2 Rows</div>
      <div class="grid-cell gc-3">Cell</div>
      <div class="grid-cell gc-4">Cell</div>
    </div>
  </div>
</body></html>`,
    notes: [
      'The fr unit divides available space fractionally — 1fr 2fr means 1:2 ratio',
      'repeat(3, 1fr) is shorthand for 1fr 1fr 1fr',
      'Grid items can span multiple columns with grid-column: span N',
      'Use grid-template-areas for named layout regions (great for page layouts)'
    ]
  },
  {
    id: 'positioning',
    title: 'CSS Positioning',
    icon: '📍',
    description: 'The position property controls how an element is placed. Static is the default (normal flow). Relative offsets from its normal position. Absolute positions relative to its nearest positioned ancestor. Fixed stays in place during scrolling. Sticky toggles between relative and fixed based on scroll.',
    syntax: `position: static;    /* default */
position: relative;  /* offset from normal spot */
position: absolute;  /* relative to positioned parent */
position: fixed;     /* locked to viewport */
position: sticky;    /* sticks on scroll */

top: 10px; right: 10px; bottom: 10px; left: 10px;`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8fafc; }
  .pos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .pos-card { background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); position: relative; overflow: hidden; min-height: 140px; }
  .pos-card h4 { margin: 0 0 6px; font-size: 0.85rem; color: #7c3aed; }
  .pos-card p { margin: 0; font-size: 0.8rem; color: #64748b; }
  .pos-box { width: 50px; height: 50px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; color: white; }
  .static-demo .pos-box { background: #94a3b8; position: static; }
  .relative-demo { position: relative; }
  .relative-demo .pos-box { background: #3b82f6; position: relative; top: 10px; left: 20px; }
  .relative-demo .ghost { width: 50px; height: 50px; border: 2px dashed #93c5fd; border-radius: 8px; position: absolute; top: 56px; left: 0; }
  .absolute-demo { position: relative; min-height: 100px; }
  .absolute-demo .parent-box { background: #f1f5f9; border: 2px dashed #cbd5e1; border-radius: 8px; height: 70px; margin-top: 6px; position: relative; }
  .absolute-demo .pos-box { background: #7c3aed; position: absolute; top: 8px; right: 8px; }
  .fixed-demo .pos-box { background: #ef4444; }
  .sticky-demo .pos-box { background: #10b981; }
  .arrow { font-size: 1.2rem; position: absolute; }
</style></head>
<body>
  <div class="pos-grid">
    <div class="pos-card static-demo">
      <h4>static <span style="font-weight:400;color:#94a3b8;">(default)</span></h4>
      <p>Normal document flow</p>
      <div class="pos-box" style="margin-top:8px;">A</div>
    </div>
    <div class="pos-card relative-demo">
      <h4>relative</h4>
      <p>Offset from original position</p>
      <div class="ghost"></div>
      <div class="pos-box">B</div>
      <span style="position:absolute;top:65px;left:52px;font-size:0.7rem;color:#3b82f6;">↗ shifted</span>
    </div>
    <div class="pos-card absolute-demo">
      <h4>absolute</h4>
      <p>Positioned inside parent</p>
      <div class="parent-box">
        <div class="pos-box">C</div>
        <span style="position:absolute;bottom:8px;left:8px;font-size:0.7rem;color:#94a3b8;">parent (relative)</span>
      </div>
    </div>
    <div class="pos-card">
      <h4>fixed & sticky</h4>
      <p style="margin-bottom:8px;">Fixed locks to viewport. Sticky sticks on scroll threshold.</p>
      <div style="display:flex;gap:8px;">
        <div class="pos-box" style="background:#ef4444;">Fix</div>
        <div class="pos-box" style="background:#10b981;">Stk</div>
      </div>
    </div>
  </div>
</body></html>`,
    notes: [
      'Static elements ignore top/right/bottom/left properties',
      'Relative: the original space is still reserved in the flow',
      'Absolute: removed from flow, positions relative to nearest positioned ancestor',
      'Fixed: stays in place even when scrolling — good for sticky headers'
    ]
  },
  {
    id: 'transitions',
    title: 'CSS Transitions',
    icon: '🔄',
    description: 'Transitions smoothly animate CSS property changes over a duration. You specify which property to animate, how long it takes, the timing curve (ease, linear, ease-in-out), and an optional delay. Transitions only trigger when a property value changes (e.g., on hover).',
    syntax: `.element {
  background: blue;
  transform: scale(1);
  transition: all 0.3s ease;
  /* OR be specific: */
  transition: background 0.3s ease, transform 0.2s ease-out;
}
.element:hover {
  background: purple;
  transform: scale(1.1);
}`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: #f8fafc; }
  .hint { text-align: center; font-size: 0.85rem; color: #64748b; margin-bottom: 16px; }
  .trans-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .trans-card { background: white; border-radius: 12px; padding: 20px; text-align: center; box-shadow: 0 2px 6px rgba(0,0,0,0.04); }
  .trans-card h5 { margin: 12px 0 4px; font-size: 0.85rem; color: #334155; }
  .trans-card p { margin: 0; font-size: 0.75rem; color: #94a3b8; }

  .box { width: 60px; height: 60px; border-radius: 10px; margin: 0 auto; cursor: pointer; }

  .color-box { background: #7c3aed; transition: background-color 0.4s ease; }
  .color-box:hover { background: #ec4899; }

  .scale-box { background: #0ea5e9; transition: transform 0.3s ease; }
  .scale-box:hover { transform: scale(1.3); }

  .rotate-box { background: #10b981; transition: transform 0.5s ease-in-out; }
  .rotate-box:hover { transform: rotate(180deg); }

  .shadow-box { background: #f59e0b; transition: box-shadow 0.3s ease; }
  .shadow-box:hover { box-shadow: 0 8px 25px rgba(245,158,11,0.5); }

  .radius-box { background: #ef4444; transition: border-radius 0.4s ease; }
  .radius-box:hover { border-radius: 50%; }

  .multi-box { background: #7c3aed; transition: all 0.4s ease; }
  .multi-box:hover { background: #ec4899; transform: scale(1.2) rotate(10deg); border-radius: 50%; box-shadow: 0 8px 20px rgba(236,72,153,0.4); }
</style></head>
<body>
  <p class="hint">👆 Hover over each box to see the transition</p>
  <div class="trans-grid">
    <div class="trans-card">
      <div class="box color-box"></div>
      <h5>Color</h5>
      <p>background-color 0.4s</p>
    </div>
    <div class="trans-card">
      <div class="box scale-box"></div>
      <h5>Scale</h5>
      <p>transform: scale 0.3s</p>
    </div>
    <div class="trans-card">
      <div class="box rotate-box"></div>
      <h5>Rotate</h5>
      <p>transform: rotate 0.5s</p>
    </div>
    <div class="trans-card">
      <div class="box shadow-box"></div>
      <h5>Shadow</h5>
      <p>box-shadow 0.3s</p>
    </div>
    <div class="trans-card">
      <div class="box radius-box"></div>
      <h5>Border Radius</h5>
      <p>border-radius 0.4s</p>
    </div>
    <div class="trans-card">
      <div class="box multi-box"></div>
      <h5>Combined</h5>
      <p>all properties 0.4s</p>
    </div>
  </div>
</body></html>`,
    notes: [
      'transition: all is convenient but less performant than targeting specific properties',
      'Only some properties are animatable (color, transform, opacity, etc.)',
      'Use ease for natural motion, linear for constant speed, ease-in-out for smooth start/end',
      'Transitions need a trigger (like :hover, :focus, or a class change via JavaScript)'
    ]
  },
  {
    id: 'animations',
    title: 'Keyframe Animations',
    icon: '🎭',
    description: 'CSS animations let you create complex multi-step animations using @keyframes. Unlike transitions (which need a trigger), animations can run automatically, loop infinitely, and define multiple intermediate steps. Use animation-name, animation-duration, animation-timing-function, and animation-iteration-count.',
    syntax: `@keyframes slideFade {
  0%   { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.element {
  animation: slideFade 0.5s ease-out forwards;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #0f172a; color: white; }
  .anim-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .anim-card { background: #1e293b; border-radius: 14px; padding: 20px; text-align: center; border: 1px solid #334155; }
  .anim-card h5 { margin: 14px 0 4px; font-size: 0.85rem; color: #e2e8f0; }
  .anim-card p { margin: 0; font-size: 0.75rem; color: #64748b; }
  .anim-box { width: 50px; height: 50px; border-radius: 10px; margin: 0 auto; }

  @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.7; } 50% { transform: scale(1.3); opacity: 1; } }
  .pulse-box { background: #7c3aed; animation: pulse 1.5s ease-in-out infinite; }

  @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  .spin-box { background: #0ea5e9; animation: spin 2s linear infinite; }

  @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
  .bounce-box { background: #10b981; animation: bounce 0.8s ease-in-out infinite; }

  @keyframes colorShift { 0% { background: #ef4444; } 33% { background: #f59e0b; } 66% { background: #10b981; } 100% { background: #ef4444; } }
  .color-shift-box { animation: colorShift 3s linear infinite; }

  @keyframes slideX { 0% { transform: translateX(-30px); opacity: 0.3; } 50% { transform: translateX(30px); opacity: 1; } 100% { transform: translateX(-30px); opacity: 0.3; } }
  .slide-box { background: #ec4899; animation: slideX 2s ease-in-out infinite; }

  @keyframes morphShape { 0% { border-radius: 10px; transform: rotate(0deg); } 25% { border-radius: 50% 10px; } 50% { border-radius: 50%; transform: rotate(180deg); } 75% { border-radius: 10px 50%; } 100% { border-radius: 10px; transform: rotate(360deg); } }
  .morph-box { background: linear-gradient(135deg, #f59e0b, #ef4444); animation: morphShape 3s ease-in-out infinite; }
</style></head>
<body>
  <div class="anim-grid">
    <div class="anim-card">
      <div class="anim-box pulse-box"></div>
      <h5>Pulse</h5>
      <p>scale + opacity</p>
    </div>
    <div class="anim-card">
      <div class="anim-box spin-box"></div>
      <h5>Spin</h5>
      <p>rotate 360° linear</p>
    </div>
    <div class="anim-card">
      <div class="anim-box bounce-box"></div>
      <h5>Bounce</h5>
      <p>translateY ease</p>
    </div>
    <div class="anim-card">
      <div class="anim-box color-shift-box"></div>
      <h5>Color Shift</h5>
      <p>multi-step background</p>
    </div>
    <div class="anim-card">
      <div class="anim-box slide-box"></div>
      <h5>Slide</h5>
      <p>translateX back-and-forth</p>
    </div>
    <div class="anim-card">
      <div class="anim-box morph-box"></div>
      <h5>Morph</h5>
      <p>border-radius + rotate</p>
    </div>
  </div>
</body></html>`,
    notes: [
      '@keyframes defines the animation steps — use 0%/100% or from/to',
      'animation-fill-mode: forwards keeps the final state after animation ends',
      'animation-iteration-count: infinite loops forever',
      'Use animation-delay to stagger multiple animations for visual effect'
    ]
  },
  {
    id: 'pseudo-classes',
    title: 'Pseudo-classes & Pseudo-elements',
    icon: '✨',
    description: 'Pseudo-classes select elements in specific states (:hover, :focus, :first-child, :nth-child). Pseudo-elements style specific parts of elements (::before, ::after, ::first-line, ::placeholder). Pseudo-classes use one colon, pseudo-elements use two colons.',
    syntax: `/* Pseudo-classes (states) */
a:hover { color: red; }
input:focus { border-color: blue; }
li:first-child { font-weight: bold; }
tr:nth-child(even) { background: #f0f0f0; }

/* Pseudo-elements (parts) */
p::first-line { font-weight: bold; }
.quote::before { content: "\\201C"; }
.quote::after { content: "\\201D"; }`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8fafc; }
  .section { background: white; border-radius: 12px; padding: 16px 20px; margin-bottom: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .section h4 { margin: 0 0 12px; font-size: 0.9rem; color: #7c3aed; }

  /* Hover demo */
  .hover-list { display: flex; gap: 8px; }
  .hover-btn { padding: 10px 20px; border: 2px solid #7c3aed; background: transparent; border-radius: 8px; cursor: pointer; font-weight: 600; color: #7c3aed; transition: all 0.2s; font-family: inherit; }
  .hover-btn:hover { background: #7c3aed; color: white; transform: translateY(-2px); }
  .hover-btn:active { transform: translateY(0); }

  /* nth-child demo */
  .nth-list { list-style: none; padding: 0; margin: 0; }
  .nth-list li { padding: 10px 14px; border-radius: 6px; font-size: 0.9rem; margin: 2px 0; }
  .nth-list li:nth-child(odd) { background: #ede9fe; }
  .nth-list li:nth-child(even) { background: #f1f5f9; }
  .nth-list li:first-child { font-weight: 700; border-left: 4px solid #7c3aed; }
  .nth-list li:last-child { border-left: 4px solid #10b981; }

  /* Pseudo-element demo */
  .quote { font-size: 1.1rem; color: #334155; line-height: 1.6; padding: 12px 20px; background: #f1f5f9; border-radius: 8px; position: relative; font-style: italic; }
  .quote::before { content: "\\201C"; font-size: 2.5rem; color: #7c3aed; position: absolute; top: -5px; left: 6px; }
  .quote::after { content: "\\201D"; font-size: 2.5rem; color: #7c3aed; }

  .tag-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; }
  .tag-dot::before { content: ''; }
</style></head>
<body>
  <div class="section">
    <h4>:hover + :active — Hover these buttons</h4>
    <div class="hover-list">
      <button class="hover-btn">Button A</button>
      <button class="hover-btn">Button B</button>
      <button class="hover-btn">Button C</button>
    </div>
  </div>
  <div class="section">
    <h4>:nth-child, :first-child, :last-child</h4>
    <ul class="nth-list">
      <li><span class="tag-dot" style="background:#7c3aed;"></span>First item (styled with :first-child)</li>
      <li><span class="tag-dot" style="background:#94a3b8;"></span>Even row (grey background)</li>
      <li><span class="tag-dot" style="background:#94a3b8;"></span>Odd row (purple background)</li>
      <li><span class="tag-dot" style="background:#94a3b8;"></span>Even row (grey background)</li>
      <li><span class="tag-dot" style="background:#10b981;"></span>Last item (styled with :last-child)</li>
    </ul>
  </div>
  <div class="section">
    <h4>::before + ::after — Decorative quotes</h4>
    <div class="quote">  CSS pseudo-elements let you insert content before or after an element without adding HTML.</div>
  </div>
</body></html>`,
    notes: [
      ':hover triggers on mouse over, :focus on keyboard/click focus, :active on click',
      ':nth-child(even/odd) or :nth-child(3n) for pattern-based selection',
      '::before and ::after require the content property to work',
      'Pseudo-elements create virtual elements — they don\'t exist in the DOM'
    ]
  },
  {
    id: 'media-queries',
    title: 'Responsive Design & Media Queries',
    icon: '📱',
    description: 'Media queries apply CSS rules only when certain conditions are met (like screen width). This is how responsive design works — you write different styles for different viewport sizes. The most common approach is "mobile-first": start with mobile styles, then add @media rules for larger screens.',
    syntax: `/* Mobile First Approach */
.container { padding: 16px; }

/* Tablet and up */
@media (min-width: 768px) {
  .container { padding: 32px; max-width: 720px; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container { max-width: 960px; }
}`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8fafc; }
  .breakpoint-visual { display: flex; flex-direction: column; gap: 10px; }
  .bp-bar { border-radius: 10px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; font-weight: 600; color: white; position: relative; overflow: hidden; }
  .bp-mobile { background: linear-gradient(90deg, #ef4444 0%, #ef4444 30%, #334155 30%); }
  .bp-tablet { background: linear-gradient(90deg, #f59e0b 0%, #f59e0b 55%, #334155 55%); }
  .bp-desktop { background: linear-gradient(90deg, #10b981 0%, #10b981 80%, #334155 80%); }
  .bp-wide { background: linear-gradient(90deg, #3b82f6 0%, #3b82f6 100%); }
  .bp-label { z-index: 1; }
  .bp-size { z-index: 1; font-family: monospace; font-size: 0.8rem; opacity: 0.8; }

  .device-icons { display: flex; justify-content: space-around; margin-top: 16px; padding: 16px; background: white; border-radius: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .device { text-align: center; }
  .device-icon { font-size: 2rem; margin-bottom: 6px; }
  .device-name { font-size: 0.8rem; color: #64748b; }
  .device-width { font-size: 0.75rem; font-family: monospace; color: #94a3b8; }

  .code-hint { background: #1e293b; color: #e2e8f0; border-radius: 10px; padding: 14px 18px; margin-top: 12px; font-family: monospace; font-size: 0.8rem; line-height: 1.6; }
  .code-hint .keyword { color: #c084fc; }
  .code-hint .value { color: #34d399; }
</style></head>
<body>
  <div class="breakpoint-visual">
    <div class="bp-bar bp-mobile">
      <span class="bp-label">📱 Mobile</span>
      <span class="bp-size">&lt; 768px</span>
    </div>
    <div class="bp-bar bp-tablet">
      <span class="bp-label">📋 Tablet</span>
      <span class="bp-size">768px – 1024px</span>
    </div>
    <div class="bp-bar bp-desktop">
      <span class="bp-label">💻 Desktop</span>
      <span class="bp-size">1024px – 1440px</span>
    </div>
    <div class="bp-bar bp-wide">
      <span class="bp-label">🖥️ Wide Screen</span>
      <span class="bp-size">&gt; 1440px</span>
    </div>
  </div>
  <div class="device-icons">
    <div class="device"><div class="device-icon">📱</div><div class="device-name">Mobile</div><div class="device-width">320-767px</div></div>
    <div class="device"><div class="device-icon">📋</div><div class="device-name">Tablet</div><div class="device-width">768-1023px</div></div>
    <div class="device"><div class="device-icon">💻</div><div class="device-name">Laptop</div><div class="device-width">1024-1439px</div></div>
    <div class="device"><div class="device-icon">🖥️</div><div class="device-name">Desktop</div><div class="device-width">1440px+</div></div>
  </div>
  <div class="code-hint">
    <span class="keyword">@media</span> (<span class="value">min-width: 768px</span>) { ... }<br>
    <span class="keyword">@media</span> (<span class="value">max-width: 767px</span>) { ... }
  </div>
</body></html>`,
    notes: [
      'Mobile-first: start with mobile CSS, then add @media (min-width) for larger screens',
      'Common breakpoints: 768px (tablet), 1024px (desktop), 1440px (wide)',
      'Use relative units (%, rem, vw) for fluid responsive layouts',
      'Test on real devices — browser DevTools device mode is helpful but not perfect'
    ]
  },
  {
    id: 'css-variables',
    title: 'CSS Custom Properties (Variables)',
    icon: '⚙️',
    description: 'CSS variables (custom properties) let you store reusable values with the --name syntax and access them with var(--name). Define them on :root for global scope. They cascade like normal CSS and can be overridden on any element. They are essential for theming (dark mode, brand colors).',
    syntax: `:root {
  --primary: #7c3aed;
  --spacing: 16px;
  --radius: 8px;
}

.button {
  background: var(--primary);
  padding: var(--spacing);
  border-radius: var(--radius);
  /* Fallback value: */
  color: var(--text-color, white);
}`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  :root {
    --demo-primary: #7c3aed;
    --demo-secondary: #0ea5e9;
    --demo-accent: #f59e0b;
    --demo-radius: 10px;
    --demo-spacing: 16px;
  }
  body { font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8fafc; }
  .var-demo { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .var-card { background: white; border-radius: var(--demo-radius); padding: var(--demo-spacing); box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
  .var-card h4 { margin: 0 0 8px; font-size: 0.85rem; color: var(--demo-primary); }
  .swatch-row { display: flex; gap: 8px; margin-top: 8px; }
  .swatch { width: 40px; height: 40px; border-radius: var(--demo-radius); transition: transform 0.2s; cursor: pointer; }
  .swatch:hover { transform: scale(1.15); }
  .code-line { font-family: monospace; font-size: 0.8rem; padding: 6px 10px; background: #f1f5f9; border-radius: 6px; margin: 4px 0; color: #334155; }
  .code-line .var-name { color: var(--demo-primary); }
  .themed-box { padding: 14px 18px; border-radius: var(--demo-radius); text-align: center; font-weight: 600; font-size: 0.9rem; }
  .theme-a { background: var(--demo-primary); color: white; }
  .theme-b { --demo-primary: #ec4899; background: var(--demo-primary); color: white; }
  .theme-label { font-size: 0.75rem; color: #94a3b8; margin-top: 6px; text-align: center; }
</style></head>
<body>
  <div class="var-demo">
    <div class="var-card">
      <h4>Define Variables</h4>
      <div class="code-line"><span class="var-name">--primary</span>: #7c3aed;</div>
      <div class="code-line"><span class="var-name">--secondary</span>: #0ea5e9;</div>
      <div class="code-line"><span class="var-name">--accent</span>: #f59e0b;</div>
      <div class="swatch-row">
        <div class="swatch" style="background:var(--demo-primary);"></div>
        <div class="swatch" style="background:var(--demo-secondary);"></div>
        <div class="swatch" style="background:var(--demo-accent);"></div>
      </div>
    </div>
    <div class="var-card">
      <h4>Use with var()</h4>
      <div class="code-line">background: <span class="var-name">var(--primary)</span>;</div>
      <div class="code-line">padding: <span class="var-name">var(--spacing)</span>;</div>
      <div class="code-line">color: <span class="var-name">var(--text, white)</span>;</div>
      <p style="font-size:0.8rem;color:#64748b;margin:8px 0 0;">The second arg in var() is a fallback value</p>
    </div>
    <div class="var-card">
      <h4>Override / Theming</h4>
      <div class="themed-box theme-a">Default --primary</div>
      <div class="theme-label">:root value</div>
    </div>
    <div class="var-card">
      <h4>Scoped Override</h4>
      <div class="themed-box theme-b">Overridden --primary</div>
      <div class="theme-label">--primary: #ec4899 on this element</div>
    </div>
  </div>
</body></html>`,
    notes: [
      'Variables defined on :root are globally accessible',
      'Variables cascade — you can override them on any child element',
      'var(--name, fallback) provides a fallback if the variable is undefined',
      'CSS variables are the foundation of dark/light theme switching'
    ]
  },
  {
    id: 'shadows-borders',
    title: 'Shadows & Border Radius',
    icon: '🌗',
    description: 'box-shadow adds depth with shadow effects (offset-x, offset-y, blur, spread, color). border-radius rounds element corners — use a single value for uniform rounding or four values for individual corners. 50% border-radius creates circles.',
    syntax: `/* Box Shadow */
box-shadow: 0 4px 6px rgba(0,0,0,0.1);
box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 
            0 2px 4px -2px rgba(0,0,0,0.1);

/* Border Radius */
border-radius: 8px;             /* all corners */
border-radius: 50%;             /* circle */
border-radius: 20px 0 20px 0;  /* individual corners */`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: #f1f5f9; }
  h4 { margin: 0 0 12px; font-size: 0.9rem; color: #7c3aed; }
  .shadow-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px; }
  .shadow-box { background: white; height: 80px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: #64748b; font-weight: 500; text-align: center; transition: transform 0.2s; }
  .shadow-box:hover { transform: translateY(-3px); }
  .s1 { box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
  .s2 { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
  .s3 { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.15); }
  .s4 { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.1); }

  .radius-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
  .radius-box { background: linear-gradient(135deg, #7c3aed, #ec4899); height: 70px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: white; font-weight: 600; transition: transform 0.2s; }
  .radius-box:hover { transform: scale(1.05); }
  .r1 { border-radius: 0; }
  .r2 { border-radius: 8px; }
  .r3 { border-radius: 16px; }
  .r4 { border-radius: 50%; width: 70px; }
  .r5 { border-radius: 20px 0 20px 0; }
</style></head>
<body>
  <h4>Box Shadow — Depth Levels</h4>
  <div class="shadow-row">
    <div class="shadow-box s1">sm<br>subtle</div>
    <div class="shadow-box s2">md<br>card</div>
    <div class="shadow-box s3">lg<br>modal</div>
    <div class="shadow-box s4">xl<br>floating</div>
  </div>
  <h4>Border Radius — Corner Rounding</h4>
  <div class="radius-row">
    <div class="radius-box r1">0px</div>
    <div class="radius-box r2">8px</div>
    <div class="radius-box r3">16px</div>
    <div class="radius-box r4">50%</div>
    <div class="radius-box r5">mixed</div>
  </div>
</body></html>`,
    notes: [
      'Multiple shadows separated by commas create more realistic depth',
      'Inset shadows (inset keyword) appear inside the element',
      'border-radius: 50% only creates a circle if width equals height',
      'Use shadows sparingly — too many heavy shadows hurt performance'
    ]
  },
  {
    id: 'transforms',
    title: 'CSS Transforms',
    icon: '🔀',
    description: 'The transform property lets you visually move (translate), resize (scale), rotate, and skew elements without affecting the document flow. Multiple transforms can be chained. The transform-origin property sets the point around which transforms occur (center by default).',
    syntax: `/* Individual Transforms */
transform: translateX(50px);
transform: translateY(-20px);
transform: scale(1.5);
transform: rotate(45deg);
transform: skewX(10deg);

/* Combined */
transform: translate(10px, -5px) rotate(15deg) scale(1.1);`,
    demoCode: `<!DOCTYPE html>
<html><head><style>
  body { font-family: 'Segoe UI', sans-serif; padding: 24px; background: #f8fafc; }
  .transform-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .tf-card { background: white; border-radius: 12px; padding: 20px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
  .tf-card h5 { margin: 0 0 8px; font-size: 0.85rem; color: #334155; }
  .tf-card p { margin: 4px 0 0; font-size: 0.7rem; color: #94a3b8; font-family: monospace; }
  .tf-stage { height: 80px; display: flex; align-items: center; justify-content: center; background: #f1f5f9; border-radius: 8px; margin-bottom: 8px; position: relative; }
  .tf-box { width: 45px; height: 45px; border-radius: 8px; transition: transform 0.4s ease; }
  .tf-card:hover .tf-box { }

  .tf-translate .tf-box { background: #3b82f6; }
  .tf-card.tf-translate:hover .tf-box { transform: translateX(30px); }

  .tf-scale .tf-box { background: #7c3aed; }
  .tf-card.tf-scale:hover .tf-box { transform: scale(1.5); }

  .tf-rotate .tf-box { background: #10b981; }
  .tf-card.tf-rotate:hover .tf-box { transform: rotate(90deg); }

  .tf-skew .tf-box { background: #f59e0b; }
  .tf-card.tf-skew:hover .tf-box { transform: skewX(20deg); }

  .tf-combo .tf-box { background: #ec4899; }
  .tf-card.tf-combo:hover .tf-box { transform: scale(1.2) rotate(30deg) translateX(10px); }

  .tf-origin .tf-box { background: #ef4444; transform-origin: top left; }
  .tf-card.tf-origin:hover .tf-box { transform: rotate(45deg); }

  .hint { text-align: center; font-size: 0.85rem; color: #64748b; margin-bottom: 14px; }
</style></head>
<body>
  <p class="hint">👆 Hover each card to see the transform</p>
  <div class="transform-grid">
    <div class="tf-card tf-translate">
      <div class="tf-stage"><div class="tf-box"></div></div>
      <h5>Translate</h5>
      <p>translateX(30px)</p>
    </div>
    <div class="tf-card tf-scale">
      <div class="tf-stage"><div class="tf-box"></div></div>
      <h5>Scale</h5>
      <p>scale(1.5)</p>
    </div>
    <div class="tf-card tf-rotate">
      <div class="tf-stage"><div class="tf-box"></div></div>
      <h5>Rotate</h5>
      <p>rotate(90deg)</p>
    </div>
    <div class="tf-card tf-skew">
      <div class="tf-stage"><div class="tf-box"></div></div>
      <h5>Skew</h5>
      <p>skewX(20deg)</p>
    </div>
    <div class="tf-card tf-combo">
      <div class="tf-stage"><div class="tf-box"></div></div>
      <h5>Combined</h5>
      <p>scale + rotate + translate</p>
    </div>
    <div class="tf-card tf-origin">
      <div class="tf-stage"><div class="tf-box"></div></div>
      <h5>Origin: top-left</h5>
      <p>rotate from corner</p>
    </div>
  </div>
</body></html>`,
    notes: [
      'Transforms are GPU-accelerated — translate and scale are very performant',
      'transform-origin defaults to center — change it for rotations from corners',
      'Transforms don\'t affect surrounding elements — the space is preserved',
      'Use translate instead of top/left changes for smooth animations'
    ]
  }
];
