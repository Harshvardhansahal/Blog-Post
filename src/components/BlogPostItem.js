import React from 'react';
import { Link } from 'react-router-dom';

const encodeUrl = (url) => {
  return btoa(url);
};

const BlogPostItem = ({ post }) => {
  return (
    <div className="card mb-4 shadow-sm">
      {post.urlToImage && (
        <img src={post.urlToImage} className="card-img-top" alt={post.title} />
      )}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text description">{post.description}</p>
        <Link to={`/Blog-Post/post/${encodeUrl(post.url)}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPostItem;
