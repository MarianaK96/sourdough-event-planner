import ApiCalendar from "react-google-calendar-api";

export const signIn = () => {
  ApiCalendar.handleAuthClick()
    .then(() => {
      console.log("sign in succesful!");
    })
    .catch((e) => {
      console.error(`sign in failed ${e}`);
    });
};
