import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../Services/articleService";

const useArticleForm = () => {
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
            const data = await createArticle(article);
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

    return {
        author,
        setAuthor,
        title,
        setTitle,
        content,
        setContent,
        handleSave,
        handleBack
    };
};

export default useArticleForm;
