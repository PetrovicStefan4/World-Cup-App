import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TeamsTables from "../components/pages/Teams/TeamsTables";
import TableLegend from "../components/pages/Teams/TableLegend";
import TeamsPageHero from "../components/pages/Teams/TeamsPageHero";

const TeamsScreen = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`https://worldcupjson.net/teams`).then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { groups } = data;

  console.log(data);

  return (
    <main>
      <TeamsPageHero />
      <div className="container mt-5 mb-10">
        <div className="mb-5">
          <TeamsTables groups={groups} />
        </div>
        <div>
          <TableLegend />
        </div>
      </div>
    </main>
  );
};

export default TeamsScreen;
