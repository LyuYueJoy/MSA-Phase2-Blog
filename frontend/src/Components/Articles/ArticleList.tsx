import React, { useState, useEffect } from "react";
import { IArticles } from "../../Models/articles";
import { getArticlessUrl } from "../../APIs/apis";
import { Grid, Typography } from "@mui/material";
import ArticleCard from "./ArticleCard";

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<IArticles[]>([]);

  const fetchArticlesList = async () => {
    try {
      const response = await fetch(getArticlessUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: IArticles[] = await response.json();
      setArticles(data);
    } catch (error) {
      alert("Error fetching articles");
    }
  };

  useEffect(() => {
    fetchArticlesList();
  }, []);

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Article List
        </Typography>
      </Grid>
      {articles.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="h6">No Articles</Typography>
        </Grid>
      ) : (
        articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
            <ArticleCard article={article} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ArticleList;
