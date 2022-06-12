// export const createEvents = async (event) => {
//   try {
//     const res = await apiCalendar.createEvent(event);
//     window.open(event.htmlLink);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const createEvents = (event) => {
  const request = gapi.client.calendar.events.insert({
    calendarId: "primary",
    resource: event,
  });

  request.execute((event) => {
    console.log(event);
    // window.open(event.htmlLink);
  });
};
