import React from "react";
import { Container } from "./AuthorisationBackground.styles";

interface AuthorisationBackgroundProps {}

const AuthorisationBackground: React.FC<
  AuthorisationBackgroundProps
> = ({}) => {
  const renderIcon = () => {
    for (let i = 0; i < 36; i++) {
      return <p>&#129366;</p>;
    }
  };
  return (
    <>
      <Container>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
        <p>&#129366;</p>
      </Container>
    </>
  );
};

export default AuthorisationBackground;
