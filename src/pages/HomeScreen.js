import React from "react";

const HomeScreen = () => {
  return (
    <main>
      <div
        className="background-cover background-image position-relative hero-heigh-100"
        style={{
          backgroundImage: `url(
          "/images/stadions/Home-Page-Hero.webp"
        )`,
        }}
      >
        <div className="position-absolute top-0 bottom-0 start-0 end-0 z-index-2">
          <div className="h-100 container">
            <div className="h-100 d-flex justify-content-center allign-items-center flex-column">
              <h1 className="text-white mb-5">World Cup Qatar 2022</h1>
              <h4 className="text-white">
                Everything you wants to about World Cup.
              </h4>
              <h4 className="text-white mb-5">
                Detailed statistics for matches and teams, and also the latest
                news.
              </h4>
              <button className="btn btn-danger">Check latest news</button>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 bottom-0 start-0 end-0 overlay-primary"></div>
      </div>
    </main>
  );
};

export default HomeScreen;
