import React, { useState, useEffect } from "react";
import { IArticles } from "../../Models/articles";
import { getArticlessUrl } from "../../APIs/apis";
import { Grid, Typography } from "@mui/material";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  searchQuery: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ searchQuery }) => {
  const [articles, setArticles] = useState<IArticles[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<IArticles[]>([]);

  const fetchArticlesList = async () => {
    try {
      const response = await fetch(getArticlessUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: IArticles[] = await response.json();
      setArticles(data);
      setFilteredArticles(data); // Initialize filteredArticles with all articles
    } catch (error) {
      alert("Error fetching articles");
    }
  };

  useEffect(() => {
    fetchArticlesList();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  }, [searchQuery, articles]);

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>

      {filteredArticles.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="h6">No Articles</Typography>
        </Grid>
      ) : (
        filteredArticles.map((article) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
            <ArticleCard article={article} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ArticleList;
