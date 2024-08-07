import React from "react";

function SingleActivity({group, text, click}) {
  return (
    <label className="sidebar-label-container">
      <input  onChange={(e)=>click(e.target.value)} type="radio" name={group} value={text}></input>
      <span className="checkmark"></span>
      {text}
    </label>
  );
}

export default SingleActivity;
