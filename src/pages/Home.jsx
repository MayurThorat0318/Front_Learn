import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { htmlConcepts } from '../data/htmlConcepts';
import { cssConcepts } from '../data/cssConcepts';
import { blogsData } from '../data/blogs';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

export default function Home() {
  const navigate = useNavigate();

  // Take the first 3 blogs for Featured Articles
  const featuredBlogs = blogsData.slice(0, 3);

  // Take first 4 concepts from each for preview
  const htmlPreview = htmlConcepts.slice(0, 4);
  const cssPreview = cssConcepts.slice(0, 4);

  return (
    <main style={{ paddingBottom: '6rem' }}>
      {/* 1. Hero Section */}
      <section style={{
        padding: '7rem 1.5rem 5rem 1.5rem',
        background: 'linear-gradient(180deg, var(--primary-light) 0%, transparent 100%)',
        textAlign: 'center',
        borderBottom: '1px solid var(--panel-border)'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{
            display: 'inline-block',
            padding: '0.4rem 1rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--primary-light)',
            color: 'var(--primary)',
            fontSize: '0.875rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            📖 Quick Reference for Frontend Concepts
          </span>
          
          <h1 style={{ fontSize: '3.25rem', fontWeight: '800', lineHeight: '1.15', letterSpacing: '-0.03em' }}>
            HTML & CSS <br />
            <span className="accent-text">Concept Reference.</span>
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginTop: '1.25rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Every concept explained briefly with a live interactive demo.
            Understand what it does, see how it works — all in one place.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button size="lg" onClick={() => navigate('/html')}>
              Explore HTML Concepts
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/css')}>
              Explore CSS Concepts
            </Button>
          </div>
        </div>
      </section>

      {/* 2. HTML Concepts Preview */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>📄 HTML</span>
            <h2 style={{ margin: '0.25rem 0 0 0' }}>HTML Concepts</h2>
          </div>
          <Link to="/html" style={{ fontWeight: '600', fontSize: '0.95rem' }}>View All {htmlConcepts.length} Concepts →</Link>
        </div>

        <div className="grid-cols-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {htmlPreview.map((concept) => (
            <Card
              key={concept.id}
              category="HTML"
              title={`${concept.icon} ${concept.title}`}
              footer={
                <Button size="sm" variant="text" onClick={() => navigate('/html')}>
                  View Demo →
                </Button>
              }
            >
              <p style={{
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                marginBottom: '0'
              }}>{concept.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. CSS Concepts Preview */}
      <section className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'hsl(190, 90%, 35%)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>🎨 CSS</span>
            <h2 style={{ margin: '0.25rem 0 0 0' }}>CSS Concepts</h2>
          </div>
          <Link to="/css" style={{ fontWeight: '600', fontSize: '0.95rem' }}>View All {cssConcepts.length} Concepts →</Link>
        </div>

        <div className="grid-cols-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {cssPreview.map((concept) => (
            <Card
              key={concept.id}
              category="CSS"
              title={`${concept.icon} ${concept.title}`}
              footer={
                <Button size="sm" variant="text" onClick={() => navigate('/css')}>
                  View Demo →
                </Button>
              }
            >
              <p style={{
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                marginBottom: '0'
              }}>{concept.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Featured Articles */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Insights</span>
            <h2 style={{ margin: '0.25rem 0 0 0' }}>Featured Articles</h2>
          </div>
          <Link to="/blog" style={{ fontWeight: '600', fontSize: '0.95rem' }}>See All Articles →</Link>
        </div>

        <div className="grid-cols-3">
          {featuredBlogs.map((post) => (
            <Card
              key={post.slug}
              category={post.category}
              title={post.title}
              image={post.image}
              footer={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>⏱ {post.readTime}</span>
                  <Button size="sm" variant="text" onClick={() => navigate(`/blog/${post.slug}`)}>
                    Read Post
                  </Button>
                </div>
              }
            >
              <p style={{
                display: '-webkit-box',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                marginBottom: '0'
              }}>{post.excerpt}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Quick Stats Banner */}
      <section style={{
        marginTop: '5rem',
        backgroundColor: 'var(--panel-bg)',
        borderTop: '1px solid var(--panel-border)',
        borderBottom: '1px solid var(--panel-border)',
        padding: '4rem 1.5rem'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>What's Inside</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            A quick reference covering the core building blocks of the web.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'var(--bg-color)',
              border: '1px solid var(--panel-border)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem 1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📄</div>
              <h3 style={{ fontSize: '2rem', margin: '0 0 0.25rem', color: 'var(--primary)' }}>{htmlConcepts.length}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>HTML Concepts</p>
            </div>
            <div style={{
              background: 'var(--bg-color)',
              border: '1px solid var(--panel-border)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem 1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎨</div>
              <h3 style={{ fontSize: '2rem', margin: '0 0 0.25rem', color: 'hsl(190, 90%, 35%)' }}>{cssConcepts.length}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>CSS Concepts</p>
            </div>
            <div style={{
              background: 'var(--bg-color)',
              border: '1px solid var(--panel-border)',
              borderRadius: 'var(--radius-md)',
              padding: '2rem 1.5rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎬</div>
              <h3 style={{ fontSize: '2rem', margin: '0 0 0.25rem', color: 'var(--accent)' }}>{htmlConcepts.length + cssConcepts.length}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Live Demos</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
