import React from "react";
import { Container, Icon } from "./MenuBar.styles";
import { MdRestaurantMenu } from "react-icons/md";

interface MenuBarProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const MenuBar: React.FC<MenuBarProps> = ({ setIsOpen, isOpen }) => {
  console.log(" isOpen : ", isOpen);
  return (
    <>
      <Container>
        <Icon onClick={() => setIsOpen(!isOpen)}>
          <MdRestaurantMenu size={25} />
        </Icon>
      </Container>
    </>
  );
};

export default MenuBar;
