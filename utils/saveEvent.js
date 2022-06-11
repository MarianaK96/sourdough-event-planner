import { genericEndTime } from "./genericEndTime";
import { setDuration } from "./setDuration";
import { Duration, DateTime, plus } from "luxon";

export const saveEvent = (calendarEvent) => {
  const { startTime, eventName, eventDesc, recurrence, count } = calendarEvent;
  //sometimes the above changes '6:30' to '6:00'
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

  const startDate = new Date(checkFormat(startTime));
  const hour = startDate.getHours();
  const min = startDate.getMinutes();
  const endDate = new Date(checkFormat(startTime)).setHours(hour, min + 15, 0);
  const event = {
    summary: eventName,
    description: eventDesc,
    start: {
      dateTime: startDate.toISOString(),
      timeZone: "Europe/London",
    },
    end: {
      dateTime: new Date(endDate).toISOString(),
      timeZone: "Europe/London",
    },
  };

  console.log(" event : ", event);
  return event;
};
