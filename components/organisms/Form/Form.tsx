import { FirstStep, GenericStep } from "components/molecules";
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { createEvents } from "../../../utils/createEvent";
// import { events } from "../../../data/sourdoughEvents";
import {
  componentArrayStore,
  addEventToState,
  formatEvents,
} from "data/componentStore";

interface FormProps {}

const Form: React.FC<FormProps> = ({}) => {
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
  }, []);

  //adding the steps in the useeffect above, duplicates them

  return <>{componentArray.map((item: any) => item)}</>;
};

export default Form;
