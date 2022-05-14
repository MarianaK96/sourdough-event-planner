import React from "react";
import { Button } from "./SaveButton.styles";

interface TextInputProps {
  text: string;
  onClick: () => void;
}

const TextInput: React.FC<TextInputProps> = ({ text, onClick }) => {
  return (
    <>
      <Button type="submit" onClick={onClick}>
        {text}
      </Button>
    </>
  );
};

export default TextInput;
