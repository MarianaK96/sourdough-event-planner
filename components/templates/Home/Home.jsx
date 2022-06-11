import { MenuBar } from "components/molecules";
import { Form } from "components/organisms";
import React, { useEffect, useState } from "react";

const Home = ({}) => {
  const CLIENT_ID =
    "22523177138-96gmm07is48cqongebtd00l4cetah3sp.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDdtMKHh8JWzqfFHT3nDLZzCmOxNZXycTM";
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPES = "https://www.googleapis.com/auth/calendar";

  const gapi = window.gapi;

  const handleClientLoad = () => {
    gapi.load("client:auth2", initClient);
  };

  const handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
  };
  const handleSignoutClick = (event) => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const initClient = () => {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function () {},
        function (error) {
          appendPre(JSON.stringify(error, null, 2));
        }
      );
  };

  function addEvent() {
    const event = {
      summary: "Awesome Event!",
      location: "800 Howard St., San Francisco, CA 94103",
      description: "Really great refreshments",
      start: {
        dateTime: "2022-04-01T09:00:00-07:00",
        timeZone: "Europe/London",
      },
      end: {
        dateTime: "2022-04-05T09:00:00-07:00",
        timeZone: "Europe/London",
      },
      recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
      attendees: [
        { email: "lpage@example.com" },
        { email: "sbrin@example.com" },
      ],
    };
    const request = gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    request.execute((event) => {
      console.log(event);
      window.open(event.htmlLink);
    });
  }

  useEffect(() => {
    handleClientLoad();
  }, []);

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
