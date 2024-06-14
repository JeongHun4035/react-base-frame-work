import { ButtonTextCompoundInput } from "@fullcalendar/core/index.js";

export interface IHeaderToolBar {
  left?: string;
  center?: string;
  right?: string;
}
export interface IFooterToolBar {
  left?: string;
  center?: string;
  right?: string;
}

export interface ISchedule {
  title: string;
  start: string;
  end?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

export interface ICalendarProps {
  height?: string;
  defaultMode?: string;
  useDayGrid?: boolean;
  useTimeGrid?: boolean;
  useInteraction?: boolean;
  headerToolbar?: IHeaderToolBar;
  footerToolbar?: IFooterToolBar;
  buttonText?: ButtonTextCompoundInput;
  eventBackgroundColor?: string;
  eventBorderColor?: string;
  eventDuplicateColor?: string;
  eventSchedule?: ISchedule[];
}
