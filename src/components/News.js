import NewsItem from "./NewsItem";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";
import SkeletonNewsItem from "./SkeletonNewsItem";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // getting api key from env
  const { REACT_APP_API_KEY: API_KEY } = process.env;

  /**
   * function to fecth data from api and set to the articles state
   */
  const getData = async () => {
    //  changing the tile according to endpoint
    document.title = `${
      category[0].toUpperCase() + category.slice(1)
    } - News Monkey`;

    setPage(1);
    setLoading(true);

    try {
      // fetching data from api
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`
      );

      setArticles(response.data.articles);

      setTotalResults(response.data.totalResults);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  /**
   * function for load more data when user reaches near end and append to articles state
   */
  const loadMoreData = async () => {
    try {
      // fetching data from api
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}&page=${
          page + 1
        }`
      );

      setArticles(articles.concat(response.data.articles));
      setPage(page + 1);
    } catch (error) {
      setError(true);
    }
  };

  // fetch data when page open,refresh and category change
  useEffect(() => {
    getData();
  }, [category]);

  if (loading) {
    return (
      <div className="my-4 container">
        <SkeletonNewsItem />
        <SkeletonNewsItem />
        <SkeletonNewsItem />
        <SkeletonNewsItem />
        <SkeletonNewsItem />
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-5 container text-center ">
        <h1 className="display-1" style={{ color: "#ff1744" }}>
          500
        </h1>
        <h3 className="display-6 text-muted">
          Something went wrong please reload the website or revisit after
          sometime
        </h3>
        <a
          className="btn mt-4 btn-lg btn-custom text-light"
          href="mailto: devocoe@gmail.com"
        >
          Report to Developer
        </a>
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={() => {
        loadMoreData();
      }}
      hasMore={totalResults !== articles.length}
      loader={
        <div className="container">
          <SkeletonNewsItem />
        </div>
      }
    >
      <div className="my-4 container">
        {articles.map((item, index) => {
          return (
            <NewsItem
              key={index}
              title={item.title}
              imageUrl={item.urlToImage}
              description={item.description}
              publishedAt={item.publishedAt}
              url={item.url}
            />
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

export default News;
