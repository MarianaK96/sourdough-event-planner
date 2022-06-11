import { Duration, DateTime, plus } from "luxon";

export const setDuration = (time) => {
  const { startTime, endTime } = time;
  const checkFormat = (time) => {
    if (time.length < 7) {
      const hour = time.split(":")[0];
      const min = time.split(":")[1];

      const obj = DateTime.fromObject(
        {
          hour: hour,
          minute: min,
          second: 0,
        }
        // { zone: "GMT" }
      );
      const iso = new Date(obj);
      return iso;
    } else {
      return time;
    }
  };

  const checkDuration = (time) => {
    if (time.length < 7) {
      const hour = time.split(":")[0];
      const min = time.split(":")[1];

      const obj = DateTime.fromObject({
        hour: hour,
        minute: min,
        second: 0,
      });
      const iso = new Date(obj);
      return iso;
    } else {
      return time;
    }
  };

  const end = new Date(checkDuration(endTime));
  const hours = end.getHours();
  const mins = end.getMinutes();
  const start = new Date(checkFormat(startTime));
  // console.log(" startTime : ", startTime);
  start.setHours(start.getHours() + hours, start.getMinutes() + mins);
  return start.toISOString();
};
