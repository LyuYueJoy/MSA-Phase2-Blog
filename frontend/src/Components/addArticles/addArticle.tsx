import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ArticleForm from "../articleForm/articleForm";
import useArticleForm from "../../Hooks/useArticleForm";

const AddArticle: React.FC = () => {
    const {
        author,
        setAuthor,
        title,
        setTitle,
        content,
        setContent,
        handleSave,
        handleBack
    } = useArticleForm();

    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Add Article
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ArticleForm
                    author={author}
                    title={title}
                    content={content}
                    setAuthor={setAuthor}
                    setTitle={setTitle}
                    setContent={setContent}
                    onSave={handleSave}
                    onBack={handleBack}
                    titleText="Add Article"
                />
            </Grid>
        </Grid>
    );
};

export default AddArticle;
