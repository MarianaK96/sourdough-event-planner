import React, { useState } from "react";
import { genericEndTime } from "./genericEndTime";
import { saveEvent } from "./saveEvent";
import { events } from "../data/sourdoughEvents";

export const recurringEvent = (times) => {
  times.map((time) => {
    const foldEvent = saveEvent(time);
    events.push(foldEvent);
  });
};
