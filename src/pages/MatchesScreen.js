import React from "react";
import axios from "axios";
import ListItem from "../components/ListItem";
import MatchesPageHero from "../components/pages/Matches/MatchesPageHero";
import { useQuery } from "react-query";
import Loading from "../components/Loading";

const MatchesScreen = () => {
  const {
    data: matches,
    isLoading,
    isError,
    error,
  } = useQuery(
    "matches",
    () => {
      return axios.get("https://worldcupjson.net/matches");
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

  const renderGroupStage = matches?.data?.map((item) => {
    if (item.stage_name === "First stage") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  const renderRoundOf16 = matches?.data?.map((item) => {
    if (item.stage_name === "Round of 16") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  const renderQuarterFinal = matches?.data?.map((item) => {
    if (item.stage_name === "Quarter-final") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  const renderSemiFinal = matches?.data?.map((item) => {
    if (item.stage_name === "Semi-final") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  const renderRhirdPlace = matches?.data?.map((item) => {
    if (item.stage_name === "Play-off for third place") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  const renderFinal = matches?.data?.map((item) => {
    if (item.stage_name === "Final") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  return (
    <main>
      <MatchesPageHero />
      <div className="container mb-10">
        <div className="mb-5">
          <h3 className="mb-3 py-2 border-bottom border-danger text-uppercase">
            Final
          </h3>
          {renderFinal}
        </div>
        <div className="mb-5">
          <h3 className="mb-3 py-2 border-bottom border-danger text-uppercase">
            For Third Place
          </h3>
          {renderRhirdPlace}
        </div>
        <div className="mb-5">
          <h3 className="mb-3 py-2 border-bottom border-danger text-uppercase">
            Semi Final
          </h3>
          {renderSemiFinal}
        </div>
        <div className="mb-5">
          <h3 className="mb-3 py-2 border-bottom border-danger text-uppercase">
            Quarter Final
          </h3>
          {renderQuarterFinal}
        </div>
        <div className="mb-5">
          <h3 className="mb-3 py-2 border-bottom border-danger text-uppercase">
            Round of 16
          </h3>
          {renderRoundOf16}
        </div>
        <div>
          <h3 className="mb-3 py-2 border-bottom border-danger text-uppercase">
            Group Stage
          </h3>
          {renderGroupStage}
        </div>
      </div>
    </main>
  );
};

export default MatchesScreen;
