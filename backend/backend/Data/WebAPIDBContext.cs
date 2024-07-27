using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class WebAPIDBContext : DbContext
    {
        public WebAPIDBContext(DbContextOptions<WebAPIDBContext> options) : base(options) { }

        public DbSet<Article> Articles { get; set; }
    }
}



