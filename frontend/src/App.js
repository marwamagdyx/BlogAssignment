import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostList from './components/PostList';
import PostForm from './components/PostForm'; 
const App = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/new" element={<PostForm />} />
      </Routes>
    </div>
  );
};

export default App;
