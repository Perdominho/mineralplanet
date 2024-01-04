import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/logo.png" alt="eve" width={70} height={70}/>
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
