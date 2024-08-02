using backend.Data;
using backend.Models;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace backend.Tests
{
    public class WebAPIRepoTests
    {
        private readonly WebAPIRepo _repo;
        private readonly DbContextOptions<WebAPIDBContext> _options;

        public WebAPIRepoTests()
        {
            _options = new DbContextOptionsBuilder<WebAPIDBContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            _repo = new WebAPIRepo(new WebAPIDBContext(_options));
        }

        private async Task SeedDatabaseAsync()
        {
            using (var context = new WebAPIDBContext(_options))
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                context.Articles.Add(new Article
                {
                    Id = 1,
                    Title = "Test Article",
                    Content = "Test Content",
                    Author = "Test Author",
                    CreatedAt = DateTime.Now,
                    UpdateAt = DateTime.Now
                });
                await context.SaveChangesAsync();
            }
        }

        [Fact]
        //test get all
        public async Task GetAllArticlesAsync_ReturnsAllArticles()
        {
            // Arrange
            await SeedDatabaseAsync();

            // Act
            var articles = await _repo.GetAllArticlesAsync();

            // Assert
            Assert.Single(articles);
            Assert.Equal("Test Article", articles.First().Title);
        }

 
    }
}
