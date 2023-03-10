import React from "react";
import axios from "axios";
import TeamsTables from "../components/pages/Teams/TeamsTables";
import TableLegend from "../components/pages/Teams/TableLegend";
import TeamsPageHero from "../components/pages/Teams/TeamsPageHero";
import { useQuery } from "react-query";
import Loading from "../components/Loading";

const TeamsScreen = () => {
  const {
    data: teams,
    isLoading,
    error,
    isError,
  } = useQuery(
    "teams",
    () => {
      return axios.get(`https://worldcupjson.net/teams`);
    },
    {
      staleTime: 50000,
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <main>
      <TeamsPageHero />
      <div className="container mt-5 mb-10">
        <div className="mb-5">
          <TeamsTables groups={teams?.data?.groups} />
        </div>
        <div>
          <TableLegend />
        </div>
      </div>
    </main>
  );
};

export default TeamsScreen;
