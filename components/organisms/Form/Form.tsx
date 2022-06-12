import { FirstStep, GenericStep } from "components/molecules";
import React, { useState, useEffect } from "react";
import { createEvents } from "../../../utils/createEvent";
import {
  componentArrayStore,
  addEventToState,
  formatEvents,
} from "data/componentStore";
import { ButtonContainer } from "./Form.styles";
import { AuthButtons, SaveButton } from "common_components/atoms";

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

  const createAllEvents = async () => {
    for (let index = 0; index < events.length; index++) {
      const event = events[index];
      await createEvents(event);
    }
  };

  useEffect(() => {
    addStep(formArray);
  }, []);

  return (
    <>
      {/* <ButtonContainer>
        <AuthButtons type="signOut" />
      </ButtonContainer> */}
      {componentArray.map((item: any) => item)}
      <SaveButton onClick={createAllEvents} text={"Add events"} />
    </>
  );
};

export default Form;
