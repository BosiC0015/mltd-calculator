import React from "react";


export default function FormInput(props) {
  const label = props.label;
  const value = props.value;
  const change = props.change


  return(
    <div className="form-input">
      <label className="form-input__label">{label}</label>
      <input
        className="form-input__input"
        placeholder="0"
        value={value}
        onChange={change}
      />
    </div>
  )
}