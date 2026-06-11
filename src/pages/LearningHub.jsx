import React from 'react';
import { useNavigate } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './LearningHub.css';

export default function LearningHub() {
  const navigate = useNavigate();
  const { completedLessons, resetProgress } = useProgress();

  // Calculate overall course statistics
  const categories = Object.keys(coursesData);
  
  let totalLessonsCount = 0;
  categories.forEach((cat) => {
    totalLessonsCount += coursesData[cat].lessons.length;
  });

  const completedCount = completedLessons.length;
  const progressPercent = totalLessonsCount > 0 
    ? Math.round((completedCount / totalLessonsCount) * 100) 
    : 0;

  // Handler to open a specific lesson
  const handleStartLesson = (category, lessonId) => {
    navigate(`/learn/${category}/${lessonId}`);
  };

  return (
    <main className="container page-spacing fade-in">
      {/* Header Profile / Progress Tracking Dashboard */}
      <section className="hub-dashboard">
        <div className="hub-dashboard-text">
          <h1>Learning Curriculum Hub</h1>
          <p>Master frontend architecture step-by-step with structured guides and live sandboxes.</p>
        </div>

        {/* Dynamic Progress Stats Card */}
        <div className="hub-progress-card">
          <div className="progress-stats">
            <span className="progress-fraction"><strong>{completedCount}</strong> / {totalLessonsCount} Completed</span>
            <span className="progress-percent-label">{progressPercent}% Mastered</span>
          </div>
          <div className="progress-gauge-track">
            <div className="progress-gauge-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          {completedCount > 0 && (
            <button className="reset-progress-btn" onClick={resetProgress}>
              Reset Progress Data
            </button>
          )}
        </div>
      </section>

      {/* Grid of Categories and Lessons */}
      <div className="hub-categories-grid">
        {categories.map((catKey) => {
          const category = coursesData[catKey];
          return (
            <section key={catKey} className="category-section">
              <div className="category-header">
                <h2 className="category-title">{category.title}</h2>
                <p className="category-desc">{category.description}</p>
              </div>

              {/* Cards Grid representing lessons in this category */}
              <div className="lessons-grid">
                {category.lessons.map((lesson) => {
                  const isDone = completedLessons.includes(lesson.id);
                  return (
                    <Card
                      key={lesson.id}
                      category={lesson.tag}
                      tag={isDone ? '✓ Completed' : 'Pending'}
                      title={lesson.title}
                      footer={
                        <div className="lesson-card-footer">
                          <span className="read-time-badge">⏱ {lesson.readTime}</span>
                          <Button 
                            size="sm" 
                            variant={isDone ? 'outline' : 'primary'}
                            onClick={() => handleStartLesson(catKey, lesson.id)}
                          >
                            {isDone ? 'Review Lesson' : 'Start Lesson'}
                          </Button>
                        </div>
                      }
                      className={isDone ? 'card-completed' : ''}
                    >
                      <p>{lesson.summary}</p>
                    </Card>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
