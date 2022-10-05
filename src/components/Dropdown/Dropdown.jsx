import React from "react";
import dropdownStyle from "./Dropdown.module.css";
const Dropdown = () => {
  return (
    <div>
      <select
        name="courseLine"
        id="courseLine"
        className={dropdownStyle["dropdown-menu"]}
      >
        <option value="null">Select Course</option>
        <option value="frontend">Front end</option>
        <option value="backend">Back end</option>
        <option value="salg">Salg, ledelse og markedsføring</option>
        <option value="digital">Digital markedsføring</option>
        <option value="prosjekt">Prosjekt Ledelse</option>
      </select>
    </div>
  );
};

export default Dropdown;
