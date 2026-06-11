import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './BlogList.css';

export default function BlogList() {
  const navigate = useNavigate();
  
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories list
  const categories = ['All', 'HTML', 'CSS', 'JavaScript', 'React'];

  // Memoized filter checks to prevent redundant recalculations on renders
  const filteredBlogs = useMemo(() => {
    return blogsData.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || 
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="container blog-list-page fade-in">
      {/* Header section */}
      <section className="blog-hero">
        <h1>Technical Blog Platform</h1>
        <p>In-depth insights, optimization strategies, and tutorials to expand your frontend engineering scope.</p>
      </section>

      {/* Search and Filters Layout Bar */}
      <section className="blog-filters-bar">
        {/* Typable Search Input */}
        <div className="search-input-wrapper">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-field"
            aria-label="Search articles input"
          />
        </div>

        {/* Category pill links */}
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

      {/* Grid of Results */}
      {filteredBlogs.length > 0 ? (
        <div className="grid-cols-3">
          {filteredBlogs.map((post) => (
            <Card
              key={post.slug}
              category={post.category}
              title={post.title}
              image={post.image}
              footer={
                <div className="blog-card-footer">
                  <span className="blog-date">{post.date}</span>
                  <Button 
                    size="sm" 
                    variant="text" 
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    Read Article →
                  </Button>
                </div>
              }
            >
              <p className="blog-card-excerpt">{post.excerpt}</p>
            </Card>
          ))}
        </div>
      ) : (
        <div className="no-blogs-panel">
          <svg className="no-result-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="10" cy="13" r="2"></circle><path d="m20 20-3.5-3.5"></path></svg>
          <h3>No Articles Found</h3>
          <p>We couldn't find any post matching "{searchQuery}". Try searching for something else!</p>
          <Button variant="outline" size="sm" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
            Reset Filters
          </Button>
        </div>
      )}
    </main>
  );
}
