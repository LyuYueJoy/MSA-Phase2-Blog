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

            // Click Save to clear the form.
            setAuthor("");
            setTitle("");
            setContent("");

            navigate("/articles", { state: { message: "Article Created Successfully" } });
        } catch (error) {
            console.error("Error saving article:", error);
        }
    };

    const handleBack = () => {
        navigate("/articles"); // back to article page
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
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
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        autoComplete="off"
                        label="Content"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
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
