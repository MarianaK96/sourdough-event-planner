import create from "zustand";
import { createEvents } from "utils/createEvent";
import { setDuration } from "utils/setDuration";
import { saveEvent } from "utils/saveEvent";
import { events } from "data/sourdoughEvents";
import { recurringEvent } from "utils/multipleSteps";
import { ICalendarEvent, IFormattedEvent } from "interfaces";

interface ComponentState {
  componentArray: (ICalendarEvent | JSX.Element)[];
  addStep: (component: JSX.Element) => void;
}

export const initialCalendarState = {
  startDate: "00-00-0000",
  startTime: "00:00",
  endTime: "00:00",
  eventName: "",
  eventDesc: "",
  interval: 0,
  recurrence: 0,
};

interface EventState {
  calendarEvent: {
    startDate: string;
    startTime: string;
    endTime: string;
    eventName: string;
    eventDesc: string;
    interval: number;
    recurrence: number;
  };
  setCalendarEvent: (event: any) => void;
}

interface FormattingEvents {
  events: (void | Element | IFormattedEvent)[];
  formatEvent: (event: any) => void;
  formatRecurringEvents: (event: any) => void;
}

export const componentArrayStore = create<ComponentState>((set) => ({
  componentArray: [],
  addStep: (component) => {
    set((state) => {
      console.log(" state : ", state);
      return {
        ...state.componentArray,
        componentArray: [...state.componentArray, component],
      };
    });
  },
}));

export const addEventToState = create<EventState>((set) => ({
  calendarEvent: initialCalendarState,
  setCalendarEvent: (e: { target: { id: any; value: any } }) => {
    set((state) => {
      console.log(" state : ", state);
      return {
        calendarEvent: {
          ...state.calendarEvent,
          [e.target.id]: e.target.value,
        },
      };
    });
  },
}));

export const formatEvents = create<FormattingEvents>((set) => ({
  events: [...events],
  calendarEvent: initialCalendarState,
  formatEvent: (event: any) => {
    set((state) => ({
      ...events,
      events: [...state.events, saveEvent(event)],
      calendarEvent: {
        ...initialCalendarState,
        startTime: setDuration(event),
        endTime: "",
        eventName: "",
        eventDesc: "",
      },
    }));
  },

  formatRecurringEvents: (event: any) => {
    set((state) => ({
      ...events,
      events: [...state.events, recurringEvent(event)],
      calendarEvent: {
        ...initialCalendarState,
        startTime: setDuration(event[event.length - 1]),
        endTime: "",
        eventName: "",
        eventDesc: "",
      },
    }));
  },
}));
