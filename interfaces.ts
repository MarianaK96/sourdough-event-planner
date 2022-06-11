export interface IFormattedEvent {
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
}

export interface ICalendarEvent {
  startDate: string;
  startTime: string;
  endTime: string;
  eventName: string;
  eventDesc: string;
  interval: number;
  recurrence: number;
}
