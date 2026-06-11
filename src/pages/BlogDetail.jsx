import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import ProgressBar from '../components/common/ProgressBar';
import CodeBlock from '../components/common/CodeBlock';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './BlogDetail.css';

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // 1. Query matching article
  const post = useMemo(() => {
    return blogsData.find((b) => b.slug === slug);
  }, [slug]);

  // 2. Query related articles (matching category, excluding active article, up to 2)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogsData
      .filter((b) => b.slug !== slug && b.category === post.category)
      .slice(0, 2);
  }, [post, slug]);

  // Fallback: If category matching is empty, pull random posts
  const fallbackRelatedPosts = useMemo(() => {
    if (relatedPosts.length > 0) return relatedPosts;
    return blogsData.filter((b) => b.slug !== slug).slice(0, 2);
  }, [relatedPosts, slug]);

  if (!post) {
    return (
      <div className="container error-panel">
        <h2>Article Not Found</h2>
        <Link to="/blog" className="btn btn-primary">Return to Articles</Link>
      </div>
    );
  }

  return (
    <article className="blog-detail-wrapper fade-in">
      {/* Scroll indicator */}
      <ProgressBar />

      {/* Article Header */}
      <header className="article-header">
        <div className="container article-header-container">
          <Link to="/blog" className="back-to-blogs">← Back to Articles</Link>
          
          <div className="article-meta">
            <span className="meta-category">{post.category}</span>
            <span className="meta-dot">•</span>
            <span className="meta-readtime">{post.readTime} read</span>
          </div>

          <h1>{post.title}</h1>

          <div className="article-author-card">
            <div className="author-avatar">{post.author.charAt(0)}</div>
            <div className="author-details">
              <span className="author-name">{post.author}</span>
              <span className="article-publish-date">Published on {post.date}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Banner Image */}
      {post.image && (
        <div className="article-banner">
          <div className="container">
            <img src={post.image} alt={post.title} className="banner-img" />
          </div>
        </div>
      )}

      {/* Article Main Body Content */}
      <section className="article-body-content">
        <div className="container body-container">
          {post.content.map((block, index) => {
            switch (block.type) {
              case 'p':
                return <p key={index} className="article-paragraph">{block.text}</p>;
              case 'h2':
                return <h2 key={index} className="article-h2">{block.text}</h2>;
              case 'code':
                return <CodeBlock key={index} code={block.code} language={block.lang} />;
              default:
                return null;
            }
          })}
        </div>
      </section>

      {/* Related Posts Gutter (Bottom) */}
      <section className="related-articles-section">
        <div className="container">
          <h2 className="related-title">Recommended Reading</h2>
          
          <div className="related-grid">
            {fallbackRelatedPosts.map((relPost) => (
              <Card
                key={relPost.slug}
                category={relPost.category}
                title={relPost.title}
                footer={
                  <Button
                    size="sm"
                    variant="text"
                    onClick={() => {
                      navigate(`/blog/${relPost.slug}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Read Article →
                  </Button>
                }
              >
                <p className="rel-post-excerpt">{relPost.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
