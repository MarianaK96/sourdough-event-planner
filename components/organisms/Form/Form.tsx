import { FirstStep, GenericStep } from "components/molecules";
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { createEvents } from "../../../utils/createEvent";
import { setDuration } from "../../../utils/setDuration";
import { saveEvent } from "../../../utils/saveEvent";
import { events } from "../../../data/sourdoughEvents";
import { recurringEvent } from "../../../utils/multipleSteps";
interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [calendarEvent, setCalendarEvent] = useState({
    startDate: "00-00-0000",
    startTime: "00:00",
    endTime: "00:00",
    eventName: "",
    specifiedEventName: "",
    eventDesc: "",
    interval: 0,
    recurrence: 0,
  });
  const [formArray, setFormArray] = useState<Element[]>();

  const updateEventForm = (e: { target: { id: any; value: any } }) => {
    setCalendarEvent({
      ...calendarEvent,
      [e.target.id]: e.target.value,
    });
  };

  const saveCurrEvent = (event: any) => {
    events.push(saveEvent(event));
    setCalendarEvent({
      ...calendarEvent,
      startTime: setDuration(event),
      endTime: "",
      eventName: "",
      eventDesc: "",
    });
  };

  const saveRecurringEvent = (event: any) => {
    recurringEvent(event);
    setCalendarEvent({
      ...calendarEvent,
      startTime: setDuration(event[event.length - 1]),
      endTime: "",
      eventName: "",
      eventDesc: "",
    });
  };
  const createAllEvents = async () => {
    for (let index = 0; index < events.length; index++) {
      const event = events[index];
      await createEvents(event);
    }
  };

  useEffect(() => {
    setFormArray(
      <GenericStep
        updateEventForm={updateEventForm}
        saveCurrEvent={saveCurrEvent}
        calendarEvent={calendarEvent}
        setCalendarEvent={setCalendarEvent}
        key={1}
      />
    );
    // formArray.push(
    // <GenericStep
    //   updateEventForm={updateEventForm}
    //   saveCurrEvent={saveCurrEvent}
    //   calendarEvent={calendarEvent}
    //   setCalendarEvent={setCalendarEvent}
    //   key={1}
    // />
  }, []);

  console.log(" formArray : ", formArray);

  return (
    <>
      {/* <FirstStep
        updateEventForm={updateEventForm}
        saveCurrEvent={saveCurrEvent}
        calendarEvent={calendarEvent}
        setCalendarEvent={setCalendarEvent}
        key={0}
      /> */}
      {formArray.map((item) => item)}
    </>
  );
};

export default Home;
