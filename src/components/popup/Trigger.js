import React from "react";
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn btn-primary center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;
