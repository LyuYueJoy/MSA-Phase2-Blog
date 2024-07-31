import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticleById, deleteArticleById } from '../Services/articleService';

const useDeleteArticle = () => {
    const [article, setArticle] = useState<{ title: string; author: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticle = async () => {
            if (id) {
                try {
                    const data = await getArticleById(id);
                    setArticle(data);
                } catch (error) {
                    setError('Error fetching article');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchArticle();
    }, [id]);

    const handleDelete = async () => {
        if (id) {
            try {
                await deleteArticleById(id);
                navigate("/articles", { state: { message: "Article Deleted Successfully" } });
            } catch (error) {
                setError('Error deleting article');
            }
        }
    };

    const handleBack = () => {
        navigate("/articles");
    };

    return {
        article,
        loading,
        error,
        handleDelete,
        handleBack
    };
};

export default useDeleteArticle;
