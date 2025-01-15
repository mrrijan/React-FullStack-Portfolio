import React from "react";

function SkillList({ icon, skill }) {
  return (
    <span>
      <img src={icon} alt="Check Mark Icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
