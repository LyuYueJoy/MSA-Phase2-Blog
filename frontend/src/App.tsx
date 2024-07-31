import React, { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home_page/home";
import Articles from './Components/Articles/article';
import AddArticle from './Components/addArticles/addArticle';
import EditArticle from './Components/editArticles/editArticles';
import DeleteArticle from './Components/deleteArticle/deleteArticle';
import ArticleDetail from './Components/ArticleDetail/ArticleDetail';

import { createTheme, ThemeProvider } from "@mui/material/styles";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const themeType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: themeType
    }
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="Router">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles">
              <Route index element={<Articles />} />
              <Route path="add" element={<AddArticle />} />
              <Route path="edit/:id" element={<EditArticle />} />
              <Route path="delete/:id" element={<DeleteArticle />} />
              <Route path="detail/:id" element={<ArticleDetail />} />

            </Route>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
