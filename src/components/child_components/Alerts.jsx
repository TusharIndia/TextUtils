import React from "react";

export const Alerts = (props) => {
    const capatalize = (word) => {
        const text = word.toLowerCase();
        return word.charAt(0).toUpperCase() + text.slice(1);
    }
  return (
    props.alt && <div>
      <div className={`alert alert-${props.alt.type}`} role="alert">
       <strong>{capatalize(props.alt.type)}</strong> : {props.alt.msg}
      </div>
    </div>
  );
};
