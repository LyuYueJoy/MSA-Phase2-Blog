using backend.Models;

namespace backend.Repositories
{
    public interface IWebAPIReop
    {
        Task<IEnumerable<Article>> GetAllArticlesAsync();
        Task<Article> GetArticleByIdAsync(int id);
        Task<Article> AddArticleAsync(Article article);
        Task<Article> UpdateArticleAsync(Article article);
        Task<Article> RemoveArticleAsync(Article article);
    }
}
