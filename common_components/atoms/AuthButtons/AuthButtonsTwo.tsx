/* global gapi */
import React, { useEffect, useState } from "react";
import { AuthButton } from "./AuthButtons.styles";
import { useRouter } from "next/router";
import GoogleIcon from "public/GoogleIcon";

interface AuthButtonsTwoProps {
  type: string;
}

const AuthButtonsTwo: React.FC<AuthButtonsTwoProps> = ({ type }) => {
  const router = useRouter();
  const [gapiState, setGapiState] = useState<typeof gapi>();

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

  const handleItemClick = (type: string) => {
    if (type === "signIn") {
      gapiState !== undefined && gapiState.auth2.getAuthInstance().signIn();
      router.push("./home");
    } else {
      gapiState !== undefined && gapiState.auth2.getAuthInstance().signOut();
    }
  };

  useEffect(() => {
    const gapi = window.gapi;
    setGapiState(gapi);
  }, []);

  useEffect(() => {
    console.log(" gapiState : ", gapiState);
  }, [gapiState]);

  const handleClientLoad = () => {
    gapiState !== undefined && gapiState.load("client:auth2", initClient);
  };

  const initClient = () => {
    gapiState !== undefined &&
      gapiState.client.init({
        config,
      });
  };

  useEffect(() => {
    handleClientLoad();
  }, []);

  return (
    <>
      <div className="g-signin2"></div>
      <AuthButton onClick={() => handleItemClick(type)}>
        <GoogleIcon />
        {type === "signIn" ? "Sign in" : "Sign out"} with Google
      </AuthButton>
    </>
  );
};

export default AuthButtonsTwo;
