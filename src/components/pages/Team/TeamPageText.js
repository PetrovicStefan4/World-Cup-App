import React from "react";

const TeamPageText = ({ data }) => {
  const {
    country,
    name,
    wins,
    draws,
    losses,
    games_played,
    goals_for,
    goals_against,
    goal_differential,
    group_points,
    last_match,
  } = data;

  return (
    <>
      <p>
        {name} played {games_played} games in this tournament.
      </p>
      <p>
        <span>They have score of,</span>
        <span> {wins} </span>
        <span>wins,</span>
        <span> {draws} </span>
        <span>draws, and</span>
        <span> {losses} </span>
        <span>losses, and scored</span>
        <span> {group_points} </span>
        <span>points.</span>
      </p>
      <p>
        When it comes to goals, they've scored {goals_for}, and received{" "}
        {goals_against} in their net, which leads to their score of
        <span> {goal_differential}</span>.
      </p>
      {last_match?.stage_name === "First stage" && (
        <p>They've finnished their competition in Group stage.</p>
      )}
      {last_match?.stage_name === "Round of 16" && (
        <p>They've finnished their competition in Round of 16.</p>
      )}
      {last_match?.stage_name === "Quarter-final" && (
        <p>They've finnished their competition in Quarter final.</p>
      )}
      {last_match?.stage_name === "Play-off for third place" &&
        country !== last_match?.winner && <p>They've finnished 4th.</p>}
      {last_match?.stage_name === "Play-off for third place" &&
        country === last_match?.winner && (
          <p>They've won bronze medal in this competition.</p>
        )}
      {last_match?.stage_name === "Final" && country !== last_match?.winner && (
        <p>They've won silver medal in this competition.</p>
      )}
      {last_match?.stage_name === "Final" && country === last_match?.winner && (
        <p>They've won gold medal in this competition.</p>
      )}
    </>
  );
};

export default TeamPageText;
