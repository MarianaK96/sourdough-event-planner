import React from "react";
import { Button } from "./AddStepBtn.styles";
import { MdAdd } from "react-icons/md";

interface AddStepBtnProps {
  text: string;
  onClick: () => void;
}

const AddStepBtn: React.FC<AddStepBtnProps> = ({ text, onClick }) => {
  return (
    <>
      <Button onClick={onClick}>
        <MdAdd size={25} />
        {text}
      </Button>
    </>
  );
};

export default AddStepBtn;
