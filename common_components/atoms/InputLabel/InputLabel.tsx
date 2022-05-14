import React from "react";
import { Label } from "./InputLabel.styles";

interface InputLabelProps {
  htmlFor: string;
  text: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ htmlFor, text }) => {
  return (
    <>
      <Label htmlFor={htmlFor}>{text}</Label>
    </>
  );
};

export default InputLabel;
