import React, { useState } from 'react';
import axios from 'axios';


const PostForm = ({ fetchPosts }) => {
    const [title, setTitle] = useState(''); // State for post title
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);

        try {
            const response = await axios.post('http://localhost:3000/api/posts', 
                { title, content }, // Send JSON data
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log('Post created:', response.data);
            fetchPosts(); // Refresh posts
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };
    return (
        <div className="col-lg-8"> {/* Set to the same width as posts */}
            <div className="card shadow-none border">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Post Title"
                                id="floatingTitle"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingTitle" className="p-7">Post Title</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control"
                                placeholder="Share your thoughts"
                                id="floatingTextarea2"
                                style={{ height: '137px' }}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            ></textarea>
                            <label htmlFor="floatingTextarea2" className="p-7">Share your thoughts</label>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <button className="btn btn-primary ms-auto" type="submit">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostForm;