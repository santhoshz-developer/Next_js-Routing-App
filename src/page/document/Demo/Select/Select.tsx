import UpSelect from "@/component/UpSelect/UpSelect";
import React, { useState } from "react";

const Select: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<string | string[]>([]);
  
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValues(event.target.value as string | string[]);
  };

  const options = [
    { value: "10", label: "Ten" },
    { value: "20", label: "Twenty" },
    { value: "30", label: "Thirty" },
  ];

  return (
    <div>
      <UpSelect
        options={options}
        id="Number"
        selectedValues={selectedValues}
        handleChange={handleSelectChange}
      />
    </div>
  );
};

export default Select;
