import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { htmlConcepts } from '../data/htmlConcepts';
import LiveDemo from '../components/common/LiveDemo';
import './HtmlReference.css';

export default function HtmlReference() {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const filtered = htmlConcepts.filter(concept =>
    concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    concept.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container reference-page fade-in">
      {/* Page Header */}
      <section className="ref-hero">
        <span className="ref-badge">📄 HTML</span>
        <h1>HTML Concepts Reference</h1>
        <p>
          Every HTML concept explained briefly with a live interactive demo.
          Click any concept to expand its working demo.
        </p>
      </section>

      {/* Search */}
      <section className="ref-search-bar">
        <div className="ref-search-wrapper">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          <input
            type="text"
            placeholder="Search HTML concepts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ref-search-input"
            id="html-search"
          />
        </div>
        <span className="ref-count">{filtered.length} concept{filtered.length !== 1 ? 's' : ''}</span>
      </section>

      {/* Concepts List */}
      <section className="concepts-list">
        {filtered.map((concept) => {
          const isExpanded = expandedId === concept.id;
          return (
            <article key={concept.id} className={`concept-card ${isExpanded ? 'expanded' : ''}`} id={`concept-${concept.id}`}>
              {/* Concept Header */}
              <button
                type="button"
                className="concept-header"
                onClick={() => toggleExpand(concept.id)}
                aria-expanded={isExpanded}
                aria-controls={`concept-body-${concept.id}`}
              >
                <div className="concept-header-left">
                  <span className="concept-icon">{concept.icon}</span>
                  <div>
                    <h2 className="concept-title">{concept.title}</h2>
                    <p className="concept-summary">{concept.description}</p>
                  </div>
                </div>
                <span className={`expand-chevron ${isExpanded ? 'open' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="concept-body" id={`concept-body-${concept.id}`}>
                  {/* Syntax Block */}
                  <div className="concept-syntax-section">
                    <h3 className="concept-section-title">Syntax</h3>
                    <pre className="concept-syntax-block"><code>{concept.syntax}</code></pre>
                  </div>

                  {/* Live Demo */}
                  <div className="concept-demo-section">
                    <h3 className="concept-section-title">Live Demo</h3>
                    <LiveDemo code={concept.demoCode} title={`${concept.title} Demo`} />
                  </div>

                  {/* Key Notes */}
                  {concept.notes && concept.notes.length > 0 && (
                    <div className="concept-notes-section">
                      <h3 className="concept-section-title">Key Points</h3>
                      <ul className="concept-notes-list">
                        {concept.notes.map((note, i) => (
                          <li key={i} className="concept-note-item">
                            <span className="note-bullet">💡</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* No Results */}
      {filtered.length === 0 && (
        <div className="no-concepts-found">
          <h3>No concepts found</h3>
          <p>No HTML concept matches "{searchQuery}". Try a different search.</p>
          <button className="ref-reset-btn" onClick={() => setSearchQuery('')}>Clear Search</button>
        </div>
      )}
    </main>
  );
}
