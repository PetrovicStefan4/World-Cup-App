import React from "react";
import clsx from "clsx";

const TeamsTables = (props) => {
  const { groups } = props;

  const renderGroups = groups?.map((group, index) => {
    const { letter, teams } = group;
    return (
      <div key={`group-${letter}`} className="bg-primary mb-4">
        <h3 className="text-danger px-4 py-2 bg-white border border-danger border-2 border-bottom-0">
          <span className="me-3">Group</span>
          {letter}
        </h3>
        <div className="row px-4 text-white border-bottom mb-2">
          <p className="col-1 fw-bold">#</p>
          <p className="col-3 fw-bold">Team</p>
          <p className="col-1 text-center fw-bold">AG</p>
          <p className="col-1 text-center fw-bold">W</p>
          <p className="col-1 text-center fw-bold">D</p>
          <p className="col-1 text-center fw-bold">L</p>
          <p className="col-1 text-center fw-bold">G</p>
          <p className="col-1 text-center fw-bold">GA</p>
          <p className="col-1 text-center fw-bold">GD</p>
          <p className="col-1 text-center fw-bold">Total</p>
        </div>
        {teams?.map((team, index) => {
          const {
            name,
            games_played,
            wins,
            draws,
            losses,
            goals_for,
            goals_against,
            goal_differential,
            group_points,
          } = team;
          return (
            <div
              key={`team-${letter}-${index}`}
              className="row text-white px-4"
            >
              <p className="col-1">{index + 1}</p>
              <p
                className={clsx(
                  "col-3",
                  games_played > 3 ? "text-danger" : null
                )}
              >
                {name}
              </p>
              <p className="col-1 text-center">{games_played}</p>
              <p className="col-1 text-center">{wins}</p>
              <p className="col-1 text-center">{draws}</p>
              <p className="col-1 text-center">{losses}</p>
              <p className="col-1 text-center">{goals_for}</p>
              <p className="col-1 text-center">{goals_against}</p>
              <p className="col-1 text-center">{goal_differential}</p>
              <p className="col-1 text-center">{group_points}</p>
            </div>
          );
        })}
      </div>
    );
  });
  return <>{renderGroups}</>;
};

export default TeamsTables;
