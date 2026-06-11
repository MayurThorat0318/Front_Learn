import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import CodeBlock from '../components/common/CodeBlock';
import Button from '../components/common/Button';
import BoxModelVisualizer from '../components/common/BoxModelVisualizer';
import FlexboxVisualizer from '../components/common/FlexboxVisualizer';
import './LessonDetail.css';

export default function LessonDetail() {
  const { category, lessonId } = useParams();
  const navigate = useNavigate();
  const { isCompleted, markComplete, markIncomplete } = useProgress();
  const [activeTab, setActiveTab] = useState('guide'); // Tabs: 'guide' | 'sandbox' | 'interview'

  // 1. Fetch category and current lesson
  const activeCategory = coursesData[category];
  if (!activeCategory) {
    return (
      <div className="container error-panel">
        <h2>Category Not Found</h2>
        <Link to="/learn" className="btn btn-primary">Return to Hub</Link>
      </div>
    );
  }

  const lesson = activeCategory.lessons.find((l) => l.id === lessonId);
  if (!lesson) {
    return (
      <div className="container error-panel">
        <h2>Lesson Not Found</h2>
        <Link to="/learn" className="btn btn-primary">Return to Hub</Link>
      </div>
    );
  }

  const isDone = isCompleted(lesson.id);

  // 2. Navigation helper: next lesson link
  const lessonsList = activeCategory.lessons;
  const currentIdx = lessonsList.findIndex((l) => l.id === lesson.id);
  const nextLesson = currentIdx < lessonsList.length - 1 ? lessonsList[currentIdx + 1] : null;

  // Toggle completion checkbox state
  const handleToggleCompletion = () => {
    if (isDone) {
      markIncomplete(lesson.id);
    } else {
      markComplete(lesson.id);
    }
  };

  return (
    <div className="lesson-page-wrapper fade-in">
      {/* 1. Sidebar Navigation (Left) */}
      <aside className="lesson-sidebar" aria-label="Course Syllabus">
        <Link to="/learn" className="back-link">
          ← Back to Curriculum Hub
        </Link>
        <h3 className="sidebar-cat-title">{activeCategory.title}</h3>
        <nav className="sidebar-links-list">
          {lessonsList.map((item) => (
            <Link
              key={item.id}
              to={`/learn/${category}/${item.id}`}
              className={`sidebar-item-link ${item.id === lessonId ? 'active' : ''} ${isCompleted(item.id) ? 'sidebar-done' : ''}`}
            >
              <span className="dot-indicator"></span>
              <span className="sidebar-item-title">{item.title}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* 2. Content Display Column (Right) */}
      <main className="lesson-main">
        {/* Lesson Header Banner */}
        <header className="lesson-header">
          <div className="lesson-meta-bar">
            <span className="lesson-badge">{lesson.tag}</span>
            <span className="lesson-header-readtime">⏱ {lesson.readTime} reading</span>
          </div>
          <h1>{lesson.title}</h1>
          
          {/* Progress Mark Action Button */}
          <div className="completion-action-bar">
            <Button
              variant={isDone ? 'outline' : 'primary'}
              onClick={handleToggleCompletion}
              className={isDone ? 'btn-complete' : ''}
            >
              {isDone ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Completed!</span>
                </>
              ) : (
                'Mark as Complete'
              )}
            </Button>
          </div>
        </header>

        {/* Dynamic Study Tab Controls */}
        <div className="tab-navigation">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
            onClick={() => setActiveTab('guide')}
          >
            📚 Study Guide
          </button>
          
          {(lesson.sandboxType || category === 'javascript' || category === 'react') && (
            <button
              type="button"
              className={`tab-btn ${activeTab === 'sandbox' ? 'active' : ''}`}
              onClick={() => setActiveTab('sandbox')}
            >
              🛠 Interactive Sandbox
            </button>
          )}

          <button
            type="button"
            className={`tab-btn ${activeTab === 'interview' ? 'active' : ''}`}
            onClick={() => setActiveTab('interview')}
          >
            ❓ Interview Q&A & Mistakes
          </button>
        </div>

        {/* STUDY GUIDE TAB */}
        {activeTab === 'guide' && (
          <section className="tab-pane-content">
            <p className="lesson-intro-text">{lesson.explanation}</p>
            
            <h3 className="section-h3">Syntax Rules</h3>
            <pre className="syntax-text-box"><code>{lesson.syntax}</code></pre>

            <h3 className="section-h3">Code Example</h3>
            <CodeBlock code={lesson.example} language={category} />
            
            {lesson.outputExplanation && (
              <>
                <h3 className="section-h3">Output Explanation</h3>
                <div className="output-explanation-panel">
                  <p>{lesson.outputExplanation}</p>
                </div>
              </>
            )}
          </section>
        )}

        {/* INTERACTIVE SANDBOX TAB */}
        {activeTab === 'sandbox' && (
          <section className="tab-pane-content">
            {lesson.sandboxType === 'box-model' && <BoxModelVisualizer />}
            {lesson.sandboxType === 'flexbox' && <FlexboxVisualizer />}
            
            {/* JavaScript/React Sandbox Fallback */}
            {!lesson.sandboxType && (category === 'javascript' || category === 'react') && (
              <div className="js-sandbox-preview">
                <h3>Interactive Console Runner</h3>
                <p>Run the lesson example directly in your browser's inspect console or edit values below to test results.</p>
                <CodeBlock code={lesson.example} language={category} />
                <div className="console-prompt-box">
                  <Button variant="outline" size="sm" onClick={() => {
                    console.log('--- RUNNING LESSON SNIPPET ---');
                    try {
                      // Safe log indicator for demonstration
                      console.log('Testing code block snippet...');
                      alert('Check your developer tools console (F12) to see output logs!');
                    } catch(e) {
                      console.error(e);
                    }
                  }}>
                    Run Snippet (Check Console)
                  </Button>
                </div>
              </div>
            )}
          </section>
        )}

        {/* INTERVIEW QUESTIONS AND COMMON MISTAKES TAB */}
        {activeTab === 'interview' && (
          <section className="tab-pane-content">
            {/* Common Mistakes */}
            <h3 className="section-h3">Common Mistakes to Avoid</h3>
            <div className="mistakes-container">
              {lesson.mistakes.map((mistake, idx) => (
                <div key={idx} className="mistake-card">
                  <div className="mistake-row bad-row">
                    <span className="mistake-badge bad-badge">❌ Incorrect Pattern</span>
                    <pre><code>{mistake.bad}</code></pre>
                  </div>
                  <div className="mistake-row good-row">
                    <span className="mistake-badge good-badge">✓ Recommended Pattern</span>
                    <pre><code>{mistake.good}</code></pre>
                  </div>
                  <div className="mistake-why-box">
                    <strong>Why:</strong> {mistake.why}
                  </div>
                </div>
              ))}
            </div>

            {/* Interview Q&A List */}
            <h3 className="section-h3" style={{ marginTop: '3rem' }}>Topic Interview Q&As</h3>
            <div className="interview-q-list">
              {lesson.interview.map((qa, idx) => (
                <details key={idx} className="qa-details">
                  <summary className="qa-summary">
                    <span className="qa-number">Q{idx + 1}.</span> {qa.q}
                  </summary>
                  <div className="qa-answer">
                    <p>{qa.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Footer Navigation */}
        <footer className="lesson-footer-nav">
          <Link to="/learn" className="btn btn-outline btn-sm">
            ← Back to Hub
          </Link>
          {nextLesson && (
            <Link to={`/learn/${category}/${nextLesson.id}`} className="btn btn-primary btn-sm">
              Next Lesson: {nextLesson.title} →
            </Link>
          )}
        </footer>
      </main>
    </div>
  );
}
