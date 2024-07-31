import React from "react";
import { useState, useEffect } from "react";
import "./article.css";
import { IArticles } from "../../Models/articles";
import { getArticlessUrl } from "../../APIs/apis";
import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Article: React.FC = () => {
  const [articles, setArticles] = useState<IArticles[]>([]);
  const navigate = useNavigate();

  const fetchArticlesList = async () => {
    try {
      const response = await fetch(getArticlessUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: IArticles[] = await response.json();
      setArticles(data);
      console.log("Fetched articles data:", data);
      return data;
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    fetchArticlesList();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const editArticles = (id: number) => {
    navigate(`/articles/edit/${id}`);
  };

  const deleteArticles = (id: number) => {
    navigate(`/articles/delete/${id}`);
  };

  return (
    <div>
      <h1>Article List</h1>
      {articles.length === 0 ? (
        <h1>No Articles</h1>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Creation Time</th>
                <th>Update Time</th>
                <th>Author</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{article.content}</td>
                  <td>{formatDate(article.createdAt)}</td>
                  <td>{formatDate(article.updateAt)}</td>
                  <td>{article.author}</td>
                  <td>
                    <Button variant="outlined" onClick={() => editArticles(article.id)}>
                      <Edit />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Article;
