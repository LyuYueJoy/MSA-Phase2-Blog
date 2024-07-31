// AddArticle.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleForm from "../articleForm/articleForm";

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
            titleText="Add Article"
        />
    );
};

export default AddArticle;
