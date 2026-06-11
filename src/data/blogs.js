// Static Blog database for articles
export const blogsData = [
  {
    slug: 'mastering-react-rendering-cycles',
    title: 'Mastering React 19 Rendering Cycles & Performance',
    excerpt: 'Deep dive into when React components trigger renders, how fibers compare, and optimizing with useMemo and memo.',
    category: 'React',
    readTime: '8 mins',
    date: 'June 10, 2026',
    author: 'Sarah Chen, Principal Architect',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', // Placeholder stock image
    content: [
      {
        type: 'p',
        text: 'React rendering is a key aspect of frontend engineering that is often misunderstood. A render cycle is React asking your component function to return a description of what the UI should look like based on current state and properties.'
      },
      {
        type: 'h2',
        text: 'What Triggers a Re-render?'
      },
      {
        type: 'p',
        text: 'A component re-renders for two main reasons: its internal state changes, or its parent component re-renders. A common misconception is that changing props triggers a re-render. Props changes only trigger renders because the parent container updating triggers a cascade.'
      },
      {
        type: 'code',
        code: `// Correct State Update triggers a render
const [name, setName] = useState('Sarah');
setName('Sarah'); // React skips rendering because references match
setName('Sarah Chen'); // Triggers render`,
        lang: 'javascript'
      },
      {
        type: 'h2',
        text: 'React 19 Rendering Enhancements'
      },
      {
        type: 'p',
        text: 'React 19 introduces automated memoization compilers and improved batching patterns. When you trigger multiple state updates inside async event handlers, React merges them into a single compile pass, preventing visual screen flickering.'
      }
    ]
  },
  {
    slug: 'complete-guide-to-css-grid',
    title: 'A Complete Beginner Guide to CSS Grid Layouts',
    excerpt: 'Learn to design complex, responsive 2D layouts using rows, columns, fractions, and grid-template-areas.',
    category: 'CSS',
    readTime: '6 mins',
    date: 'May 28, 2026',
    author: 'Alex Mercer, UI Designer',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: [
      {
        type: 'p',
        text: 'While Flexbox excels at layout alignment along a single axis (either columns or rows), CSS Grid is designed for two-dimensional grid layouts, allowing rows and columns to align simultaneously.'
      },
      {
        type: 'h2',
        text: 'Defining a Grid'
      },
      {
        type: 'p',
        text: 'To turn any HTML parent into a grid workspace, declare display: grid. We use grid-template-columns and grid-template-rows to configure dimensions.'
      },
      {
        type: 'code',
        code: `.grid-parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal fraction columns */
  grid-template-rows: auto;
  gap: 20px;
}`,
        lang: 'css'
      },
      {
        type: 'h2',
        text: 'Sizing with Fractions (fr)'
      },
      {
        type: 'p',
        text: 'The fr unit represents a fraction of the leftover free space in the grid container, replacing rigid percentage divisions which break when margins and gutters are added.'
      }
    ]
  },
  {
    slug: 'demystifying-javascript-closures',
    title: 'Demystifying JavaScript Closures & Scope Chains',
    excerpt: 'Explain how scope scopes persist, nested function behaviors, and practical uses in real-world javascript.',
    category: 'JavaScript',
    readTime: '7 mins',
    date: 'April 15, 2026',
    author: 'Marcus Vance, Mentor',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: [
      {
        type: 'p',
        text: 'Closures are one of the most powerful and fundamental patterns in JavaScript. A closure is formed when a function references variables in its outer lexical scope, retaining access to those variables even after the outer function has completed execution.'
      },
      {
        type: 'h2',
        text: 'Lexical Scope & Enclosure'
      },
      {
        type: 'p',
        text: 'JavaScript uses lexical scoping, meaning the nested variables access is determined by where the functions are declared in the code, rather than where they are called.'
      },
      {
        type: 'code',
        code: `function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer:', outerVariable);
    console.log('Inner:', innerVariable);
  };
}

const closureTest = outerFunction('outside');
closureTest('inside'); // Still reads "outside"`,
        lang: 'javascript'
      },
      {
        type: 'h2',
        text: 'Practical Application: Data Privacy'
      },
      {
        type: 'p',
        text: 'Closures let us wrap private state variables inside closures, exposing only validation accessor functions and shielding parameters from external corruption.'
      }
    ]
  }
];
