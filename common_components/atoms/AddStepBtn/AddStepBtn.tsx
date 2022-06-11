import React from "react";
import { Button } from "./AddStepBtn.styles";
import { MdAdd } from "react-icons/md";

interface AddStepBtnProps {
  text: string;
  onClick: () => void;
  isOpen: boolean;
}

const AddStepBtn: React.FC<AddStepBtnProps> = ({ text, onClick, isOpen }) => {
  return (
    <>
      <Button onClick={onClick} isOpen={isOpen}>
        <MdAdd size={25} />
        {text}
      </Button>
    </>
  );
};

export default AddStepBtn;
