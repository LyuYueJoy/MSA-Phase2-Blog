using System.ComponentModel.DataAnnotations;

namespace backend.DTOS
{
    public class ArticleInp
    {
        [Required]
        public string Author { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
    }
}
