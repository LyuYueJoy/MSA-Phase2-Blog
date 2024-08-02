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
        [Fact]
        //get art by id
        public async Task GetArticleByIdAsync_ReturnsCorrectArticle()
        {
            await SeedDatabaseAsync();
            var articleId = 1;

            var article = await _repo.GetArticleByIdAsync(articleId);

            Assert.NotNull(article);
            Assert.Equal(articleId, article.Id);
            Assert.Equal("Test Article", article.Title);
            Assert.Equal("Test Content", article.Content);
            Assert.Equal("Test Author", article.Author);
        }

        [Fact]
        public async Task AddArticleAsync_AddsArticleSuccessfully()
        {
            await SeedDatabaseAsync();
            var article = new Article
            {
                Title = "Sample Title",
                Content = "Sample Content",
                Author = "Sample Author",
                CreatedAt = DateTime.Now,
                UpdateAt = DateTime.Now
            };

            var addedArticle = await _repo.AddArticleAsync(article);

            Assert.NotNull(addedArticle);
            Assert.Equal(article.Title, addedArticle.Title);
            Assert.Equal(article.Content, addedArticle.Content);
            Assert.Equal(article.Author, addedArticle.Author);
        }

        [Fact]
        public async Task UpdateArticleAsync_UpdatesArticleSuccessfully()
        {
            await SeedDatabaseAsync();
            var existingArticle = await _repo.GetArticleByIdAsync(1);
            existingArticle.Title = "Updated Title";

            var updatedArticle = await _repo.UpdateArticleAsync(existingArticle);
            var articleFromDb = await _repo.GetArticleByIdAsync(1);

            Assert.NotNull(updatedArticle);
            Assert.Equal("Updated Title", articleFromDb.Title);
        }

        [Fact]
        public async Task RemoveArticleAsync_RemovesArticleSuccessfully()
        {
            await SeedDatabaseAsync();
            var articleToRemove = await _repo.GetArticleByIdAsync(1);

            var removedArticle = await _repo.RemoveArticleAsync(articleToRemove);
            var articleFromDb = await _repo.GetArticleByIdAsync(1);
            Assert.NotNull(removedArticle);
            Assert.Null(articleFromDb);
        }

    }
}
