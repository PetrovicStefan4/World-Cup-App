import React from "react";

const HomeScreen = () => {
  return (
    <>
      <div
        className="background-cover background-image position-relative hero-heigh-100"
        style={{
          backgroundImage: `url(
          "/images/hero-images/Home-Page-Hero.webp"
        )`,
        }}
      >
        <div className="position-absolute top-0 bottom-0 start-0 end-0 z-index-2">
          <div className="h-100 container">
            <div className="h-100 row d-flex justify-content-center allign-items-center flex-column">
              <div className="col-12">
                <h1 className="text-white fw-bold mb-5">
                  World Cup Qatar 2022
                </h1>
                <h3 className="text-white">
                  Everything you wants to about World Cup.
                </h3>
                <h3 className="text-white mb-5">
                  Detailed statistics for matches and teams, and also the latest
                  news.
                </h3>
                <button className="btn btn-danger px-4">
                  Check latest news
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 bottom-0 start-0 end-0 overlay-primary"></div>
      </div>
    </>
  );
};

export default HomeScreen;
