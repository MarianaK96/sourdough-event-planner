import { MenuBar } from "components/molecules";
import { Form } from "components/organisms";
import React, { useEffect, useState } from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [gapi, setGapi] = useState<any>();
  const CLIENT_ID =
    "22523177138-96gmm07is48cqongebtd00l4cetah3sp.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDdtMKHh8JWzqfFHT3nDLZzCmOxNZXycTM";
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPES = "https://www.googleapis.com/auth/calendar";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setGapi(window.gapi);
    }
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const handleClientLoad = () => {
    window.onload = function () {
      gapi.load("client:auth2", intializeGapiClient);
    };
  };
  async function intializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    });
  }

  useEffect(() => {
    handleClientLoad();
    console.log(" gapi : ", gapi);
  }, [gapi]);
  return (
    <>
      <button id="my-signin2" onClick={() => handleAuthClick()}>
        sign in{" "}
      </button>
      <Form />
    </>
  );
};

export default Home;
