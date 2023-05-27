import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownButton = ({ handleRemote, handleOnside }) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          filter
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleRemote}>Remote</Dropdown.Item>
          <Dropdown.Item onClick={handleOnside}>Onside action</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownButton;
