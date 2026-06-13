import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Page views
import Home from '../pages/Home';
import HtmlReference from '../pages/HtmlReference';
import CssReference from '../pages/CssReference';
import BlogList from '../pages/BlogList';
import BlogDetail from '../pages/BlogDetail';
import Roadmap from '../pages/Roadmap';
import LearningHub from '../pages/LearningHub';
import LessonDetail from '../pages/LessonDetail';
import InterviewPrep from '../pages/InterviewPrep';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/html" element={<HtmlReference />} />
      <Route path="/css" element={<CssReference />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/learn" element={<LearningHub />} />
      <Route path="/learn/:category/:lessonId" element={<LessonDetail />} />
      <Route path="/prep" element={<InterviewPrep />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      {/* Fallback Catch-all route redirecting to Home */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

