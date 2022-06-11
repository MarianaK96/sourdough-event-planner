import React, { SyntheticEvent } from "react";
import ApiCalendar from "react-google-calendar-api";
import {
  SignOutButton,
  Container,
  Title,
  SignInButton,
  PinkBackground,
} from "./Authorisation.styles";
import GoogleIcon from "public/GoogleIcon";

interface AuthorisationProps {}

const config = {
  clientId: process.env.CLIENT_ID,
  apiKey: process.env.API_KEY,
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

const Authorisation: React.FC<AuthorisationProps> = ({}) => {
  const handleItemClick = (event: SyntheticEvent<any>, name: string) => {
    if (name === "sign-in") {
      apiCalendar.handleAuthClick();
    } else if (name === "sign-out") {
      apiCalendar.handleSignoutClick();
    }
  };
  return (
    <>
      <Container>
        <SignInButton onClick={(e) => handleItemClick(e, "sign-in")}>
          <GoogleIcon />
          <p>Sign in with Google</p>
        </SignInButton>
        {/* <SignOutButton onClick={(e) => handleItemClick(e, "sign-out")}>
          Sign out
        </SignOutButton> */}
      </Container>
    </>
  );
};

export default Authorisation;
