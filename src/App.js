import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Blog-Post/" element={<BlogPostList />} />
          <Route path="/Blog-Post/post/:id" element={<BlogPostDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
