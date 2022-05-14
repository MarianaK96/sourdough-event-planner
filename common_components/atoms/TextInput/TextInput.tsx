import React from "react";
import { Input } from "./TextInput.styles";

interface TextInputProps {
  id: string;
  onChange: (e: any) => void;
}

const TextInput: React.FC<TextInputProps> = ({ id, onChange }) => {
  return (
    <>
      <Input type="text" id={id} onChange={onChange} />
    </>
  );
};

export default TextInput;
