import React from "react";

const MatchesPageHero = () => {
  return (
    <div
      className="background-cover background-image position-relative mb-5"
      style={{
        backgroundImage: `url(
          "/images/hero-images/Matches-Page-Hero.jpg"
        )`,
      }}
    >
      <div className="position-absolute top-0 bottom-0 start-0 end-0 overlay-primary"></div>
      <div className="position-absolute top-0 bottom-0 start-0 end-0 z-index-2">
        <div className="h-100 container d-flex justify-content-center align-items-center flex-column">
          <h1 className="text-white mb-5">Matches</h1>
          <h5 className="text-white">
            List of all matches, displayed by the stages.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MatchesPageHero;
