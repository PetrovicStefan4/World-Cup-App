import React from "react";
import flags from "../../utils/flags";

const TeamsCountryFlag = (props) => {
  const { team } = props;

  const teamCode = flags.filter((item) => item.country === team?.name);
  return (
    <div className="d-flex justify-content-center align-items-center mb-2">
      {teamCode.length === 1 && (
        <img
          src={`https://flagcdn.com/192x144/${teamCode?.[0]?.code}.png`}
          width="144"
          height="108"
          alt="Qatar"
        />
      )}
    </div>
  );
};

export default TeamsCountryFlag;
