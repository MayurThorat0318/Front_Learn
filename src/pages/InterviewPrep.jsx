import React, { useState, useMemo } from 'react';
import Button from '../components/common/Button';
import './InterviewPrep.css';

export default function InterviewPrep() {
  // Mock interview questions database
  const questionsData = [
    {
      id: 1,
      category: 'HTML',
      question: 'What is Semantic HTML and why is it important?',
      answer: 'Semantic HTML refers to using tags that clearly define their content meaning (like <article>, <header>, <nav>) rather than generic structural containers (like <div>, <span>). It is crucial because it improves web Accessibility (helping screen readers read content hierarchically), boosts SEO (helping search engine bots index pages), and increases code readability.'
    },
    {
      id: 2,
      category: 'CSS',
      question: 'What is the CSS Box Model, and how does box-sizing: border-box affect it?',
      answer: 'The CSS Box Model is the layout structure of elements, consisting of Margins, Borders, Padding, and the central Content box. By default, adding paddings or borders expands the layout size of elements beyond their set width. Declaring "box-sizing: border-box" locks the elements dimensions: paddings and borders are absorbed inside the width parameter.'
    },
    {
      id: 3,
      category: 'CSS',
      question: 'What is the main difference between Flexbox and Grid?',
      answer: 'Flexbox is a 1-dimensional layout system, useful for arranging items in a single column OR a single row. Grid is a 2-dimensional layout system, capable of organizing elements inside complex grids of both rows AND columns simultaneously. Use Flexbox for small components (like navbars); use Grid for full-page structures.'
    },
    {
      id: 4,
      category: 'JavaScript',
      question: 'What is Event Delegation in JavaScript and why use it?',
      answer: 'Event Delegation is an optimization pattern where a single event listener is attached to a parent element rather than attaching separate listeners to every child item. It works because of Event Bubbling (clicks climb the DOM tree). This saves memory usage and ensures that new elements dynamically added to the list automatically inherit the listener.'
    },
    {
      id: 5,
      category: 'JavaScript',
      question: 'Explain the difference between double equals (==) and triple equals (===).',
      answer: 'Double equals (==) compares values after performing Type Coercion (converting variables to equivalent types). For example, 5 == "5" evaluates to true. Triple equals (===) compares both values AND data types strictly without conversion (5 === "5" returns false because number is not equal to string).'
    },
    {
      id: 6,
      category: 'JavaScript',
      question: 'What is a Closure in JavaScript?',
      answer: 'A closure is formed when a function references variables located inside its outer lexical scope. The function retains access to those scope variables even after the outer function has completed execution and returned, allowing data encapsulation (private variables).'
    },
    {
      id: 7,
      category: 'React',
      question: 'Why should you never modify state directly in React?',
      answer: 'Modifying state variables directly (e.g. state.value = "new") does not inform React of changes. React relies on state setter functions (like setState) to identify references differences. Calling the setter schedules page render updates; mutating values directly bypasses rendering updates, causing freeze issues.'
    },
    {
      id: 8,
      category: 'React',
      question: 'What is the purpose of the "key" prop in React lists?',
      answer: 'The key prop helps React identify which list elements have changed, been added, or been deleted during dynamic renders. It acts as an identifier during DOM reconciliation. Keys should be unique and stable strings (avoid using array indices, which scramble rendering when items are reordered).'
    }
  ];

  // Search/Filters states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Track flipped state of cards by ID
  const [flippedCards, setFlippedCards] = useState({});

  const categories = ['All', 'HTML', 'CSS', 'JavaScript', 'React'];

  // Toggle card flip
  const handleCardFlip = (cardId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Filter questions dynamically
  const filteredQuestions = useMemo(() => {
    return questionsData.filter((q) => {
      const matchesSearch = 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || 
        q.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="container page-spacing fade-in">
      {/* Header section */}
      <section className="interview-hero">
        <h1>Interview Preparation Hub</h1>
        <p>Test your core frontend knowledge. Type in search queries, toggle categories, and click flashcards to reveal answers.</p>
      </section>

      {/* Search & Filters Controls */}
      <section className="prep-filters-bar">
        <div className="search-input-wrapper">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-field"
            aria-label="Search interview questions"
          />
        </div>

        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Flashcards */}
      {filteredQuestions.length > 0 ? (
        <div className="flashcards-grid">
          {filteredQuestions.map((q) => {
            const isFlipped = !!flippedCards[q.id];
            return (
              <div 
                key={q.id} 
                className={`flashcard-container ${isFlipped ? 'flipped' : ''}`}
                onClick={() => handleCardFlip(q.id)}
                role="button"
                tabIndex="0"
                aria-label={`Interview question flashcard: ${q.question}. Click to flip.`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardFlip(q.id);
                  }
                }}
              >
                <div className="flashcard-inner">
                  {/* Card Front (The Question) */}
                  <div className="flashcard-front">
                    <span className="card-label-q">{q.category} Question</span>
                    <p className="card-text-q">{q.question}</p>
                    <span className="flip-prompt-indicator">Click to reveal answer 🔄</span>
                  </div>

                  {/* Card Back (The Answer) */}
                  <div className="flashcard-back">
                    <span className="card-label-a">Answer Overview</span>
                    <div className="card-text-a">
                      <p>{q.answer}</p>
                    </div>
                    <span className="flip-prompt-indicator">Click to view question 🔄</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-prep-results">
          <h3>No Questions Found</h3>
          <p>We couldn't find any question matching "{searchQuery}". Try a different keyword!</p>
          <Button variant="outline" size="sm" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
            Clear Filters
          </Button>
        </div>
      )}
    </main>
  );
}
