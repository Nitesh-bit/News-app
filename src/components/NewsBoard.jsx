import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

export default function NewsBoard({ countryCode, category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&apiKey=74f275d0e65043039a4181cf5b81ac9b`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [countryCode, category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles &&
        articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
    </div>
  );
}
