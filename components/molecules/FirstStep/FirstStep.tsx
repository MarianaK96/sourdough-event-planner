import {
  InputLabel,
  SaveButton,
  TextInput,
  TimeInput,
} from "common_components/atoms";
import { DateTimeInput } from "common_components/atoms";
import {
  Container,
  Wrapper,
  TextInputWrapper,
  TimeInputWrapper,
  LabelInput,
} from "./FirstStep.styles";
import React, { useEffect } from "react";
import {
  componentArrayStore,
  addEventToState,
  formatEvents,
} from "data/componentStore";

interface FirstStepProps {
  calendarEvent: any;
  updateEventForm: any;
  saveCurrEvent: any;
}

const FirstStep: React.FC<FirstStepProps> = ({
  // calendarEvent,
  updateEventForm,
  saveCurrEvent,
}) => {
  const { setCalendarEvent, calendarEvent } = addEventToState();
  useEffect(() => {}, [calendarEvent]);
  return (
    <>
      <Wrapper>
        <TimeInputWrapper>
          <Container>
            <InputLabel
              htmlFor="startDate"
              text="When are you starting the recipe?"
            />
            <DateTimeInput
              id="startTime"
              onChange={(e) => updateEventForm(e)}
            />
          </Container>
          <Container>
            <InputLabel
              htmlFor="endTime"
              text="How long until the next step?"
            />
            <TimeInput id="endTime" onChange={(e) => updateEventForm(e)} />
          </Container>
        </TimeInputWrapper>

        <TextInputWrapper>
          <LabelInput>
            <InputLabel htmlFor="eventName" text="What will you be doing?" />
            <TextInput id="eventName" onChange={(e) => updateEventForm(e)} />
          </LabelInput>
          <LabelInput>
            <InputLabel htmlFor="eventDesc" text="Add some more notes" />
            <TextInput id="eventDesc" onChange={(e) => updateEventForm(e)} />
          </LabelInput>
        </TextInputWrapper>
        <SaveButton
          text="Save 🥖 event"
          onClick={() => saveCurrEvent(calendarEvent)}
        />
      </Wrapper>
    </>
  );
};

export default FirstStep;
