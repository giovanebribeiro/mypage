import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/index';
import BlogPage from './pages/blog';
import BlogPostPage from './pages/BlogPost';
import NotFoundPage from './pages/404';
import { /*initGA,*/ logPageView } from './utils/analytics';

function AppContent() {
  const location = useLocation();

  //useEffect(() => {
    //initGA();
  //}, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
