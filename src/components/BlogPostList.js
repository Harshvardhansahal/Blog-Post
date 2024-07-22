import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPostItem from './BlogPostItem';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 14;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'technology',
            apiKey: 'a089d8a237f641cf81e63e77e3097b3e',
            page: page,
            pageSize: pageSize
          }
        });
        setPosts(result.data.articles.filter(post => post.urlToImage));
        setTotalResults(result.data.totalResults);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, [page]);

  if (!posts.length) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mt-4">
      <h1 className="text-center">Blog Posts</h1>
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4 col-sm-6 mb-4" key={post.url}>
            <BlogPostItem post={post} />
          </div>
        ))}
      </div>
      <div className="pagination d-flex justify-content-between mt-4">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="btn btn-secondary mb-2">
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} disabled={page * pageSize >= totalResults} className="btn btn-secondary mb-2">
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPostList;
