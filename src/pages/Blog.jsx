import React from 'react';
import '../styles/Blog.css';

const Blog = () => (
  <div className="blog-container">
    <div className="blog-card">
      <h1>
        Our Blog
        <span className="blog-icon" style={{ verticalAlign: 'middle', marginLeft: '8px', display: 'inline-block' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="blogGradient" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stop-color="#fffbe6" />
                <stop offset="60%" stop-color="#ffb6ec" />
                <stop offset="100%" stop-color="#b7e3ed" />
              </radialGradient>
            </defs>
            <rect width="32" height="32" rx="8" fill="url(#blogGradient)" />
            <g>
              <rect x="8" y="10" width="16" height="12" rx="3" fill="#fff" stroke="#b07bac" strokeWidth="2" />
              <rect x="11" y="13" width="10" height="2" rx="1" fill="#b07bac" />
              <rect x="11" y="17" width="7" height="2" rx="1" fill="#b07bac" />
            </g>
          </svg>
        </span>
      </h1>
      <p className="blog-welcome-text">Welcome to our creative corner! Here you'll soon find inspiring stories, behind-the-scenes peeks, and fun DIY ideas to spark your imagination.</p>
      <p>
        Explore our creative journey, behind-the-scenes process, and cute DIY tutorials!
        <br />
        Blog posts coming soon — stay tuned 💫
      </p>
    </div>
  </div>
);

export default Blog;
