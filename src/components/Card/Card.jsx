import { Link } from "react-router-dom";

import "./Card.css";

const Card = () => {
  const data = {
    title: "What is your name? ",
    url: "https://www.google.com",
    description: "Hello",
  };

  return (
    <>
      <div className="news-cards-container">
        <div className="news-card">
          {/* <img
            src={data.urlToImage ? data.urlToImage : images.navbarlogo}
            alt="News-Image"
            className="news-card-header-img"
          /> */}
          <div className="news-card-content">
            <h4 className="news-card-title">{data.title}</h4>
            <p className="news-card-description">{data.description}</p>
            <button as={Link} to={data.url} className="news-read-more-button">
              Read more...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
