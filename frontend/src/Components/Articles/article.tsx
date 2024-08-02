import React, { useState } from "react";
import ArticleList from "./ArticleList";
import { TextField, Box } from "@mui/material";

const Article: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Box sx={{ padding: 2 }}>
        <TextField
          label="Search Articles"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ mb: 2 }} // Margin-bottom for spacing
        />
      </Box>
      <ArticleList searchQuery={searchQuery} />
    </div>
  );
};

export default Article;
