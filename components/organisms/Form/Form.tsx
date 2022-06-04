import { FirstStep, GenericStep } from "components/molecules";
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { createEvents } from "../../../utils/createEvent";
// import { events } from "../../../data/sourdoughEvents";
import {
  componentArrayStore,
  addEventToState,
  formatEvents,
} from "data/componentStore";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { addStep, componentArray } = componentArrayStore();
  const { setCalendarEvent, calendarEvent } = addEventToState();
  const { formatEvent, formatRecurringEvents, events } = formatEvents();

  const [formArray, setFormArray] = useState<any>([
    <FirstStep
      updateEventForm={setCalendarEvent}
      saveCurrEvent={formatEvent}
      calendarEvent={calendarEvent}
      key={0}
    />,
    <GenericStep
      updateEventForm={setCalendarEvent}
      saveCurrEvent={formatEvent}
      calendarEvent={calendarEvent}
      key={1}
    />,
  ]);

  useEffect(() => {
    addStep(formArray);
    console.log("adding steps");
  }, []);

  //adding the steps in the useeffect above, duplicates them

  return <>{componentArray.map((item: JSX.Element) => item)}</>;
};

export default Home;
