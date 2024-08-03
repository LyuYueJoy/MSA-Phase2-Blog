const API_URL = "http://localhost:5162/api/Articles";

export const createArticle = async (article: { author: string; title: string; content: string }) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    });

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    return response.json();
};
export const getArticleById = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

export const deleteArticleById = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
};

export const updateArticleById = async (id: string, article: { author: string; title: string; content: string }) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};