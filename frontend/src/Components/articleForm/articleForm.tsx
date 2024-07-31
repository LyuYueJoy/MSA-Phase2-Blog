import React from 'react';
import { TextField, Box, Grid, Button, Typography } from '@mui/material';

interface ArticleFormProps {
    author: string;
    title: string;
    content: string;
    setAuthor: React.Dispatch<React.SetStateAction<string>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    onSave: () => void;
    onBack: () => void;
    titleText: string;
}

const ArticleForm: React.FC<ArticleFormProps> = ({
    author,
    title,
    content,
    setAuthor,
    setTitle,
    setContent,
    onSave,
    onBack,
    titleText
}) => {
    return (
        <Box sx={{ padding: 2, bgcolor: 'background.default', minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom color="text.primary">
                {titleText}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        autoComplete="off"
                        label="Author"
                        variant="outlined"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        InputProps={{
                            style: {
                                color: 'text.primary',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: 'text.secondary',
                            },
                        }}
                        sx={{ minHeight: '100px' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        autoComplete="off"
                        label="Title"
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        InputProps={{
                            style: {
                                color: 'text.primary',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: 'text.secondary',
                            },
                        }}
                        sx={{ minHeight: '100px' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        autoComplete="off"
                        label="Content"
                        variant="outlined"
                        multiline
                        rows={10}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        InputProps={{
                            style: {
                                color: 'text.primary',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: 'text.secondary',
                            },
                        }}
                        sx={{ minHeight: '300px' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button variant="outlined" onClick={onSave}>
                            Save
                        </Button>
                        <Button variant="outlined" onClick={onBack}>
                            Back
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ArticleForm;
