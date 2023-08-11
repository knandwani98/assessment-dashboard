import React from "react";

const Tag = ({ tag, handleDeleteTag, id }) => {
  return (
    <div className="tag flex">
      {tag}
      <span onClick={() => handleDeleteTag(id)} className="icon btn">
        <img src="../assets/svg/plus.svg" alt="cross icon" />
      </span>
    </div>
  );
};

export default Tag;
