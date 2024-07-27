using backend.DTOS;
using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : Controller
    {
        private readonly IWebAPIReop _reop;
        public ArticlesController(IWebAPIReop webAPIReop)
        {
            _reop = webAPIReop;
        }
        //CRUD 

        //Create
        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] ArticleUpdateDto articleUpdateDto)
        {
            var newArticle = new Article()
            {
                Author = articleUpdateDto.Author,
                Title = articleUpdateDto.Title,
                Content = articleUpdateDto.Content,

            };
            var addedArticle = await _reop.AddArticleAsync(newArticle);
            return Ok(newArticle);
        }

        //Read
        [HttpGet]
        public async Task<ActionResult<List<Article>>> GetAllProducts()
        {
            var articles = await _reop.GetAllArticlesAsync();
            return Ok(articles);

        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<Article>> GetArticleByID([FromRoute] int id)
        {
            var article = await _reop.GetArticleByIdAsync(id);
            if (article is null) 
            { 
                return NotFound("product not found");
            }
            return Ok(article);
        }

        // Update
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] int id,[FromBody] ArticleUpdateDto articleUpdateDto)
        {
            var article = await _reop.GetArticleByIdAsync(id);
            if (article is null)
            {
                return NotFound("product not found");
            }

            article.Author = articleUpdateDto.Author;
            article.Title = articleUpdateDto.Title;
            article.Content = articleUpdateDto.Content;

            await _reop.UpdateArticleAsync(article);
            return Ok(article);
        }
        //delete
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteArticle([FromRoute] int id)
        {
            var article = await _reop.GetArticleByIdAsync(id);

            if (article is null)
            {
                return NotFound("product not found");
            }

            await _reop.RemoveArticleAsync(article);
            return Ok(article);
        }

    }
}
