import React from "react";
import { Link } from "react-router-dom";

const News = (props) => {
  const { news, show } = props;
  const renderNews = news.map((item, index) => {
    if (show <= index) {
      return;
    }

    const { id, title, text, image } = item;
    return (
      <div key={id} className="row mb-5">
        <div className="col-12 col-lg-6 pe-lg-0">
          <div
            className="background-cover background-image h-100"
            style={{
              backgroundImage: `url(
              "${image}"
            )`,
            }}
          ></div>
        </div>
        <div className="col-12 col-lg-6 ps-lg-0">
          <div className="news-wrapper d-flex justify-content-between flex-column py-3 px-4 border border-danger ">
            <div>
              <h3 className="mb-3">{title}</h3>
              {text?.map((item, index) => {
                if (index > 1) {
                  return;
                }
                return <p key={`news-${id}-${index}`}>{item}</p>;
              })}
            </div>
            <Link to={`/news/${id}`}>
              <a className="btn btn-danger">Read more</a>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderNews}</>;
};

export default News;
