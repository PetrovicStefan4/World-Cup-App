import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TeamPageHero from "../components/pages/Team/TeamPageHero";
import TeamPageText from "../components/pages/Team/TeamPageText";
import { useQuery } from "react-query";

const TeamScreen = () => {
  const params = useParams();
  const {
    data: team,
    isLoading,
    error,
    isError,
  } = useQuery("team", () => {
    return axios.get(`https://worldcupjson.net/teams/${params?.country}`);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <main>
        <TeamPageHero data={team?.data} />
        <div className="container">
          <TeamPageText data={team?.data} />
        </div>
      </main>
    </div>
  );
};

export default TeamScreen;
