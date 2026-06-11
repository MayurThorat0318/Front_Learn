import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Page views
import Home from '../pages/Home';
import HtmlReference from '../pages/HtmlReference';
import CssReference from '../pages/CssReference';
import BlogList from '../pages/BlogList';
import BlogDetail from '../pages/BlogDetail';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/html" element={<HtmlReference />} />
      <Route path="/css" element={<CssReference />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      {/* Fallback Catch-all route redirecting to Home */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
