import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const decodeUrl = (encodedUrl) => {
  return atob(encodedUrl);
};

const BlogPostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=a089d8a237f641cf81e63e77e3097b3e`);
        const decodedUrl = decodeUrl(id);
        const selectedPost = result.data.articles.find(article => article.url === decodedUrl);
        setPost(selectedPost);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mt-4">
      <button onClick={() => navigate(-1)} className="btn btn-secondary mb-4">Back</button>
      <div className="card">
        {post.urlToImage && (
          <img src={post.urlToImage} className="card-img-top post-details" alt={post.title} />
        )}
        <div className="card-body">
          <h1 className="card-title">{post.title}</h1>
          <p className="card-text">{post.content}</p>
          <p className="card-text"><small className="text-muted">{post.publishedAt}</small></p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetails;
