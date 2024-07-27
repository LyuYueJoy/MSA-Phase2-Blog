namespace backend.DTOS
{
    // -> client
    public class ArticleOutp
    {
        public int Id { get; set; }
        public DateTime ReleaseTime { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
    }
}
