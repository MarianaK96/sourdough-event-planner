import React from "react";
import { Input } from "./DateTimeInput.styles";

interface DateTimeProps {
  id: string;
  onChange: (e: any) => void;
}

const DateTime: React.FC<DateTimeProps> = ({ id, onChange }) => {
  return (
    <>
      <Input type="datetime-local" id={id} onChange={onChange} />
    </>
  );
};

export default DateTime;
