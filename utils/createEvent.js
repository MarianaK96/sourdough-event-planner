// export const createEvents = async (calendarEvent) => {
//   try {
//     const res = await ApiCalendar.createEvent(calendarEvent);
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
