// EditArticle.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArticleForm from "../articleForm/articleForm";

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
    );
};

export default EditArticle;
