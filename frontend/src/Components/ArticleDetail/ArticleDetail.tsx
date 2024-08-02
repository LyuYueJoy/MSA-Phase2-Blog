import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Paper } from '@mui/material';
import { IArticles } from '../../Models/articles';
import { getArticlessUrl } from '../../APIs/apis';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<IArticles | null>(null);

  const fetchArticleDetail = async () => {
    try {
      const response = await fetch(`${getArticlessUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: IArticles = await response.json();
      setArticle(data);
    } catch (error) {
      alert('Error fetching article');
    }
  };

  useEffect(() => {
    fetchArticleDetail();
  }, [id]);

  if (!article) {
    return <Typography>Loading...</Typography>;
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Button variant="contained" color="primary" onClick={() => navigate('/articles')}>
        Back to Articles
      </Button>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {article.author}
        </Typography>
      </Box>
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ 
          whiteSpace: 'pre-line', 
          marginTop: 2, 
          marginLeft: 4, 
          textAlign: 'left' 
        }}
      >
        {article.content}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <Typography variant="body2" color="textSecondary">
          Created: {formatDate(article.createdAt)}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Updated: {formatDate(article.updateAt)}
        </Typography>
      </Box>
    </Paper>
    </Box>
  );
};

export default ArticleDetail;
