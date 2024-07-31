using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace backend.Repositories
{
    public class WebAPIRepo:IWebAPIReop
    {
        private WebAPIDBContext _context;
        public WebAPIRepo(WebAPIDBContext webAPIDBContext)
        {
            _context = webAPIDBContext;
        }
        public async Task<IEnumerable<Article>> GetAllArticlesAsync()
        {
            return await _context.Articles.OrderByDescending(q => q.CreatedAt).ToListAsync();
        }

        public async Task<Article> GetArticleByIdAsync(int id)
        {
            return await _context.Articles.FirstOrDefaultAsync(e => e.Id == id);
        }
        public async Task<Article> AddArticleAsync(Article article)
        {
            await _context.Articles.AddAsync(article);
            await _context.SaveChangesAsync();
            return article;
        }
        public async Task<Article> UpdateArticleAsync(Article article)
        {
            _context.Articles.Update(article);
            await _context.SaveChangesAsync();
            return article;
        }

        public async Task<Article> RemoveArticleAsync(Article article)
        {
            _context.Articles.Remove(article);
            await _context.SaveChangesAsync();
            return article;
        }
    }
}
