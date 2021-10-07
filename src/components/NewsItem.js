import React from "react";
import moment from "moment";

const NewsItem = ({ imageUrl, title, description, publishedAt, url }) => {
  return (
    <div className="card mb-3">
      <div className="row ">
        <div className="col-md-4 ">
          <img
            src={imageUrl ? imageUrl : "https://i.stack.imgur.com/y9DpT.jpg"}
            className="img-fluid"
            alt={title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                {moment(publishedAt).fromNow()}
              </small>
            </p>
            <a
              target="_blank"
              href={url}
              className="btn btn-sm text-light btn-custom"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
