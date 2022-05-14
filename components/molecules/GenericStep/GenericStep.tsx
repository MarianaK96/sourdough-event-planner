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
} from "./GenericStep.styles";
import React from "react";

interface FirstStepProps {
  calendarEvent: any;
  setCalendarEvent: any;
  updateEventForm: any;
  saveCurrEvent: any;
}

const FirstStep: React.FC<FirstStepProps> = ({
  calendarEvent,
  setCalendarEvent,
  updateEventForm,
  saveCurrEvent,
}) => {
  return (
    <>
      <Wrapper>
        <TimeInputWrapper>
          <Container>
            <LabelInput>
              <InputLabel
                htmlFor="eventName"
                text="What stage of the recipe is this?"
              />
              <TextInput id="eventName" onChange={(e) => updateEventForm(e)} />
            </LabelInput>
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
