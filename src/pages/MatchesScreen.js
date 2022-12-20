import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "../components/ListItem";

const MatchesScreen = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://worldcupjson.net/matches").then((res) => {
      setData(res.data);
    });
  }, []);
  const renderGroupStage = data?.map((item) => {
    if (item.stage_name === "First stage") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  const renderRoundOf16 = data?.map((item) => {
    if (item.stage_name === "Round of 16") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  const renderQuarterFinal = data?.map((item) => {
    if (item.stage_name === "Quarter-final") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  const renderSemiFinal = data?.map((item) => {
    if (item.stage_name === "Semi-final") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  const renderRhirdPlace = data?.map((item) => {
    if (item.stage_name === "Play-off for third place") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  const renderFinal = data?.map((item) => {
    if (item.stage_name === "Final") {
      return <ListItem item={item} key={item.id} />;
    }
  });

  return (
    <div className="container">
      <div className="mb-5">
        <h1 className="mb-4">Group Stage</h1>
        {renderGroupStage}
      </div>
      <div className="mb-5">
        <h1 className="mb-4">Round of 16</h1>
        {renderRoundOf16}
      </div>
      <div className="mb-5">
        <h1 className="mb-4">Quarter Final</h1>
        {renderQuarterFinal}
      </div>
      <div className="mb-5">
        <h1 className="mb-4">Semi Final</h1>
        {renderSemiFinal}
      </div>
      <div className="mb-5">
        <h1 className="mb-4">Semi Final</h1>
        {renderSemiFinal}
      </div>
      <div className="mb-5">
        <h1 className="mb-4">For Third Place</h1>
        {renderRhirdPlace}
      </div>
      <div className="mb-5">
        <h1 className="mb-4">Final</h1>
        {renderFinal}
      </div>
    </div>
  );
};

export default MatchesScreen;
