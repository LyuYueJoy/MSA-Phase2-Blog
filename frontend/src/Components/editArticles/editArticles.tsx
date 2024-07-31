import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const EditArticle: React.FC = () => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`https://localhost:7034/api/Articles/${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const article = await response.json();
                setAuthor(article.author);
                setTitle(article.title);
                setContent(article.content);
            } catch (error) {
                console.error("Error fetching article:", error);
            }
        };

        if (id) {
            fetchArticle();
        }
    }, [id]);

    const handleSave = async () => {
        const updatedArticle = {
            author,
            title,
            content
        };

        try {
            const response = await fetch(`https://localhost:7034/api/Articles/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedArticle)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Article updated:", data);

            setAuthor("");
            setTitle("");
            setContent("");

            navigate("/articles", { state: { message: "Article Updated Successfully" } });
        } catch (error) {
            console.error("Error updating article:", error);
        }
    };

    const handleBack = () => {
        navigate("/articles"); 
    };

    return (
        <Box sx={{ padding: 2, bgcolor: 'background.default', color: 'text.primary' }}>
            <Typography variant="h4" gutterBottom>
                Edit Article
            </Typography>
            <TextField
                autoComplete="off"
                label="Author"
                variant="outlined"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                fullWidth
                margin="normal"
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
            />
            <TextField
                autoComplete="off"
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
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
            />
            <TextField
                autoComplete="off"
                label="Content"
                variant="outlined"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                multiline
                rows={10} 
                fullWidth
                margin="normal"
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
            />
            <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                <Button variant="outlined" onClick={handleSave}>
                    Save
                </Button>
                <Button variant="outlined" onClick={handleBack}>
                    Back
                </Button>
            </Box>
        </Box>
    );
};

export default EditArticle;
