import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import './Roadmap.css';

export default function Roadmap() {
  const navigate = useNavigate();

  const roadmapNodes = [
    {
      id: 'html',
      step: 1,
      label: 'Step 1',
      title: 'HTML Foundations',
      tagline: 'The Skeleton of Every Web Page',
      emoji: '📄',
      difficulty: 'Beginner',
      duration: '1–2 weeks',
      color: 'hsl(12, 80%, 55%)',
      colorLight: 'hsla(12, 80%, 55%, 0.12)',
      route: '/learn',
      description: 'HTML is the backbone of the web. Before styling or scripting, you need to understand how browsers parse markup, what semantic elements are, and how to create accessible, SEO-friendly document structures.',
      outcomes: [
        'Write valid HTML5 boilerplate from memory',
        'Use semantic elements (header, main, section, article, nav, footer)',
        'Build accessible forms with labels, fieldsets & validation',
        'Understand block vs inline elements and when to use each',
        'Add ARIA attributes for screen reader accessibility',
        'Optimize images with alt text, lazy loading, and modern formats'
      ],
      topics: [
        { name: 'Document Anatomy & Boilerplate', done: true },
        { name: 'Semantic HTML5 Elements', done: true },
        { name: 'Forms, Inputs & Native Validation', done: false },
        { name: 'Landmark Elements & Aria Attributes', done: false },
        { name: 'Meta Tags & SEO Basics', done: false },
        { name: 'Media: Images, Audio & Video', done: false }
      ],
      resources: [
        { label: 'MDN HTML Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { label: 'HTML Validator', url: 'https://validator.w3.org/' }
      ],
      prerequisite: null
    },
    {
      id: 'css',
      step: 2,
      label: 'Step 2',
      title: 'CSS Styling',
      tagline: 'Make It Look Great',
      emoji: '🎨',
      difficulty: 'Beginner → Intermediate',
      duration: '2–3 weeks',
      color: 'hsl(200, 85%, 45%)',
      colorLight: 'hsla(200, 85%, 45%, 0.12)',
      route: '/learn',
      description: 'CSS transforms raw HTML into visually polished interfaces. Master the fundamental layout models (Box Model, Flexbox, Grid), responsive design with media queries, and bring interfaces to life with transitions and animations.',
      outcomes: [
        'Explain the CSS Box Model and box-sizing: border-box',
        'Build responsive layouts with Flexbox and CSS Grid',
        'Write maintainable CSS using custom properties (variables)',
        'Apply media queries for mobile-first responsive design',
        'Create smooth UI transitions and keyframe animations',
        'Understand CSS specificity and cascade resolution'
      ],
      topics: [
        { name: 'Box Model & Sizing', done: true },
        { name: 'Flexbox Alignment System', done: true },
        { name: '2D Grid Template Layouts', done: false },
        { name: 'Responsive Media Queries', done: false },
        { name: 'CSS Variables & Design Tokens', done: false },
        { name: 'Transitions & Keyframe Animations', done: false }
      ],
      resources: [
        { label: 'CSS Tricks Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
        { label: 'Grid by Example', url: 'https://gridbyexample.com/' }
      ],
      prerequisite: 'HTML Foundations'
    },
    {
      id: 'js',
      step: 3,
      label: 'Step 3',
      title: 'JavaScript (ES6+)',
      tagline: 'Add Logic & Interactivity',
      emoji: '⚡',
      difficulty: 'Intermediate',
      duration: '3–5 weeks',
      color: 'hsl(45, 90%, 50%)',
      colorLight: 'hsla(45, 90%, 50%, 0.12)',
      route: '/learn',
      description: 'JavaScript transforms static pages into dynamic applications. Learn the language deeply — from data types and closures to async programming, DOM manipulation, and the Event Loop that makes it all tick.',
      outcomes: [
        'Understand var/let/const, scope, and hoisting',
        'Use array methods: map(), filter(), reduce()',
        'Handle async operations with Promises and async/await',
        'Manipulate the DOM and handle user events efficiently',
        'Understand closures, prototype chains, and the this keyword',
        'Implement the Fetch API to communicate with backends'
      ],
      topics: [
        { name: 'Data Types & Destructuring', done: false },
        { name: 'Array Methods (map/filter/reduce)', done: false },
        { name: 'DOM Manipulation & Event Delegation', done: false },
        { name: 'Promises & Async/Await', done: false },
        { name: 'Closures & Scope Chains', done: false },
        { name: 'ES6 Modules & Imports', done: false }
      ],
      resources: [
        { label: 'javascript.info', url: 'https://javascript.info/' },
        { label: 'MDN JavaScript Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
      ],
      prerequisite: 'CSS Styling'
    },
    {
      id: 'react',
      step: 4,
      label: 'Step 4',
      title: 'React Core',
      tagline: 'Build Component-Driven UIs',
      emoji: '⚛️',
      difficulty: 'Intermediate → Advanced',
      duration: '4–6 weeks',
      color: 'hsl(195, 80%, 50%)',
      colorLight: 'hsla(195, 80%, 50%, 0.12)',
      route: '/learn',
      description: 'React is the most in-demand frontend library. Learn to decompose UIs into reusable components, manage application state with hooks, share data through Context, and fetch data cleanly with useEffect.',
      outcomes: [
        'Build functional components with JSX and props',
        'Manage local state with useState and complex state with useReducer',
        'Run side effects and data fetching with useEffect',
        'Share global state with the Context API',
        'Optimize performance with useMemo and useCallback',
        'Write custom hooks to share stateful logic'
      ],
      topics: [
        { name: 'Components, JSX & Props', done: false },
        { name: 'State Hooks (useState)', done: false },
        { name: 'Side Effects (useEffect)', done: false },
        { name: 'Context API & Global State', done: false },
        { name: 'Performance: useMemo & useCallback', done: false },
        { name: 'Custom Hooks & Patterns', done: false }
      ],
      resources: [
        { label: 'React Official Docs', url: 'https://react.dev/' },
        { label: 'React Patterns', url: 'https://reactpatterns.com/' }
      ],
      prerequisite: 'JavaScript (ES6+)'
    },
    {
      id: 'tools',
      step: 5,
      label: 'Step 5',
      title: 'Dev Tools & Deployment',
      tagline: 'Ship Real Projects',
      emoji: '🚀',
      difficulty: 'Intermediate',
      duration: '1–2 weeks',
      color: 'hsl(280, 70%, 55%)',
      colorLight: 'hsla(280, 70%, 55%, 0.12)',
      route: '/learn',
      description: 'A professional developer knows how to version control code with Git, manage dependencies with npm, bundle projects with Vite, and deploy to the web. These tools transform hobby projects into production-ready applications.',
      outcomes: [
        'Use Git for version control: branches, commits, merge/rebase',
        'Manage project dependencies with npm/yarn',
        'Configure Vite or Next.js for fast development builds',
        'Deploy to Vercel, Netlify, or GitHub Pages',
        'Debug issues using Chrome DevTools effectively',
        'Understand environment variables and build pipelines'
      ],
      topics: [
        { name: 'Git Branching & Workflows', done: false },
        { name: 'npm & Package Management', done: false },
        { name: 'Vite Build Tool & HMR', done: false },
        { name: 'Chrome DevTools Mastery', done: false },
        { name: 'Deployment to Vercel/Netlify', done: false },
        { name: 'Environment Variables & CI/CD', done: false }
      ],
      resources: [
        { label: 'Vite Documentation', url: 'https://vitejs.dev/' },
        { label: 'Vercel Deployment', url: 'https://vercel.com/docs' }
      ],
      prerequisite: 'React Core'
    }
  ];

  const [activeNode, setActiveNode] = useState(roadmapNodes[0]);
  const difficultyColor = {
    'Beginner': '#10b981',
    'Beginner → Intermediate': '#f59e0b',
    'Intermediate': '#f59e0b',
    'Intermediate → Advanced': '#ef4444',
    'Advanced': '#ef4444'
  };

  return (
    <main className="container page-spacing fade-in">
      {/* Header */}
      <section className="roadmap-header">
        <h1>Frontend Developer Roadmap</h1>
        <p>A structured, step-by-step path from absolute beginner to job-ready developer. Select any milestone to see the full learning breakdown.</p>
        <div className="roadmap-legend">
          <span className="legend-item"><span className="legend-dot" style={{background:'#10b981'}}></span>Beginner</span>
          <span className="legend-item"><span className="legend-dot" style={{background:'#f59e0b'}}></span>Intermediate</span>
          <span className="legend-item"><span className="legend-dot" style={{background:'#ef4444'}}></span>Advanced</span>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="roadmap-interactive-flow" aria-label="Roadmap steps">
        {roadmapNodes.map((node, index) => {
          const isActive = activeNode.id === node.id;
          const isPassed = node.step < activeNode.step;
          return (
            <React.Fragment key={node.id}>
              {index > 0 && (
                <div className={`flow-connector ${isPassed ? 'active' : ''}`} aria-hidden="true">
                  <div className="connector-arrow">›</div>
                </div>
              )}
              <button
                type="button"
                className={`roadmap-node ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
                style={{ '--node-color': node.color, '--node-color-light': node.colorLight }}
                onClick={() => setActiveNode(node)}
                aria-label={`Select ${node.title} milestone`}
                aria-pressed={isActive}
              >
                <span className="node-emoji" aria-hidden="true">{node.emoji}</span>
                <span className="node-step">{node.label}</span>
                <span className="node-title">{node.title}</span>
                <span className="node-duration">⏱ {node.duration}</span>
                {isActive && <span className="node-glow" aria-hidden="true" />}
              </button>
            </React.Fragment>
          );
        })}
      </section>

      {/* Detail Panel */}
      <section
        className="roadmap-detail-panel"
        style={{ borderTop: `4px solid ${activeNode.color}`, '--node-color': activeNode.color, '--node-color-light': activeNode.colorLight }}
        aria-label={`${activeNode.title} details`}
      >
        {/* Panel Header */}
        <div className="roadmap-detail-header">
          <div className="detail-header-left">
            <div className="detail-badges">
              <span className="detail-step-badge" style={{ backgroundColor: activeNode.color }}>
                {activeNode.label}
              </span>
              <span
                className="detail-difficulty-badge"
                style={{ color: difficultyColor[activeNode.difficulty] || '#6366f1', borderColor: difficultyColor[activeNode.difficulty] || '#6366f1' }}
              >
                {activeNode.difficulty}
              </span>
              <span className="detail-time-badge">⏱ {activeNode.duration}</span>
            </div>
            <h2>{activeNode.emoji} {activeNode.title}</h2>
            <p className="detail-tagline">{activeNode.tagline}</p>
            {activeNode.prerequisite && (
              <p className="detail-prerequisite">
                <span className="prereq-icon">⚠️</span>
                Prerequisite: <strong>{activeNode.prerequisite}</strong>
              </p>
            )}
          </div>
          <Button size="md" onClick={() => navigate(activeNode.route)}>
            Start Learning →
          </Button>
        </div>

        {/* Description */}
        <div className="detail-description-block">
          <p>{activeNode.description}</p>
        </div>

        {/* Main body: 2-column layout */}
        <div className="roadmap-detail-body">
          {/* Learning Outcomes */}
          <div className="detail-column">
            <h3 className="detail-col-title">
              <span className="col-icon">🎯</span> What You'll Learn
            </h3>
            <ul className="outcomes-list">
              {activeNode.outcomes.map((outcome, i) => (
                <li key={i} className="outcome-item">
                  <span className="outcome-bullet" style={{ color: activeNode.color }}>✓</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Topics Checklist */}
          <div className="detail-column">
            <h3 className="detail-col-title">
              <span className="col-icon">📋</span> Core Topics
            </h3>
            <ul className="syllabus-checklist">
              {activeNode.topics.map((topic, i) => (
                <li key={i} className={`syllabus-item ${topic.done ? 'covered' : ''}`}>
                  <span className="check-bullet">{topic.done ? '✅' : '○'}</span>
                  <span>{topic.name}</span>
                  {topic.done && <span className="covered-badge">Covered</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources Footer */}
        {activeNode.resources.length > 0 && (
          <div className="detail-resources">
            <h3 className="detail-col-title">
              <span className="col-icon">🔗</span> Recommended Resources
            </h3>
            <div className="resources-list">
              {activeNode.resources.map((res, i) => (
                <a
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                  style={{ '--node-color': activeNode.color }}
                >
                  {res.label} ↗
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Overall progress bar */}
      <div className="roadmap-progress-footer">
        <span>You're viewing:</span>
        <div className="step-progress-track">
          {roadmapNodes.map((n) => (
            <button
              key={n.id}
              className={`step-pip ${n.id === activeNode.id ? 'active' : ''} ${n.step < activeNode.step ? 'passed' : ''}`}
              style={{ '--node-color': n.color }}
              onClick={() => setActiveNode(n)}
              title={n.title}
              aria-label={`Jump to ${n.title}`}
            />
          ))}
        </div>
        <span className="step-counter">{activeNode.step} / {roadmapNodes.length}</span>
      </div>
    </main>
  );
}
