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
  },
  {
    slug: 'typescript-for-react-developers',
    title: 'TypeScript Essentials Every React Developer Must Know',
    excerpt: 'Stop fighting TypeScript — start leveraging it. Learn interfaces, generics, and type narrowing to write bulletproof React code.',
    category: 'TypeScript',
    readTime: '10 mins',
    date: 'June 5, 2026',
    author: 'Priya Kapoor, Senior Engineer',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: [
      {
        type: 'p',
        text: 'TypeScript is no longer optional for serious React projects. It catches entire categories of bugs at compile-time, makes refactoring safer, and dramatically improves IDE autocompletion. Here is your fast-track guide to the patterns you will use every single day.'
      },
      {
        type: 'h2',
        text: 'Typing Component Props with Interfaces'
      },
      {
        type: 'p',
        text: 'The most common use of TypeScript in React is typing component props. Use an interface (or type alias) to define the shape of your props object, making missing or incorrect props a compile-time error.'
      },
      {
        type: 'code',
        code: `interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'outline'; // Optional union type
  disabled?: boolean;
}

function Button({ label, onClick, variant = 'primary', disabled }: ButtonProps) {
  return <button className={variant} onClick={onClick} disabled={disabled}>{label}</button>;
}`,
        lang: 'typescript'
      },
      {
        type: 'h2',
        text: 'Generics: The Power Move'
      },
      {
        type: 'p',
        text: 'Generics let you write reusable typed utilities. A common example is a typed useFetch hook that returns the correct data shape based on what you pass in — no more casting to `any`.'
      },
      {
        type: 'code',
        code: `function useFetch<T>(url: string): { data: T | null; loading: boolean } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  // ... fetch logic
  return { data, loading };
}

// Usage: TypeScript knows 'data' is User[]
const { data: users } = useFetch<User[]>('/api/users');`,
        lang: 'typescript'
      },
      {
        type: 'h2',
        text: 'Type Narrowing with Guards'
      },
      {
        type: 'p',
        text: 'Type narrowing lets TypeScript refine a broad type into a specific one inside a conditional block, preventing runtime crashes from incorrect assumptions about data shapes.'
      }
    ]
  },
  {
    slug: 'web-performance-optimization-guide',
    title: 'Web Performance Optimization: The Definitive 2026 Guide',
    excerpt: 'From lazy loading and code splitting to Core Web Vitals — everything you need to build blazing-fast websites.',
    category: 'Performance',
    readTime: '12 mins',
    date: 'May 18, 2026',
    author: 'Jordan Lee, Performance Engineer',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: [
      {
        type: 'p',
        text: 'Performance is a feature. A one-second delay in page load time can reduce conversions by 7%. Google\'s Core Web Vitals directly influence search rankings. Let\'s break down the most impactful optimizations you can implement today.'
      },
      {
        type: 'h2',
        text: 'Core Web Vitals: LCP, FID, and CLS'
      },
      {
        type: 'p',
        text: 'Largest Contentful Paint (LCP) measures loading performance — aim for under 2.5s. Interaction to Next Paint (INP) measures responsiveness — under 200ms is good. Cumulative Layout Shift (CLS) measures visual stability — keep it below 0.1 by always specifying image dimensions.'
      },
      {
        type: 'h2',
        text: 'Image Optimization: The Biggest Win'
      },
      {
        type: 'code',
        code: `<!-- Use modern formats and explicit dimensions to prevent CLS -->
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero Image" width="1200" height="600" loading="lazy">
</picture>`,
        lang: 'html'
      },
      {
        type: 'h2',
        text: 'Code Splitting with React.lazy'
      },
      {
        type: 'p',
        text: 'Ship only the JavaScript that the current page needs. React.lazy() and dynamic import() split your bundle into chunks loaded on demand, dramatically reducing the initial JS payload and Time to Interactive.'
      },
      {
        type: 'code',
        code: `const DashboardPage = React.lazy(() => import('./pages/Dashboard'));

// Wrap in Suspense with a fallback skeleton
<Suspense fallback={<PageSkeleton />}>
  <DashboardPage />
</Suspense>`,
        lang: 'javascript'
      }
    ]
  },
  {
    slug: 'accessibility-web-development',
    title: 'Building Accessible Web Apps: A Practical A11y Guide',
    excerpt: 'Make your web apps usable by everyone. Learn ARIA roles, keyboard navigation, focus management, and color contrast best practices.',
    category: 'Accessibility',
    readTime: '9 mins',
    date: 'April 28, 2026',
    author: 'Aisha Mohammed, A11y Specialist',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: [
      {
        type: 'p',
        text: 'Accessibility (A11y) is not an afterthought — it is a fundamental requirement. Over 1 billion people worldwide have a disability. Building accessible interfaces expands your reach, improves SEO, and is often legally required.'
      },
      {
        type: 'h2',
        text: 'ARIA Roles and Labels'
      },
      {
        type: 'p',
        text: 'ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics when native elements are insufficient. Use them sparingly — the first rule of ARIA is to use native HTML elements first.'
      },
      {
        type: 'code',
        code: `<!-- BAD: Custom div button with no accessibility -->
<div class="btn" onclick="submit()">Submit</div>

<!-- GOOD: Native button or ARIA-enhanced element -->
<button type="submit">Submit</button>

<!-- For custom dropdowns -->
<div role="combobox" aria-expanded="false" aria-controls="listbox-id" aria-haspopup="listbox">
  Select option...
</div>`,
        lang: 'html'
      },
      {
        type: 'h2',
        text: 'Keyboard Navigation and Focus Management'
      },
      {
        type: 'p',
        text: 'Every interactive element must be reachable and operable with a keyboard alone. When opening a modal, trap focus inside it. When closing, return focus to the trigger element. Never use tabindex values greater than 0.'
      },
      {
        type: 'h2',
        text: 'Color Contrast Requirements'
      },
      {
        type: 'p',
        text: 'WCAG AA requires a minimum 4.5:1 contrast ratio for normal text and 3:1 for large text. Use tools like WebAIM\'s Contrast Checker or Chrome DevTools to verify every text/background combination in your UI.'
      }
    ]
  },
  {
    slug: 'css-animations-and-transitions',
    title: 'CSS Animations vs Transitions: When to Use Each',
    excerpt: 'Master the art of motion design with CSS. Learn keyframes, easing functions, performance tips, and when JavaScript is actually needed.',
    category: 'CSS',
    readTime: '8 mins',
    date: 'March 20, 2026',
    author: 'Alex Mercer, UI Designer',
    image: 'https://images.unsplash.com/photo-1550063873-ab792950096b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: [
      {
        type: 'p',
        text: 'Motion design is the difference between an interface that feels alive and one that feels static. CSS gives you two powerful tools: transitions for simple A→B state changes and animations for complex, keyframe-driven sequences.'
      },
      {
        type: 'h2',
        text: 'CSS Transitions: Simple State Changes'
      },
      {
        type: 'p',
        text: 'Transitions animate between two states triggered by user interaction (hover, focus, active). They are defined on the element itself and fire whenever the targeted property changes.'
      },
      {
        type: 'code',
        code: `.button {
  background: #6366f1;
  transform: scale(1);
  /* duration | easing | delay | property */
  transition: background 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.button:hover {
  background: #4f46e5;
  transform: scale(1.05); /* Springy overshoot using cubic-bezier */
}`,
        lang: 'css'
      },
      {
        type: 'h2',
        text: 'CSS Keyframe Animations: Full Control'
      },
      {
        type: 'p',
        text: 'Keyframe animations run automatically, loop, and support complex multi-step sequences. They are perfect for loading spinners, entrance animations, and pulsing effects.'
      },
      {
        type: 'code',
        code: `@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-enter {
  animation: fadeSlideUp 0.4s ease-out forwards;
}`,
        lang: 'css'
      },
      {
        type: 'h2',
        text: 'Performance: Only Animate Composite Properties'
      },
      {
        type: 'p',
        text: 'Animate only transform and opacity for 60fps smoothness. These properties are handled by the GPU compositor layer and do not trigger layout recalculations. Avoid animating width, height, margin, or padding — they cause expensive reflows.'
      }
    ]
  },
  {
    slug: 'git-workflow-for-frontend-teams',
    title: 'Git Workflow Mastery for Frontend Developers',
    excerpt: 'Beyond git commit and push — learn branching strategies, rebasing, cherry-picking, and PR best practices used in real teams.',
    category: 'Git',
    readTime: '11 mins',
    date: 'March 5, 2026',
    author: 'Marcus Vance, Mentor',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    content: [
      {
        type: 'p',
        text: 'Your Git skills directly impact your team velocity. Messy commit histories, broken merges, and spaghetti branches slow everyone down. Master these workflow patterns to become the developer every team wants.'
      },
      {
        type: 'h2',
        text: 'Branching Strategy: Git Flow vs Trunk-Based'
      },
      {
        type: 'p',
        text: 'Git Flow uses long-lived feature, develop, and release branches — great for versioned software. Trunk-based development has everyone committing to main with feature flags — preferred by modern CI/CD teams for faster iteration.'
      },
      {
        type: 'code',
        code: `# Create a feature branch from main
git checkout -b feat/user-auth-flow

# Make atomic commits (one logical change per commit)
git add src/auth/
git commit -m "feat(auth): add JWT token validation middleware"

# Rebase onto latest main before PR (cleaner than merge)
git fetch origin
git rebase origin/main

# Interactive rebase to squash WIP commits
git rebase -i HEAD~4`,
        lang: 'bash'
      },
      {
        type: 'h2',
        text: 'Writing Meaningful Commit Messages'
      },
      {
        type: 'p',
        text: 'Follow the Conventional Commits specification: type(scope): description. Common types: feat (new feature), fix (bug fix), chore (maintenance), docs (documentation), refactor (restructuring), perf (performance). This enables automatic changelog generation.'
      },
      {
        type: 'h2',
        text: 'Cherry-Pick: Surgical Commit Porting'
      },
      {
        type: 'p',
        text: 'Cherry-pick applies a specific commit from one branch to another without merging everything. Useful for hotfixes that need to land on multiple release branches simultaneously.'
      }
    ]
  }
];
