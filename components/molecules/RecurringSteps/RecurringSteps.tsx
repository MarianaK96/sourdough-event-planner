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
} from "./RecurringSteps.styles";
import React, { useEffect } from "react";
import {
  componentArrayStore,
  addEventToState,
  formatEvents,
} from "data/componentStore";

interface RecurringStepsProps {
  calendarEvent: any;
  updateEventForm: any;
  saveCurrEvent: any;
}

const RecurringSteps: React.FC<RecurringStepsProps> = ({
  // calendarEvent,
  updateEventForm,
  saveCurrEvent,
}) => {
  const { setCalendarEvent, calendarEvent } = addEventToState();
  useEffect(() => {
    console.log(" calendarEvent in recurring steps form : ", calendarEvent);
  }, [calendarEvent]);

  const addListOfEvents = (calendarEvent: {
    startDate?: string;
    startTime: any;
    endTime?: string;
    eventName?: string;
    eventDesc?: string;
    interval: any;
    recurrence: any;
  }) => {
    const { startTime, recurrence, interval } = calendarEvent;
    console.log("calendarEvent in list of events : ", calendarEvent);
    let times = [];

    for (let x = 0; x < recurrence; x++) {
      const date = new Date(startTime);
      const endTime = new Date(startTime);
      const startHour = date.getHours();
      const startMins = date.getMinutes();
      const hourInterval = interval.split(":")[0] * 60;
      const minInterval = interval.split(":")[1];
      const int = hourInterval + minInterval;
      endTime.setHours(0, int * (recurrence + 1), 0);
      date.setHours(startHour, startMins, 0);
      if (x === 0) {
        times.push({
          ...calendarEvent,
          startTime: date.toISOString(),
          eventName: `Stretch & Fold - ${x++}`,
        });
      } else {
        date.setHours(startHour, int * x, 0);
        times.push({
          ...calendarEvent,
          eventName: `Stretch & Fold - ${x++}`,
          startTime: date.toISOString(),
          endTime: endTime.toISOString(),
        });
      }
    }
    return times;
  };
  return (
    <>
      <Wrapper>
        <TimeInputWrapper>
          <Container>
            <LabelInput>
              <InputLabel
                htmlFor="recurrence"
                text="How many times do you need to stretch and fold?"
              />
              <TextInput id="recurrence" onChange={(e) => updateEventForm(e)} />
            </LabelInput>
          </Container>
          <Container>
            <InputLabel
              htmlFor="interval"
              text="How long between each stretch?"
            />
            <TimeInput id="interval" onChange={(e) => updateEventForm(e)} />
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
          onClick={() => saveCurrEvent(addListOfEvents(calendarEvent))}
        />
      </Wrapper>
    </>
  );
};

export default RecurringSteps;
