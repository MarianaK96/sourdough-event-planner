import React, { useState } from "react";
import { genericEndTime } from "./genericEndTime";
import { saveEvent } from "./saveEvent";
import { events } from "../data/sourdoughEvents";
import { IFormattedEvent } from "./../interfaces";

export const recurringEvent = (times: []) => {
  times.map((time) => {
    const foldEvent = saveEvent(time);
    events.push(foldEvent);
  });
};
