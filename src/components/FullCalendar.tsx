import { useEffect, useRef } from "react";
import { Calendar } from "@fullcalendar/core";
import { ICalendarProps } from "@/components/types/fullCalendar";
import koLocale from "@fullcalendar/core/locales/ko";

import "@/components/styles/FullCanlendar.css";

const CustomFullCalendar = ({
  plugins = [],
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
  editable = false, // 사용자의 수정 가능 여부
  selectable = false, // 사용자의 날짜 선택 여부
  selectMirror = false, // 사용자의 시간 선택시 time 표시 여부
  navLinks = false, // 날짜 클릭 -> 일일 스케쥴 확인
  weekends = false, // 주말 표시 여부
  dayMaxEvents = true, // 하루에 표시 될 최대 이벤트 수 true = 셀의 높이
  changeDetect = () => {
    console.log("set");
  },
  useSelect = () => {
    console.log("selectdCell");
  }, // 날짜가 선택 될 때
  useAdd = () => {
    console.log("add");
  },
  useDrop = () => {
    console.log("drop");
  },
  useRemove = () => {
    console.log("remove");
  },
  useClick = () => {
    console.log("clicked");
  },
  useMouseHover = () => {
    console.log("hover");
  },
  useMouseLeave = () => {
    console.log("leave");
  },
}: ICalendarProps) => {
  const calendarRef = useRef<HTMLDivElement | null>(null);
  // const plugins: PluginDef[] = [
  //   dayGridPlugin,
  //   timeGridPlugin,
  //   interactionPlugin,
  // ];
  useEffect(() => {
    const calendarEl = calendarRef.current;
    const calendar = new Calendar(calendarEl as HTMLElement, {
      plugins: plugins,
      locale: koLocale,
      height: height,
      initialView: defaultMode,
      headerToolbar: headerToolbar,
      customButtons: {
        myCustomButton: {
          text: "custom!",
          click: function () {
            alert("clicked the custom button!");
          },
        },
      },
      buttonText: buttonText,
      eventBackgroundColor: eventBackgroundColor,
      eventBorderColor: eventBorderColor,
      eventColor: eventDuplicateColor,
      events: eventSchedule,
      editable: editable,
      selectable: selectable,
      selectMirror: selectMirror,
      navLinks: navLinks,
      weekends: weekends,
      dayMaxEvents: dayMaxEvents,
      eventsSet: changeDetect,
      select: useSelect,
      eventAdd: useAdd,
      eventDrop: useDrop,
      eventRemove: useRemove,
      eventClick: useClick,
      eventMouseEnter: useMouseHover,
      eventMouseLeave: useMouseLeave,
    });
    calendar.render();
    return () => {
      calendar.destroy();
    };
  }, [
    height,
    defaultMode,
    headerToolbar,
    footerToolbar,
    buttonText,
    eventBackgroundColor,
    eventBorderColor,
    eventDuplicateColor,
    eventSchedule,
    editable,
    selectable,
    selectMirror,
    navLinks,
    weekends,
    dayMaxEvents,
    changeDetect,
    useSelect,
    useAdd,
    useDrop,
    useRemove,
    useClick,
    useMouseHover,
    useMouseLeave,
  ]);

  return <div ref={calendarRef} />;
};

export default CustomFullCalendar;
