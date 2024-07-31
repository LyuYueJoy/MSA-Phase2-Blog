import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const DeleteArticle: React.FC = () => {
  const [article, setArticle] = useState<{ title: string; author: string } | null>(null);
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://localhost:7034/api/Articles/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://localhost:7034/api/Articles/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      navigate("/articles", { state: { message: "Article Deleted Successfully" } });
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleBack = () => {
    navigate("/articles"); 
  };

  return (
    <div>
      <h2>Delete Article</h2>
      {article ? (
        <div>
          <p>Are you sure you want to delete the article titled "{article.title}" by {article.author}?</p>
          <Button variant="outlined" color="error" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DeleteArticle;
