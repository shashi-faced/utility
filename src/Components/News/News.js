import React, { useState, useEffect } from "react";
import './news.css';
import axios from 'axios';

function News() {
    const [expanded, setExpanded] = useState(null);
    const [newsItems, setNews] = useState([]);
    const [readMoreData ,setReadMoreData] = useState({});
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    console.log(expanded);
    console.log(readMoreData);

    const fetchNews = async () => {
        try {
          const params = {
            access_key: "a06eb1bccea54200000e92f958401e29",
            categories: "-general,-sports",
            sort: "published_desc",
            limit: 10,
            languages: 'en',
            countries: 'in',
          };
          // Make the GET request with query parameters
          const response = await axios.get("http://api.mediastack.com/v1/news", { params });
          setNews(response.data); // Store response data
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        fetchNews();
      }, []);
    const toggleReadMore = (item) => {
      item.expanded = !item.expanded;
      item.moreData = item.expanded ? item.description : ''
      setExpanded(item.expanded);
      setReadMoreData(item.description);
      };
      if(newsItems && newsItems.data && newsItems.data.length > 0) {
      return (
    <>
<div>
    <div className="news-page">
      <h1 className="news-header">Latest News</h1>
      <div className="news-container">
       
        { newsItems.data.map((item) => (
          <div  className="news-item">
            <h2 className="news-title">{item.title}</h2>
            {item.expanded && (
            <p className="news-content">
              {item.moreData}
            </p>
          )}
            <button className="toggle-button" onClick={() => toggleReadMore(item)}>
              {item.expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
  }
}
export default News;
