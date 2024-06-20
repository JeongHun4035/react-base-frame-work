import { ButtonTextCompoundInput } from "@fullcalendar/core/index.js";
import {
  PluginDef,
  DateSelectArg,
  EventDropArg,
  EventAddArg,
  EventRemoveArg,
  EventApi,
  EventClickArg,
  EventHoveringArg,
} from "@fullcalendar/core";

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

interface CustomButtonInput {
  text: string;
  click: () => void;
}
export interface ICustomButton {
  [name: string]: CustomButtonInput;
}

export interface ICalendarProps {
  plugins: PluginDef[];
  height?: string;
  defaultMode?: string;
  useDayGrid?: boolean;
  useTimeGrid?: boolean;
  useInteraction?: boolean;
  headerToolbar?: IHeaderToolBar;
  footerToolbar?: IFooterToolBar;
  multiMonthMaxColumns?: number;
  buttonText?: ButtonTextCompoundInput;
  eventBackgroundColor?: string;
  eventBorderColor?: string;
  eventDuplicateColor?: string;
  eventSchedule?: ISchedule[];
  customButtons?: ICustomButton;
  editable?: boolean;
  selectable?: boolean;
  selectMirror?: boolean;
  weekends?: boolean; // 주말 표시 여부
  dayMaxEvents?: boolean; // 하루에 표시 될 최대 이벤트 수 true = 셀의 높이
  navLinks?: boolean; // 날짜 클릭 -> 일일 스케쥴 확인
  navLinkHint?: string;
  changeDetect?: (events: EventApi[]) => void;
  useSelect?: (selectedCell: DateSelectArg) => void; // 날짜가 선택 될 때
  useAdd?: (added: EventAddArg) => void;
  useDrop?: (dropped: EventDropArg) => void;
  useRemove?: (removed: EventRemoveArg) => void;
  useClick?: (schedule: EventClickArg) => void;
  useMouseHover?: (info: EventHoveringArg) => void;
  useMouseLeave?: (info: EventHoveringArg) => void;
  useDateClick?: (info: any) => void;
}
