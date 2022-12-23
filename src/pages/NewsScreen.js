import React from "react";
import { useParams } from "react-router-dom";
import news from "../utils/news";

const NewsScreen = () => {
  const params = useParams();
  const index = parseInt(params?.id) - 1;
  const currentNews = news[index];
  console.log(currentNews);
  return (
    <main className="pt-5 mb-10">
      <div className="container">
        <h1 className="mb-4">{currentNews?.title}</h1>
        <div className="mb-5">
          <img src={`${currentNews?.image}`} />
        </div>
        <div>
          {currentNews?.text?.map((item, index) => {
            return <p key={`news-${currentNews?.id}-${index}`}>{item}</p>;
          })}
        </div>
      </div>
    </main>
  );
};

export default NewsScreen;
