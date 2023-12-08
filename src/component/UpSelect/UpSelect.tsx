import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface UpSelectProps {
  options: OptionsProps[];
  id?: string;
  multiple?: boolean;
  selectedValues: any;
  handleChange: (event: SelectChangeEvent | any) => void;
}

interface OptionsProps {
  value: string;
  label: string;
}

const UpSelect: React.FC<UpSelectProps> = ({
  options,
  id,
  multiple,
  selectedValues,
  handleChange,
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <h1>Select</h1>
      <FormControl fullWidth>
        <InputLabel id={id}>{id}</InputLabel>
        <Select
          labelId={id}
          id={id}
          value={selectedValues}
          label={id}
          onChange={handleChange}
          multiple={multiple}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default UpSelect;
