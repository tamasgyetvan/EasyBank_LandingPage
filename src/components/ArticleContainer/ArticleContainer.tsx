import data from "../../data/articles.json";
import { ArticleBox } from "../ArticleBox/ArticleBox";

export function ArticleContainer() {
  return (
    <section className="articleContainer">
      <h2>Latest Articles</h2>
      <div>
        {data.map((data) => {
          return (
            <ArticleBox
              key={data.id}
              author={data.author}
              title={data.title}
              text={data.text}
              imageUrl={data.url}
            />
          );
        })}
      </div>
    </section>
  );
}
