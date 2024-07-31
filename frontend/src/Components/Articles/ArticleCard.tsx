// src/Components/Article/ArticleCard.tsx
import React from "react";
import { IArticles } from "../../Models/articles";
import { Box, Typography, Paper, Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: IArticles;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const navigate = useNavigate();

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
    <Link to={`/articles/detail/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h6" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {article.author}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body2" color="textSecondary">
          Created: {formatDate(article.createdAt)}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Updated: {formatDate(article.updateAt)}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          <Button variant="outlined" color="primary" onClick={(e) => { e.preventDefault(); editArticles(article.id); }} startIcon={<Edit />}>
            Edit
          </Button>
          <Button variant="outlined" color="secondary" onClick={(e) => { e.preventDefault(); deleteArticles(article.id); }} startIcon={<Delete />}>
            Delete
          </Button>
        </Box>
      </Paper>
    </Link>
  );
};

export default ArticleCard;
