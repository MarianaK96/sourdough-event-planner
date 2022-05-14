import React from "react";
import { Input } from "./TimeInput.styles";

interface DateTimeProps {
  id: string;
  onChange: (e: any) => void;
}

const DateTime: React.FC<DateTimeProps> = ({ id, onChange }) => {
  return (
    <>
      <Input type="time" id={id} onChange={onChange} />
    </>
  );
};

export default DateTime;
