import React from 'react';
import { Button, CircularProgress, Typography, Snackbar } from '@mui/material';
import useDeleteArticle from '../../Hooks/useDeleteArticles';

const DeleteArticle: React.FC = () => {
    const { article, loading, error, handleDelete, handleBack } = useDeleteArticle();

    return (
        <div>
            <Typography variant="h4">Delete Article</Typography>
            {loading && <CircularProgress />}
            {error && (
                <Snackbar
                    open={Boolean(error)}
                    message={error}
                    autoHideDuration={6000}
                    onClose={() => {}}
                />
            )}
            {article && !loading && (
                <div>
                    <Typography variant="body1">
                        Are you sure you want to delete the article titled "{article.title}" by {article.author}?
                    </Typography>
                    <Button variant="outlined" color="error" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant="outlined" onClick={handleBack}>
                        Back
                    </Button>
                </div>
            )}
        </div>
    );
};

export default DeleteArticle;
