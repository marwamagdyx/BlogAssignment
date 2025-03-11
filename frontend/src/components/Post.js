import React, { useState } from 'react';
import axios from 'axios';
import '../style.css'; // Import custom CSS styles
import avatar from '../assets/user-circle.svg';
import like from '../assets/like.png';
import commentbtn from '../assets/chat.png';

const Post = ({ post, fetchPosts }) => {
    const [comment, setComment] = useState(''); 
    const [showComments, setShowComments] = useState(false);
    const [likesCount, setLikesCount] = useState(post.likes.length);
    const [commentsCount, setCommentsCount] = useState(post.comments.length); 

    const handleLike = async () => {
        try {
            await axios.post(`http://localhost:3000/api/posts/${post._id}/like`);
            setLikesCount((prevLikes) => prevLikes + 1);
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    const handleComment = async (e) => {
        e.preventDefault();
        if (!comment.trim()) return;
        try {
            await axios.post(`http://localhost:3000/api/posts/${post._id}/comment`, { content: comment });
            setCommentsCount((prevComments) => prevComments + 1);
            setComment('');
            fetchPosts();
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    // Function to format timestamp
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

 return (
        <div className="card mb-3 shadow-none border">
            <div className="card-body border-bottom">
                {/* Post Header with Avatar, title  and Time */}
                <div className="d-flex align-items-center gap-3">
                    <img src={avatar} alt="avatar" className="rounded-circle" width="40" height="40" />
                    <h4 className="fw-semibold mb-0 fs-4">{post.title} </h4>
                    <h6 className="ms-auto text-muted small">   by Anonymous</h6>
                    <span className="ms-auto text-muted small">{formatTimestamp(post.createdAt)}</span> {/* Add post timestamp */}
                </div>

                {/* Post Content */}
                <p className="text-dark my-3">{post.content}</p>
                {post.image && (
                    <img src={post.image} alt="Post" className="img-fluid rounded-4 w-100 object-fit-cover" style={{ height: '360px' }} />
                )}

                {/* Post Actions (Like, Comment) */}
                <div className="d-flex align-items-center my-3">
                    <div className="d-flex align-items-center gap-2">
                        <a className="like-btn text-white d-flex align-items-center justify-content-center bg-primary p-1 fs-5 rounded-circle" href="#!" onClick={handleLike}>
                            <i className="fa fa-thumbs-up">
                                <img src={like} alt="like" className="img-fluid icon-small" />
                            </i>
                        </a>
                        <span className="text-dark fw-semibold">{likesCount}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 ms-4">
                        <a className="comment-btn text-white d-flex align-items-center justify-content-center bg-secondary p-1 fs-5 rounded-circle" href="#!" onClick={() => setShowComments(!showComments)}>
                            <i className="fa fa-comments">
                                <img src={commentbtn} alt="comment" className="img-fluid icon-small" />
                            </i>
                        </a>
                        <span className="text-dark fw-semibold">{commentsCount}</span>
                    </div>
                </div>

                {/* Comments Section: Toggle Visibility Based on `showComments` */}
                {showComments && (
                    <div className="position-relative">
                        {post.comments.map((comment) => (
                            <div key={comment._id} className="p-4 rounded-2 bg-light mb-3">
                                <div className="d-flex align-items-center gap-3">
                                    <img src={avatar} alt="comment avatar" className="rounded-circle" width="33" height="33" />
                                    <h6 className="fw-semibold mb-0 fs-4">By Anonymous</h6>
                                    
                                                                  </div>
                                {/* Display the comment content */}
                                <p className="my-3">{comment.content}</p>
                            </div>
                        ))}

                        {/* Comment Input */}
                        <div className="d-flex align-items-center gap-3 p-3">
                            <img src={avatar} alt="avatar" className="rounded-circle" width="33" height="33" />
                            <input
                                type="text"
                                className="form-control py-2"
                                placeholder="Comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <button className="btn btn-primary" onClick={handleComment}>Comment</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Post;
