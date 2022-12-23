import React from "react";
import HomePageHero from "../components/pages/Home/HomePageHero";
import News from "../components/pages/Home/News";
import news from "../utils/news";

const HomeScreen = () => {
  return (
    <>
      <HomePageHero />
      <main>
        <div className="container mt-5">
          <h1 className="mb-5">Latest news</h1>
          <News news={news} show={2} />
        </div>
      </main>
    </>
  );
};

export default HomeScreen;
