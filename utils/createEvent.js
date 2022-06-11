import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId:
    "22523177138-96gmm07is48cqongebtd00l4cetah3sp.apps.googleusercontent.com",
  apiKey: "AIzaSyDdtMKHh8JWzqfFHT3nDLZzCmOxNZXycTM",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(process.env.config);

export const createEvents = async (event) => {
  try {
    const res = await apiCalendar.createEvent(event);
    window.open(event.htmlLink);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// export const createEvents = (event) => {
//   const request = gapi.client.calendar.events.insert({
//     calendarId: "primary",
//     resource: event,
//   });

//   request.execute((event) => {
//     console.log(event);
//     // window.open(event.htmlLink);
//   });
// };
