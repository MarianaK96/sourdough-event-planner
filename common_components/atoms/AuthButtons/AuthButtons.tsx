import React, { SyntheticEvent } from "react";
import ApiCalendar from "react-google-calendar-api";
import { useRouter } from "next/router";
import GoogleIcon from "public/GoogleIcon";
import { AuthButton } from "./AuthButtons.styles";

interface AuthButtonsProps {
  type: string;
}

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

const config = {
  clientId: clientId,
  apiKey: apiKey,
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

const AuthButtons: React.FC<AuthButtonsProps> = ({ type }) => {
  const router = useRouter();
  const handleItemClick = (event: SyntheticEvent<any>, type: string) => {
    if (type === "signIn") {
      apiCalendar.handleAuthClick();
      console.log(
        " apiCalendar.handleAuthClick() : ",
        apiCalendar.handleAuthClick()
      );
      router.push("./home");
    } else {
      apiCalendar.handleSignoutClick();
      console.log(
        " apiCalendar.handleSignoutClick() : ",
        apiCalendar.handleSignoutClick()
      );
    }
  };
  return (
    <>
      <AuthButton
        onClick={(e: React.SyntheticEvent<any, Event>) =>
          handleItemClick(e, type)
        }
      >
        <GoogleIcon />
        {type === "signIn" ? "Sign in" : "Sign out"} with Google
      </AuthButton>
    </>
  );
};

export default AuthButtons;
