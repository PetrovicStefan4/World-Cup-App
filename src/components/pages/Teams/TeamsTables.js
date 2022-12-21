import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const TeamsTables = (props) => {
  const { groups } = props;

  const renderGroups = groups?.map((group, index) => {
    const { letter, teams } = group;
    return (
      <div key={`group-${letter}`} className="bg-primary mb-4">
        <h3 className="text-white px-2 px-lg-4 py-2 bg-primary border-bottom border-danger border-2 mb-0">
          <span className="me-3">Group</span>
          {letter}
        </h3>
        <div className="row px-2 px-lg-4 text-white border-bottom mb-2 py-2">
          <div className="col-1 fw-bold">#</div>
          <div className="col-4 col-lg-3 fw-bold">Team</div>
          <div className="col-1 text-center fw-bold">AG</div>
          <div className="col-1 text-center fw-bold">W</div>
          <div className="col-1 text-center fw-bold">D</div>
          <div className="col-1 text-center fw-bold">L</div>
          <div className="d-none d-lg-block col-lg-1 text-center fw-bold">
            G
          </div>
          <div className="d-none d-lg-block col-lg-1 text-center fw-bold">
            GA
          </div>
          <div className="col-1 text-center fw-bold">GD</div>
          <div className="col-2 col-lg-1 text-end text-lg-center fw-bold">
            T
          </div>
        </div>
        {teams?.map((team, index) => {
          const {
            name,
            country,
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
              className="row text-white px-2 px-lg-4"
            >
              <p className="col-1">{index + 1}</p>
              <div className="col-4 col-lg-3">
                <Link to={`/teams/${country}`}>
                  <span
                    className={clsx(
                      games_played > 3 ? "fw-bold text-success" : "text-white"
                    )}
                  >
                    {name}
                  </span>
                </Link>
              </div>
              <p className="col-1 text-center">{games_played}</p>
              <p className="col-1 text-center">{wins}</p>
              <p className="col-1 text-center">{draws}</p>
              <p className="col-1 text-center">{losses}</p>
              <p className="d-none d-lg-block col-lg-1 text-center">
                {goals_for}
              </p>
              <p className="d-none d-lg-block col-lg-1 text-center">
                {goals_against}
              </p>
              <p className="col-1 text-center">{goal_differential}</p>
              <p className="col-2 col-lg-1 text-end text-lg-center">
                {group_points}
              </p>
            </div>
          );
        })}
      </div>
    );
  });
  return <>{renderGroups}</>;
};

export default TeamsTables;
