import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import './Roadmap.css';

export default function Roadmap() {
  const navigate = useNavigate();

  // Checklist database checkpoints
  const roadmapNodes = [
    {
      id: 'html',
      step: 'Step 1',
      title: 'HTML Structure',
      tagline: 'Document Backbone',
      description: 'Master how the browser parses markup tags, registers header metadata, and organizes pages using semantic nodes for optimal web crawlers indexing.',
      topics: ['Document Anatomy & Boilerplates', 'Standard Text Elements', 'Forms & Inputs Validation', 'Landmark semantic nodes', 'Aria attributes & accessibility'],
      color: 'hsl(12, 80%, 55%)',
      route: '/learn'
    },
    {
      id: 'css',
      step: 'Step 2',
      title: 'CSS Styling',
      tagline: 'Layouts & Visuals',
      description: 'Take command of styling and web positioning models. Master layout flow dimensions, spacing, grid systems, and animations.',
      topics: ['Box Model Sizing', 'Responsive Media Queries', 'Flexbox Alignment systems', '2D grid templates and fr fractions', 'Transitions & Keyframe animations'],
      color: 'hsl(200, 85%, 45%)',
      route: '/learn'
    },
    {
      id: 'js',
      step: 'Step 3',
      title: 'JavaScript (ES6+)',
      tagline: 'Dynamic Logic',
      description: 'Transform passive templates into responsive software. Understand browser execution scopes, DOM event triggers, asynchronous scripting, and callbacks.',
      topics: ['Data Types & Structures', 'Array Map/Filter/Reduce loops', 'DOM listeners & event delegation', 'Asynchronous Promises & Fetch callbacks', 'ES6 module imports & exports'],
      color: 'hsl(45, 90%, 50%)',
      route: '/learn'
    },
    {
      id: 'react',
      step: 'Step 4',
      title: 'React Core',
      tagline: 'Modular Component Systems',
      description: 'Build state-driven, encapsulated interfaces. Learn to decouple render nodes, handle side-effects cleanly, and distribute global states.',
      topics: ['Component encapsulation', 'State hooks (useState)', 'Effect cycles (useEffect)', 'Data pipelines (props)', 'Context API & custom hooks'],
      color: 'hsl(195, 80%, 50%)',
      route: '/learn'
    }
  ];

  // Active highlighted node
  const [activeNode, setActiveNode] = useState(roadmapNodes[0]);

  return (
    <main className="container page-spacing fade-in">
      {/* Header Info */}
      <section className="roadmap-header">
        <h1>Frontend Developer Roadmap</h1>
        <p>Interactive career roadmap outlining step-by-step milestones. Select a node to view syllabus checkpoints.</p>
      </section>

      {/* Interactive Path Flow Map */}
      <section className="roadmap-interactive-flow">
        {roadmapNodes.map((node, index) => {
          const isActive = activeNode.id === node.id;
          return (
            <React.Fragment key={node.id}>
              {/* Connector line between nodes */}
              {index > 0 && (
                <div className={`flow-connector ${index <= roadmapNodes.findIndex(n => n.id === activeNode.id) ? 'active' : ''}`} />
              )}
              
              {/* Map Checkpoint Node */}
              <button
                type="button"
                className={`roadmap-node ${isActive ? 'active' : ''}`}
                style={{ '--node-color': node.color }}
                onClick={() => setActiveNode(node)}
                aria-label={`Select ${node.title} checklist`}
              >
                <span className="node-step">{node.step}</span>
                <span className="node-title">{node.title}</span>
                <span className="node-glow" />
              </button>
            </React.Fragment>
          );
        })}
      </section>

      {/* Active Node Detail Card */}
      <section className="roadmap-detail-panel" style={{ borderTop: `4px solid ${activeNode.color}` }}>
        <div className="roadmap-detail-header">
          <div>
            <span className="detail-step-badge" style={{ backgroundColor: activeNode.color }}>{activeNode.step} Checkpoint</span>
            <h2>{activeNode.title}</h2>
            <p className="detail-tagline">{activeNode.tagline}</p>
          </div>
          <Button size="md" onClick={() => navigate(activeNode.route)}>
            Open Study Track
          </Button>
        </div>

        <div className="roadmap-detail-body">
          <div className="detail-description">
            <h3>Milestone Goal:</h3>
            <p>{activeNode.description}</p>
          </div>

          <div className="detail-checklist">
            <h3>Required Core Knowledge:</h3>
            <ul className="syllabus-checklist">
              {activeNode.topics.map((topic, i) => (
                <li key={i} className="syllabus-item">
                  <span className="check-bullet">✓</span> {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
