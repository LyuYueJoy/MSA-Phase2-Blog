import React from 'react';
import { CircularProgress, Snackbar, Typography } from '@mui/material';
import ArticleForm from '../articleForm/articleForm';
import useEditArticle from '../../Hooks/useEditArticle';

const EditArticle: React.FC = () => {
    const {
        author,
        title,
        content,
        setAuthor,
        setTitle,
        setContent,
        handleSave,
        handleBack,
        loading,
        error,
    } = useEditArticle();

    return (
        <div>
            <Typography variant="h4">Edit Article</Typography>
            {loading && <CircularProgress />}
            {error && (
                <Snackbar
                    open={Boolean(error)}
                    message={error}
                    autoHideDuration={6000}
                    onClose={() => {}}
                />
            )}
            <ArticleForm
                author={author}
                title={title}
                content={content}
                setAuthor={setAuthor}
                setTitle={setTitle}
                setContent={setContent}
                onSave={handleSave}
                onBack={handleBack}
                titleText="Edit Article"
            />
        </div>
    );
};

export default EditArticle;
