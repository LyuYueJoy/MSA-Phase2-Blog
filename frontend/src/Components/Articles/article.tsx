import React, { useState } from "react";
import ArticleList from "./ArticleList";
import { TextField, Box, Typography, Grid } from "@mui/material";

const Article: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Article List
        </Typography>
      </Grid>

      <Box sx={{ padding: 2 }}>
        <TextField
          label="Search Articles"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            mb: 2, // Margin-bottom for spacing
            backgroundColor: theme => theme.palette.background.paper,
            color: theme => theme.palette.text.primary,
            '& .MuiInputLabel-root': {
              color: theme => theme.palette.text.primary,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: theme => theme.palette.text.primary,
              },
              '&:hover fieldset': {
                borderColor: theme => theme.palette.primary.main,
              },
              '&.Mui-focused fieldset': {
                borderColor: theme => theme.palette.primary.main,
              },
            },
          }}
        />
      </Box>
      <ArticleList searchQuery={searchQuery} />
    </div>
  );
};

export default Article;
