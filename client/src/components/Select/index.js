import React from "react";

function SelectQty(props) {
  console.log(props);
  let qty = 1;
  return (
    <div className="form-group">
      <label for="sel1">Quantity:</label>
      <select
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
        id="qty"
      >
        {Array.from(new Array(5), (v, i) => (
          <option key={i} value={qty + i}>
            {qty + i}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectQty;
