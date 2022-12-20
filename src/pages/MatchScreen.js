import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TeamEvents from "../components/pages/Match/TeamEvents";
import Team from "../components/pages/Match/Team";
import TeamsStatistics from "../components/pages/Match/TeamsStatistics";
import Hero from "../components/pages/Match/Hero";

const MatchScreen = () => {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://worldcupjson.net/matches/${params?.id}`).then((res) => {
      setData(res.data);
    });
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>;
  }
  const {
    home_team,
    away_team,
    home_team_lineup,
    away_team_lineup,
    home_team_events,
    away_team_events,
    home_team_statistics,
    away_team_statistics,
    datetime,
    venue,
    location,
  } = data;

  console.log(data);

  return (
    <main className="bg-light">
      <Hero data={data} />
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-3 order-2 order-lg-1 bg-primary text-white py-4">
            <h2 className="mb-3 text-center">{home_team_lineup.tactics}</h2>
            <Team teamLineup={home_team_lineup} />
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2 bg-light text-primary py-4 px-5">
            <div className="row mb-3">
              <div className="col-12">
                <h3 className="border-bottom border-danger">Statistics:</h3>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <TeamsStatistics
                  ht={home_team_statistics}
                  at={away_team_statistics}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <h3 className="border-bottom border-danger">Details:</h3>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <TeamEvents teamEvents={home_team_events} />
              </div>
              <div className="col-6">
                <TeamEvents teamEvents={away_team_events} />
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 order-3 bg-primary text-white py-4">
            <h2 className="mb-3 text-center">{away_team_lineup.tactics}</h2>
            <Team teamLineup={away_team_lineup} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MatchScreen;