import React from "react";
import { MenuItem, FormControl } from '@material-ui/core';

import OplTypography from "../../shared/components/OplTypography";
import OplSelect from "../../shared/components/OplSelect";

const DropDownSelectionFilter = (props) => (
  <FormControl variant="outlined">
    <OplSelect
      minWidth="20rem"
      rounded={6.5}
      value={props.selectedFilter}
      onChange={(event) => props.handleFilterSelect({ type: 'mobiusFilterChange', content: event.target.value })}
    >
      {props.items.map((item, i) => (
        <MenuItem value={item} key={i}>
          <OplTypography variant="button" fontSize="0.75rem">
            {item === "Entire Process Model" ? "" : "#"}{item}
          </OplTypography>
        </MenuItem>
      ))}
    </OplSelect>
  </FormControl>
);

export default DropDownSelectionFilter;
