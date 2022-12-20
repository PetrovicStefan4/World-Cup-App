import React from "react";
import dayjs from "dayjs";
import TeamsCountryFlag from "../../pages/TeamsCountryFlag";
import chooseHeroImage from "../../../utils/chooseHeroImage";

const Hero = (props) => {
  const { data } = props;
  const { home_team, away_team, location, venue, datetime } = data;

  const time = dayjs(datetime).format("HH:mm");
  const date = dayjs(datetime).format("DD.MMM");

  const heroImage = chooseHeroImage(venue);

  return (
    <div
      className="background-cover background-image position-relative mb-5"
      style={{
        backgroundImage: `url(
              "/images/stadiums/${heroImage}"
            )`,
      }}
    >
      <div className="position-absolute top-0 bottom-0 start-0 end-0 z-index-2">
        <div className="container py-6">
          <div className="row">
            <div className="col-3">
              <TeamsCountryFlag team={home_team} />
              <h3 className="text-center text-white">{home_team.name}</h3>
            </div>
            <div className="col-6 d-flex justify-content-end flex-column">
              <h1 className="h1 text-white text-center mb-4">
                <span>{home_team.goals}</span>
                <span className="mx-2">:</span>
                <span>{away_team.goals}</span>
              </h1>
              <h5 className="text-center text-white">
                <span>{time}</span>
                <span>, </span>
                <span>{date}</span>
              </h5>
              <h4 className="text-center text-white">
                <span>{venue}</span>
                <span>, </span>
                <span>{location}</span>
              </h4>
            </div>
            <div className="col-3">
              <TeamsCountryFlag team={away_team} />
              <h3 className="text-center text-white">{away_team.name}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute top-0 bottom-0 start-0 end-0 overlay-primary"></div>
    </div>
  );
};

export default Hero;
