import React from "react";

const TableLegend = () => {
  return (
    <>
      <h4 className="mb-3 fw-bold">Table Legend:</h4>
      <p>
        <span className="fw-bold">AG</span>
        <span> - </span>
        <span>All goals</span>
      </p>
      <p>
        <span className="fw-bold">W</span>
        <span> - </span>
        <span>Wins</span>
      </p>
      <p>
        <span className="fw-bold">D</span>
        <span> - </span>
        <span>Draws</span>
      </p>
      <p>
        <span className="fw-bold">L</span>
        <span> - </span>
        <span>Losses</span>
      </p>
      <p>
        <span className="fw-bold">G</span>
        <span> - </span>
        <span>Goals scored</span>
      </p>
      <p>
        <span className="fw-bold">G</span>
        <span> - </span>
        <span>Goals into their net</span>
      </p>
      <p>
        <span className="fw-bold">G</span>
        <span> - </span>
        <span>Goals differential</span>
      </p>
      <p>
        <span className="fw-bold">Total</span>
        <span> - </span>
        <span>Total points</span>
      </p>
    </>
  );
};

export default TableLegend;
