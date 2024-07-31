import React from "react";
import ArticleForm from "../articleForm/articleForm";
import useArticleForm from "../../Hooks/useArticleForm";

const AddArticle: React.FC = () => {
    const {
        author,
        setAuthor,
        title,
        setTitle,
        content,
        setContent,
        handleSave,
        handleBack
    } = useArticleForm();

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
