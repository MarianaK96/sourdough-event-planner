import React, { SyntheticEvent } from "react";
import ApiCalendar from "react-google-calendar-api";
import {
  Container,
  Title,
  PinkBackground,
  Background,
  LoginContainer,
  Icon,
} from "./Authorisation.styles";
import GoogleIcon from "public/GoogleIcon";
import BaguetteBackground from "public/BaguetteBackground";
import { AuthButtons } from "common_components/atoms";
import AuthButtonsTwo from "common_components/atoms/AuthButtons/AuthButtonsTwo";

interface AuthorisationProps {}

const Authorisation: React.FC<AuthorisationProps> = ({}) => {
  return (
    <>
      <Background>
        <BaguetteBackground />
        <BaguetteBackground />
        <BaguetteBackground />
        <BaguetteBackground />
      </Background>
      <Container>
        <LoginContainer>
          <Icon>&#129366;</Icon>
          <AuthButtonsTwo type="signIn" />
        </LoginContainer>
      </Container>
    </>
  );
};

export default Authorisation;
