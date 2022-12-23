import React from "react";
import News from "../components/pages/Home/News";
import news from "../utils/news";

const NewsScreen = () => {
  return (
    <main className="pt-5 mb-10">
      <div className="container">
        <h1 className="mb-5">News</h1>
        <News news={news} show={undefined} />
      </div>
    </main>
  );
};

export default NewsScreen;
