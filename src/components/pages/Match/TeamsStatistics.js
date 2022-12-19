import React from "react";

const TeamsStatistics = (props) => {
  const { ht, at } = props;

  const allPasses = ht.num_passes + at.num_passes;

  const homeTeamPossesion = createPosessions(ht.num_passes, allPasses);
  const awayTeamPossesion = createPosessions(at.num_passes, allPasses);

  if (!ht.on_target || !at.on_target) {
    return <p>No currently available statistics </p>;
  }

  return (
    <>
      <p className="d-flex justify-content-between align-items-center border-bottom">
        <span>
          <span className="me-1">{homeTeamPossesion}</span>
          <span>%</span>
        </span>
        <span className="small">Possesion</span>
        <span>
          <span className="me-1">{awayTeamPossesion}</span>
          <span>%</span>
        </span>
      </p>
      <p className="d-flex justify-content-between align-items-center border-bottom">
        <span>{ht.on_target}</span>
        <span className="small">On Target</span>
        <span>{at.on_target}</span>
      </p>
      <p className="d-flex justify-content-between align-items-center border-bottom">
        <span>{ht.attempts_on_goal}</span>
        <span className="small">Attempts</span>
        <span>{at.attempts_on_goal}</span>
      </p>
      <p className="d-flex justify-content-between align-items-center border-bottom">
        <span>{ht.free_kicks}</span>
        <span className="small">Free kicks</span>
        <span>{at.free_kicks}</span>
      </p>
      <p className="d-flex justify-content-between align-items-center border-bottom">
        <span>{ht.corners}</span>
        <span className="small">Corners</span>
        <span>{at.corners}</span>
      </p>
      <p className="d-flex justify-content-between align-items-center border-bottom">
        <span>{ht.fouls_committed}</span>
        <span className="small">Fouls</span>
        <span>{at.fouls_committed}</span>
      </p>
      <p className="d-flex justify-content-between align-items-center border-bottom">
        <span>{ht.offsides}</span>
        <span className="small">Offsides</span>
        <span>{at.offsides}</span>
      </p>
      <p className="d-flex justify-content-between align-items-center border-bottom">
        <span>{ht.yellow_cards}</span>
        <span className="small">Yellow Cards</span>
        <span>{at.yellow_cards}</span>
      </p>
      <p className="d-flex justify-content-between align-items-center border-bottom">
        <span>{ht.red_cards}</span>
        <span className="small">Red Cards</span>
        <span>{at.red_cards}</span>
      </p>
      <p className="d-flex justify-content-between align-items-center border-bottom">
        <span>
          {ht.passes_completed}
          <span className="mx-1">/</span>
          {ht.num_passes}
        </span>
        <span className="small">Passes</span>
        <span>
          {at.passes_completed}
          <span className="mx-1">/</span>
          {at.num_passes}
        </span>
      </p>
    </>
  );
};

const createPosessions = (teamPasses, allPasses) => {
  const possesion = ((100 * teamPasses) / allPasses).toFixed();
  return possesion;
};

export default TeamsStatistics;
