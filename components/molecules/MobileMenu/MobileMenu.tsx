import { AddStepBtn } from "common_components/atoms";
import React from "react";
import { Wrapper, Container } from "./MobileMenu.styles";
import {
  GenericStep,
  RecurringSteps,
  SpecificStep,
} from "components/molecules";
import {
  componentArrayStore,
  addEventToState,
  formatEvents,
} from "data/componentStore";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  const { addStep, componentArray } = componentArrayStore();
  const { setCalendarEvent, calendarEvent } = addEventToState();
  const { formatEvent, formatRecurringEvents, events } = formatEvents();
  return (
    <>
      <Wrapper isOpen={isOpen}>
        <Container>
          <AddStepBtn
            isOpen={isOpen}
            text="Generic Step"
            onClick={() =>
              addStep(
                <GenericStep
                  updateEventForm={setCalendarEvent}
                  saveCurrEvent={formatEvent}
                  calendarEvent={calendarEvent}
                  key={76}
                />
              )
            }
          />
          <AddStepBtn
            isOpen={isOpen}
            text="Levain"
            onClick={() =>
              addStep(
                <SpecificStep
                  stepName="Levain"
                  updateEventForm={setCalendarEvent}
                  saveCurrEvent={formatEvent}
                  calendarEvent={calendarEvent}
                  key={76}
                />
              )
            }
          />
          <AddStepBtn
            isOpen={isOpen}
            text="Stretch & Fold"
            onClick={() =>
              addStep(
                <RecurringSteps
                  updateEventForm={setCalendarEvent}
                  saveCurrEvent={formatRecurringEvents}
                  calendarEvent={calendarEvent}
                  key={76}
                />
              )
            }
          />
          <AddStepBtn
            isOpen={isOpen}
            text="Pre-shape"
            onClick={() =>
              addStep(
                <SpecificStep
                  stepName="Pre-shape"
                  updateEventForm={setCalendarEvent}
                  saveCurrEvent={formatEvent}
                  calendarEvent={calendarEvent}
                  key={76}
                />
              )
            }
          />
          <AddStepBtn
            isOpen={isOpen}
            text="Bulk Fermentation"
            onClick={() =>
              addStep(
                <SpecificStep
                  stepName="Bulk Fermentation"
                  updateEventForm={setCalendarEvent}
                  saveCurrEvent={formatEvent}
                  calendarEvent={calendarEvent}
                  key={76}
                />
              )
            }
          />
          <AddStepBtn
            isOpen={isOpen}
            text="Bake"
            onClick={() =>
              addStep(
                <SpecificStep
                  stepName="Bake"
                  updateEventForm={setCalendarEvent}
                  saveCurrEvent={formatEvent}
                  calendarEvent={calendarEvent}
                  key={76}
                />
              )
            }
          />
        </Container>
      </Wrapper>
    </>
  );
};

export default MobileMenu;
