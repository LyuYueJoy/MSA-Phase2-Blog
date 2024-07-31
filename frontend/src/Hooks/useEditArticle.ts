import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticleById, updateArticleById } from '../Services/articleService';

const useEditArticle = () => {
    const [author, setAuthor] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticle = async () => {
            if (id) {
                try {
                    const article = await getArticleById(id);
                    setAuthor(article.author);
                    setTitle(article.title);
                    setContent(article.content);
                } catch (error) {
                    setError('Error fetching article');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchArticle();
    }, [id]);

    const handleSave = async () => {
        if (id) {
            try {
                const updatedArticle = { author, title, content };
                await updateArticleById(id, updatedArticle);
                navigate("/articles", { state: { message: "Article Updated Successfully" } });
            } catch (error) {
                setError('Error updating article');
            }
        }
    };

    const handleBack = () => {
        navigate("/articles");
    };

    return {
        author,
        title,
        content,
        setAuthor,
        setTitle,
        setContent,
        handleSave,
        handleBack,
        loading,
        error,
    };
};

export default useEditArticle;
