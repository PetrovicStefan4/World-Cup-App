import React from "react";
import SoccerIcon from "../../Icons/SoccerIcon";
import YellowCardIcon from "../../Icons/YellowCardIcon";
import RedCardIcon from "../../Icons/RedCardIcon";
import PlayerOffIcon from "../../Icons/PlayerOffIcon";
import PlayerOnIcon from "../../Icons/PlayerOnIcon";

const TeamEvents = (props) => {
  const { teamEvents } = props;
  const bookedPlayers = [];

  const renderTeamEvents = teamEvents?.map((item) => {
    const { id, time, player, type_of_event, extra_info } = item;

    const formattedTime = formatTime(time);

    const extraInfoObject = JSON.parse(extra_info);

    if (type_of_event === "booking") {
      const isPlayerBookedBefore = bookedPlayers.filter(
        (item) => item === player
      );
      bookedPlayers.push(player);

      if (isPlayerBookedBefore.length === 0) {
        return (
          <p key={id} className="small">
            <span className="me-3 w-2 d-inline-block">{formattedTime}</span>
            <span className="d-inline-block w-1-5 me-3">
              {<YellowCardIcon />}
            </span>
            <span>{player}</span>
          </p>
        );
      }

      return (
        <p key={id} className="small">
          <span className="me-3 w-2 d-inline-block">{formattedTime}</span>
          <span className="d-inline-block w-1-5 me-3">{<RedCardIcon />}</span>
          <span>{player}</span>
        </p>
      );
    }
    if (type_of_event === "goal") {
      return (
        <p key={id} className="small">
          <span className="me-3 w-2 d-inline-block">{formattedTime}</span>
          <span className="d-inline-block w-1-5 me-3">
            <SoccerIcon />
          </span>
          <span>{player}</span>
        </p>
      );
    }

    if (type_of_event === "substitution") {
      let player_off = extraInfoObject?.player_off;
      let player_on = extraInfoObject?.player_on;

      return (
        <div key={id}>
          <p className="small">
            <span className="me-3 w-2 d-inline-block">{formattedTime}</span>
            <span className="d-inline-block w-1-5 me-3">
              <PlayerOnIcon />
            </span>
            <span>{player_on}</span>
          </p>
          <p className="small">
            <span className="me-3 w-2 d-inline-block">{formattedTime}</span>
            <span className="d-inline-block w-1-5 me-3">
              <PlayerOffIcon />
            </span>
            <span>{player_off}</span>
          </p>
        </div>
      );
    }
  });

  return <>{renderTeamEvents}</>;
};

const formatTime = (time) => {
  if (!time.includes("+")) {
    return time;
  }

  return time.slice(0, 2) + time.slice(3);
};

export default TeamEvents;
