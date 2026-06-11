// Structured Curriculum Database for HTML, CSS, JavaScript, and React
export const coursesData = {
  html: {
    title: 'HyperText Markup Language',
    description: 'Learn the structural skeleton of the web, semantic elements, and accessible document trees.',
    lessons: [
      {
        id: 'html-basics',
        title: 'HTML Syntax & Document Anatomy',
        tag: 'Beginner',
        readTime: '6 mins',
        summary: 'Understand tags, elements, attributes, and the default HTML5 boilerplate setup.',
        explanation: 'HTML defines the structure and meaning of web content. A webpage is made of elements represented by tag sets. Tags wrap content to tell the browser how to format it.',
        syntax: `<tagName attribute="value">Content goes here</tagName>`,
        example: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document Title</title>
</head>
<body>
  <h1>My First Header</h1>
  <p>Learn core HTML layout parameters.</p>
</body>
</html>`,
        mistakes: [
          {
            bad: `<img src="avatar.jpg"> (Missing alt attribute)`,
            good: `<img src="avatar.jpg" alt="User Avatar Profile">`,
            why: 'Image tags must have alternative description tags (alt) so screen readers can describe the image for visually impaired users.'
          },
          {
            bad: `<p>Please click <a>here</a>.</p>`,
            good: `<p>Please visit the <a href="/settings">user settings panel</a>.</p>`,
            why: 'Descriptive link text explains what clicking the link does. Vague link text like "here" is poor for accessibility.'
          }
        ],
        interview: [
          {
            q: 'What does DOCTYPE html do?',
            a: 'It is a required preamble that tells the browser to parse the document in strict standards-compliance mode rather than quirks mode.'
          },
          {
            q: 'Difference between inline and block elements?',
            a: 'Block elements (e.g. <div>, <p>, <h1>) start on a new line and stretch to fill the width. Inline elements (e.g. <span>, <a>, <strong>) take only as much width as needed and do not start new lines.'
          }
        ]
      },
      {
        id: 'html-semantics',
        title: 'Semantic HTML5 Elements',
        tag: 'Beginner',
        readTime: '8 mins',
        summary: 'How to write SEO-friendly, highly accessible web layouts using landmark elements.',
        explanation: 'Semantic elements clearly describe their meaning in a human- and machine-readable way. Rather than using generic divs for everything, semantic HTML provides headers, layout panels, footers, and articles.',
        syntax: `<header>...</header>\n<main>\n  <section>\n    <article>...</article>\n  </section>\n</main>`,
        example: `<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>
<main>
  <article>
    <h2>Introduction to Semantic HTML</h2>
    <p>Semantic tags help search engines index your articles more effectively.</p>
  </article>
</main>
<footer>
  <p>&copy; 2026 academy.</p>
</footer>`,
        mistakes: [
          {
            bad: `<div id="navigation"><div class="item">Home</div></div>`,
            good: `<nav><ul><li><a href="/">Home</a></li></ul></nav>`,
            why: 'Generic divs carry zero accessibility meaning. Nav tags inform screen readers of primary navigation sections, and lists organize links.'
          }
        ],
        interview: [
          {
            q: 'Why are semantic tags important for SEO?',
            a: 'Search engines use semantic tags to identify headers, nav lists, footers, and main columns, helping index and rank relevant content.'
          }
        ]
      }
    ]
  },
  css: {
    title: 'Cascading Style Sheets',
    description: 'Style your structural templates with flex layout positioning, grid spacing, box sizing, and variables.',
    lessons: [
      {
        id: 'css-box-model',
        title: 'The CSS Box Model',
        tag: 'Beginner',
        readTime: '7 mins',
        summary: 'Master paddings, borders, margins, and the difference between content-box and border-box sizing.',
        explanation: 'Every element in a CSS layout is treated as a rectangular box. The box model has four layers: Content (text/image), Padding (inner space), Border (the wrapper edge), and Margin (outer spacing).',
        sandboxType: 'box-model', // Triggers box-model interactive visualizer
        syntax: `.element {\n  margin: 20px;\n  border: 2px solid black;\n  padding: 10px;\n  box-sizing: border-box;\n}`,
        example: `.card-container {
  width: 300px;
  padding: 16px;
  border: 1px solid #ddd;
  margin: 24px auto;
  box-sizing: border-box; /* Includes padding & border in width */
}`,
        mistakes: [
          {
            bad: `width: 300px; padding: 20px; border: 5px solid; (Standard content-box stretches actual width to 350px)`,
            good: `box-sizing: border-box; width: 300px; padding: 20px; border: 5px solid; (Stays 300px)`,
            why: 'By default, the width attribute is applied only to the content box. Adding border-box sizing forces width to cover borders and paddings, avoiding broken layout widths.'
          }
        ],
        interview: [
          {
            q: 'What is the default value of box-sizing, and what is preferred?',
            a: 'The default is content-box. Developers prefer border-box because it simplifies calculations by locking dimensions.'
          }
        ]
      },
      {
        id: 'css-flexbox',
        title: 'CSS Flexbox Layouts',
        tag: 'Intermediate',
        readTime: '10 mins',
        summary: 'Learn flex containers, directions, justification, element alignment, and wrap options.',
        explanation: 'Flexbox is a one-dimensional layout model. It allows items in a container to align, distribute space, and adapt sizes dynamically across a main and cross axis.',
        sandboxType: 'flexbox', // Triggers flexbox interactive visualizer
        syntax: `.parent {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}`,
        example: `.navbar-layout {
  display: flex;
  justify-content: space-between; /* Horizontal spacing */
  align-items: center; /* Vertical alignment */
  flex-wrap: wrap; /* Wrap on smaller viewports */
}`,
        mistakes: [
          {
            bad: `float: left; width: 33.3%; (Old float hack formatting)`,
            good: `display: flex; justify-content: space-around; (Flex spacing)`,
            why: 'Floating elements are difficult to align vertically and clear. Flexbox solves vertical centering and alignment natively.'
          }
        ],
        interview: [
          {
            q: 'What is the difference between justify-content and align-items?',
            a: 'justify-content aligns elements along the main-axis (horizontally by default), whereas align-items aligns elements along the cross-axis (vertically by default).'
          }
        ]
      }
    ]
  },
  javascript: {
    title: 'Modern JavaScript (ES6+)',
    description: 'Learn event flow, DOM interactions, promises, loops, array maps, and async scripts.',
    lessons: [
      {
        id: 'js-arrays',
        title: 'JavaScript Array Methods',
        tag: 'Beginner',
        readTime: '9 mins',
        summary: 'Master functional programming loops in JavaScript: map(), filter(), and reduce().',
        explanation: 'ES6 introduced array helpers that eliminate the need for standard loop declarations, helping make arrays readable and preventing side-effects.',
        syntax: `const result = array.map(item => item * 2);\nconst matches = array.filter(item => item.active);`,
        example: `const users = [
  { id: 1, name: 'Alice', admin: true },
  { id: 2, name: 'Bob', admin: false },
  { id: 3, name: 'Charlie', admin: true }
];

// 1. filter() admins
const admins = users.filter(user => user.admin);
console.log('Admins:', admins);

// 2. map() names list
const names = users.map(user => user.name);
console.log('Names:', names);`,
        outputExplanation: 'The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements that pass the test. The map() method creates a new array populated with the results of calling a provided function on every element.',
        mistakes: [
          {
            bad: `users.forEach(user => { if (user.admin) return user; }) (forEach does not return value)`,
            good: `const admins = users.filter(user => user.admin);`,
            why: 'forEach is strictly for running side-effects (logging, DOM edits). Use map/filter when you need to return modified arrays.'
          }
        ],
        interview: [
          {
            q: 'What is the difference between map() and forEach()?',
            a: 'map() returns a brand new array after transforming elements, whereas forEach() executes a callback for each element but returns undefined.'
          }
        ]
      },
      {
        id: 'js-events',
        title: 'DOM Event Listeners & Bubbling',
        tag: 'Intermediate',
        readTime: '8 mins',
        summary: 'How events propagate up the DOM tree and how to use capture vs. bubbling phases.',
        explanation: 'When an event occurs on a DOM element, it does not just execute there. The event travels up through the parents to the root html tag. This is called Event Bubbling.',
        syntax: `element.addEventListener('click', (event) => {\n  event.stopPropagation();\n});`,
        example: `// Event Delegation Pattern
const list = document.querySelector('.item-list');
list.addEventListener('click', (event) => {
  // Capture clicks on children list items
  if (event.target.matches('li.list-item')) {
    console.log('Clicked item content:', event.target.textContent);
  }
});`,
        outputExplanation: 'We listen to clicks on the parent .item-list wrapper. When a child item is clicked, the click bubbles up. Using target checking, we identify the exact element clicked. This avoids adding listeners to thousands of children.',
        mistakes: [
          {
            bad: `elements.forEach(el => el.addEventListener('click', fn)) (Binds too many listeners)`,
            good: `parent.addEventListener('click', event => { if(event.target.matches('...')) fn() })`,
            why: 'Binding thousands of mouse listeners hurts browser frame performance. Event delegation solves this using one listener on the parent wrapper.'
          }
        ],
        interview: [
          {
            q: 'What is event.preventDefault() vs event.stopPropagation()?',
            a: 'preventDefault() stops default browser actions (like page resets on forms). stopPropagation() stops the event from climbing up the DOM bubbling tree.'
          }
        ]
      }
    ]
  },
  react: {
    title: 'React Library Core',
    description: 'Learn component encapsulation, hooks, render cycles, state synchronization, and dynamic contexts.',
    lessons: [
      {
        id: 'react-state',
        title: 'Understanding Component State & Props',
        tag: 'Beginner',
        readTime: '8 mins',
        summary: 'Learn how variables trigger re-renders, and how properties flow downwards.',
        explanation: 'In React, state represents a component\'s internal memory. Changing state triggers a re-render. Props are immutable parameters passed from a parent component down to children.',
        syntax: `const [state, setState] = useState(initialValue);\n<ChildComponent propName={value} />`,
        example: `import React, { useState } from 'react';

// Parent Component
export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={\`app \${theme}\`}>
      <Card theme={theme} onToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')} />
    </div>
  );
}

// Child Component
function Card({ theme, onToggle }) {
  return (
    <div className="card">
      <p>Active Theme: {theme}</p>
      <button onClick={onToggle}>Toggle theme</button>
    </div>
  );
}`,
        mistakes: [
          {
            bad: `let count = 0; <button onClick={() => count++}>Click</button> (Does not trigger render)`,
            good: `const [count, setCount] = useState(0); <button onClick={() => setCount(c => c + 1)}>Click</button>`,
            why: 'React does not watch regular local variables. Re-renders are only triggered by calling state setters or changing props.'
          }
        ],
        interview: [
          {
            q: 'Why should you never mutate state variables directly?',
            a: 'React renders pages by comparing object references (re-rendering if they differ). Mutating states directly breaks reference tracking, causing React to miss the change.'
          }
        ]
      }
    ]
  }
};
