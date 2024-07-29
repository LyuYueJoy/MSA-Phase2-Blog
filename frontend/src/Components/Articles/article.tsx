import React from "react";
import { useState, useEffect } from "react";
import "./article.css";
import { IArticles } from "../../Models/articles";
import { getArticlessUrl } from "../../APIs/apis";
const article: React.FC = () => {
    const [articles, setArticles] = useState<IArticles[]>([]);

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

  return (
    <div>
      <h1>article list</h1>
      {articles.length === 0 ? (
        <h1>No Articles</h1>
      ):(

      

      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Creation Time</th>
              <th>Update Time</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.content}</td>
                <td>{article.createdAt}</td>
                <td>{article.updateAt}</td>
                <td>{article.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
      
    </div>
  );
};

export default article;
