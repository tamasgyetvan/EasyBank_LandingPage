type ArticleBoxProps = {
  author: string;
  title: string;
  text: string;
  imageUrl: string;
};

export function ArticleBox({ author, title, text, imageUrl }: ArticleBoxProps) {
  return (
    <div className="articleBox">
      <img src={imageUrl} alt="" />
      <p className="articleAuthor">{"By " + author}</p>
      <h4 className="articleTitle">{title}</h4>
      <p className="articleText">{text}</p>
    </div>
  );
}
