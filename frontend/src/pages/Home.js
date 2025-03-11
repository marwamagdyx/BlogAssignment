

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostList from '../components/PostList.js';
import '../style.css'; 
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);


  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <div className="nav-container">
      {/* Navigation Panel */}
     <ul
             className="nav nav-pills user-profile-tab justify-content-between align-items-center bg-light-info rounded-2 custom-nav"
             id="pills-tab"
             role="tablist"
           >
             {/* Left - home refresh */}
             <div className="d-flex">
               <li className="nav-item" role="presentation">
                           <button
                             className="nav-link position-relative rounded-0 active d-flex align-items-center justify-content-center bg-transparent fs-3 py-6"
                             id="pills-home-tab"
                             data-bs-toggle="pill"
                             data-bs-target="#pills-home"
                             type="button"
                             role="tab"
                             aria-controls="pills-home"
                             aria-selected="true"
                           >
                             <i className="fa fa-home me-2 fs-6"></i>
                             <Link to="/" className="text-decoration-none">
                               <span className="d-none d-md-block">Home</span>
                             </Link>
                           </button>
                         </li>
             </div>
           </ul>

      <div className="container-users">
        <div className="posts-section">
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Home;