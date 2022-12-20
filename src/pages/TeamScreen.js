import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TeamPageHero from "../components/pages/Team/TeamPageHero";
import TeamPageText from "../components/pages/Team/TeamPageText";

const TeamScreen = () => {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://worldcupjson.net/teams/${params?.country}`)
      .then((res) => {
        setData(res.data);
      });
  }, [params.country]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <main>
        <TeamPageHero data={data} />
        <div className="container">
          <TeamPageText data={data} />
        </div>
      </main>
    </div>
  );
};

export default TeamScreen;
