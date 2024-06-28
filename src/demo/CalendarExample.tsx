import CustomFullCalendar from "@/components/FullCalendar";
import { useNavigate } from "react-router-dom";
import {
  IHeaderToolBar,
  IFooterToolBar,
  ICustomButton,
} from "@/components/types/fullCalendar";
import {
  DateSelectArg,
  EventDropArg,
  EventAddArg,
  EventRemoveArg,
  EventApi,
  EventClickArg,
  EventHoveringArg,
} from "@fullcalendar/core";
import { ButtonTextCompoundInput } from "@fullcalendar/core/index.js";
import multiMonthPlugin from "@fullcalendar/multimonth";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { useState } from "react";
import Button from "@/components/Button";
const CalendarExample = () => {
  const navigate = useNavigate();
  const plugins = [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin,
    listPlugin,
    multiMonthPlugin,
  ];
  // 띄어쓰면 갭이 생기고, 콤마가 있으면 그룹으로 묶는 형태 header 와 footer 동일
  const headerToolOptions: IHeaderToolBar = {
    left: "today",
    center: "prev title next",
    right: "myCustomButton", // 선택 가능 ex)dayGridMonth 만 표시도 가능
  };
  const footerToolOptions: IFooterToolBar = {
    right:
      "multiMonthYear listYear,listMonth,listWeek,listDay dayGridYear,dayGridMonth,dayGridWeek timeGridWeek,timeGridDay",
  };

  const customButtons: ICustomButton = {
    myCustomButton: {
      text: "저장",
      click: function () {
        alert("기능을 추가해주세요.");
      },
    },
  };

  const buttonText: ButtonTextCompoundInput = {
    prev: "이전",
    next: "다음",
    dayGridYear: "연도 별",
    dayGridMonth: "월간",
    dayGridWeek: "주간",
    listYear: "연도 별 일정 확인",
    listMonth: "월 별 일정 확인",
    listWeek: "주간 별 일정 확인",
    listDay: "일일 일정 확인",
  };

  const [mockSchedules, setMockSchedules] = useState([
    {
      id: "1",
      title: "회의",
      start: "2024-06-24T10:00:00",
      end: "2024-06-24T14:00:00",
    },
    {
      id: "2",
      title: "테스트",
      start: "2024-06-25",
    },
    { id: "3", title: "김진욱 휴가", start: "2024-06-04", end: "2024-06-05" },
    { id: "4", title: "김태일 휴가", start: "2024-06-04", end: "2024-06-05" },
    { id: "5", title: "임규리 휴가", start: "2024-06-04", end: "2024-06-05" },
    { id: "6", title: "박세진 휴가", start: "2024-06-04", end: "2024-06-05" },
    { id: "7", title: "김진욱 퇴사", start: "2024-07-01" },
  ]);

  const handleSelect = (selectedCell: DateSelectArg) => {
    console.log("selectdCell", selectedCell);
    const title = prompt("새로운 일정의 제목을 입력하세요:");
    if (title) {
      const newEvent = {
        id: String(Date.now()), // 유니크 ID 생성
        title,
        start: selectedCell.startStr,
        end: selectedCell.endStr,
        allDay: selectedCell.allDay,
      };
      setMockSchedules([...mockSchedules, newEvent]);
    }
  };
  const handleAddEvent = (added: EventAddArg) => {
    console.log("add", added);
  };
  const handleDropEvent = (dropped: EventDropArg) => {
    console.log("drop:", dropped);
  };
  const handleRemoveEvent = (removed: EventRemoveArg) => {
    console.log("remove", removed);
  };
  // 현재 등록되어 있는 이벤트 & 변경 감지
  const handleSetEvents = (events: EventApi[]) => {
    console.log("set", events);
  };
  // 클릭 이벤트
  const handleClick = (schedule: EventClickArg) => {
    console.log("schedule", schedule);
    if (confirm(`'${schedule.event.title}' 일정을 삭제하시겠습니까?`)) {
      schedule.event.remove();
      setMockSchedules(
        mockSchedules.filter((event) => event.id !== schedule.event.id)
      );
    }
  };
  // 이벤트 위 mouse hover 적용 시
  const handleHover = (hover: EventHoveringArg) => {
    console.log("hover", hover);
  };
  // 이벤트 위 mouse hover 풀릴 시
  const handleLeave = (leave: EventHoveringArg) => {
    console.log("leave", leave);
  };

  return (
    <div>
      <div>
        <CustomFullCalendar
          plugins={plugins}
          height="850px"
          customButtons={customButtons}
          headerToolbar={headerToolOptions}
          footerToolbar={footerToolOptions}
          buttonText={buttonText}
          eventSchedule={mockSchedules}
          editable={true}
          selectable={true}
          navLinks={true}
          selectMirror={true}
          navLinkHint="날짜 확인"
          weekends={true}
          changeDetect={handleSetEvents}
          useAdd={handleAddEvent}
          useDrop={handleDropEvent}
          useRemove={handleRemoveEvent}
          useSelect={handleSelect}
          useClick={handleClick}
          useMouseHover={handleHover}
          useMouseLeave={handleLeave}
        />
      </div>
      <Button name="Back" onClick={() => navigate("/demo-list")} />
    </div>
  );
};

export default CalendarExample;
