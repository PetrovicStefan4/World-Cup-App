import React from "react";

const Team = (props) => {
  const { teamLineup } = props;

  return (
    <>
      <div className="border-white border-bottom mb-3 ps-3">
        <h4 className="text-danger mb-3 text-uppercase">Starting Eleven:</h4>
        {teamLineup?.starting_eleven?.map((item, index) => {
          const { name, shirt_number } = item;
          return (
            <p key={index}>
              <span className="w-2 d-inline-block">{shirt_number}</span>
              <span>{name}</span>
            </p>
          );
        })}
      </div>
      <div className="ps-3">
        <h4 className="text-danger mb-3 text-uppercase">Substitutes:</h4>
        {teamLineup?.substitutes?.map((item, index) => {
          const { name, shirt_number } = item;
          return (
            <p key={index}>
              <span className="me-2 w-2 d-inline-block">{shirt_number}</span>
              <span>{name}</span>
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Team;
