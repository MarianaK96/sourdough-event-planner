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
} from "./SpecificStep.styles";
import React from "react";

interface GenericStepProps {
  calendarEvent: any;
  updateEventForm: any;
  saveCurrEvent: any;
  stepName: string;
}

const GenericStep: React.FC<GenericStepProps> = ({
  calendarEvent,
  updateEventForm,
  saveCurrEvent,
  stepName,
}) => {
  return (
    <>
      <Wrapper>
        <TimeInputWrapper>
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
          onClick={() =>
            saveCurrEvent({ eventName: stepName, ...calendarEvent })
          }
        />
      </Wrapper>
    </>
  );
};

export default GenericStep;
