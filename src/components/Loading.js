import React from "react";

const Loading = () => {
  return (
    <div className="h-min-100vh d-flex justify-content-center align-items-center">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
