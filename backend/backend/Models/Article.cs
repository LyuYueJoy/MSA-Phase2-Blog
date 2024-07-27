using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Article
    {
        [Key]
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdateAt {  get; set; } = DateTime.Now;
        public string Author { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

    }
}
