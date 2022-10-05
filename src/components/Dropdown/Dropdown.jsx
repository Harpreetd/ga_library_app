import React from "react";

const Dropdown = () => {
  return (
    <div>
      <select name="courseLine" id="courseLine">
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
