import FullCalendar from "@fullcalendar/react";
import { PluginDef } from "@fullcalendar/core";
import { ICalendarProps } from "@/components/types/fullCalendar";
import dayGridPlugin from "@fullcalendar/daygrid"; // 월간 // day 그리드 플러그인
import timeGridPlugin from "@fullcalendar/timegrid"; // 주간, 일간 // time 그리드 플러그인
import interactionPlugin from "@fullcalendar/interaction"; // 이벤트 플러그인
import "@/components/styles/FullCanlendar.css";

const CustomFullCalendar = ({
  height = "850px",
  defaultMode = "dayGridMonth", //default = dayGridMonth 그 외 timeGridWeek,timeGridDay 선택가능
  headerToolbar = {},
  footerToolbar = {},
  buttonText = {
    prev: "<",
    next: ">",
    prevYear: "<<",
    nextYear: ">>",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
  },
  // About Event Props
  eventBackgroundColor = "", // 이벤트 배경색
  eventBorderColor = "", // 이벤트 보더색
  eventDuplicateColor = "", // 이벤트가 중복되었을때, 우선순위로 나타나는 색상
  eventSchedule = [],
}: ICalendarProps) => {
  const plugins: PluginDef[] = [
    dayGridPlugin,
    interactionPlugin,
    timeGridPlugin,
  ];

  return (
    <FullCalendar
      height={height}
      plugins={plugins}
      initialView={defaultMode}
      headerToolbar={headerToolbar}
      footerToolbar={footerToolbar}
      buttonText={buttonText}
      eventBackgroundColor={eventBackgroundColor}
      eventBorderColor={eventBorderColor}
      eventColor={eventDuplicateColor}
      events={eventSchedule}
    />
  );
};

export default CustomFullCalendar;
