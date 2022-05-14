import { MenuBar } from "components/molecules";
import MobileMenu from "components/molecules/MobileMenu";
import React, { useState } from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <MobileMenu isOpen={isOpen} />
    </>
  );
};

export default Footer;
