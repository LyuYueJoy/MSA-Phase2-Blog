import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
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

            // Clear the form after updating
            setAuthor("");
            setTitle("");
            setContent("");

            navigate("/articles", { state: { message: "Article Updated Successfully" } });
        } catch (error) {
            console.error("Error updating article:", error);
        }
    };

    const handleBack = () => {
        navigate("/articles"); // Back to article list page
    };

    return (
        <div>
            <h2>Edit Article</h2>
            <TextField
                autoComplete="off"
                label="Author"
                variant="outlined"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                autoComplete="off"
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                autoComplete="off"
                label="Content"
                variant="outlined"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                multiline
                rows={10} // Adjust rows as needed
                fullWidth
                margin="normal"
            />
            <div>
                <Button variant="outlined" onClick={handleSave}>
                    Save
                </Button>
                <Button variant="outlined" onClick={handleBack}>
                    Back
                </Button>
            </div>
        </div>
    );
};

export default EditArticle;
