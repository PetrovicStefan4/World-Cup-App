import React from "react";
import TeamsCountryFlag from "../TeamsCountryFlag";

const TeamPageHero = ({ data }) => {
  const { name } = data;

  return (
    <div
      className="background-cover background-image position-relative mb-5"
      style={{
        backgroundImage: `url(
      "/images/stadions/Team-Page-Hero.jpg"
    )`,
      }}
    >
      <div className="position-absolute top-0 bottom-0 start-0 end-0 overlay-primary"></div>
      <div className="position-absolute top-0 bottom-0 start-0 end-0 z-index-2">
        <div className="container h-100 d-flex align-items-center justify-content-center flex-column">
          <TeamsCountryFlag team={data} />
          <h1 className="text-center text-white">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default TeamPageHero;
