import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import clsx from "clsx";

const ListItem = ({ item }) => {
  const { id, home_team, away_team, venue, location, winner, datetime } = item;
  const isPentalties = home_team.penalties > 0 || away_team.penalties > 0;

  const time = dayjs(datetime).format("HH:mm");
  const date = dayjs(datetime).format("DD.MMM");
  return (
    <div className="bg-primary py-3 my-2">
      <Link to={`/match/${id}`}>
        <div className="row">
          <div className="col-1 text-center text-white">{time}</div>
          <div className="col-1 text-white">{date}</div>
          <div className="col-2 text-center text-white">
            {isPentalties && (
              <span className="me-1">{"(" + home_team.penalties + ")"}</span>
            )}
            <span>{home_team.goals}</span>
            <span> : </span>
            <span>{away_team.goals}</span>
            {isPentalties && (
              <span className="ms-1">{"(" + away_team.penalties + ")"}</span>
            )}
          </div>
          <div className="col-3 text-white">
            <span
              className={clsx(winner === home_team.name ? "text-danger" : null)}
            >
              {home_team.name}
            </span>
            <span> - </span>
            <span
              className={clsx(winner === away_team.name ? "text-danger" : null)}
            >
              {away_team.name}
            </span>
          </div>
          <div className="col-3 text-white">{venue}</div>
          <div className="col-2 text-white">{location}</div>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
