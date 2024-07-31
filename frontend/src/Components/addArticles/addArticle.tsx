import React, { useState } from "react";
import { Button, TextField, Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddArticle: React.FC = () => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSave = async () => {
        const article = {
            author,
            title,
            content
        };

        try {
            const response = await fetch("https://localhost:7034/api/Articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(article)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Article saved:", data);

            setAuthor("");
            setTitle("");
            setContent("");

            navigate("/articles", { state: { message: "Article Created Successfully" } });
        } catch (error) {
            console.error("Error saving article:", error);
        }
    };
    // Back to article page
    const handleBack = () => {
        navigate("/articles"); 
    };

    return (
        <Box sx={{ padding: 2, bgcolor: 'background.default', minHeight: '100vh' }}>
            <Typography variant="h4" gutterBottom color="text.primary">
                Add Article
            </Typography>
            <Grid container spacing={2}>
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
                        <Button variant="outlined" onClick={handleSave}>
                            Save
                        </Button>
                        <Button variant="outlined" onClick={handleBack}>
                            Back
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AddArticle;
