import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import "./ListNews.scss";

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="list-news-container">
      {news.map((article, index) => (
        <div className="list-news-item" key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          {article.publishedAt && (
            <p>Publication Date: {article.publishedAt}</p>
          )}
          {article.source && article.source.name && (
            <p>Source: {article.source.name}</p>
          )}
          <p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Link to the news
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListNews;
