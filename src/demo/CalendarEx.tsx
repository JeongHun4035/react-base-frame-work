import CustomFullCalendar from "@/components/FullCalendar";
import { useNavigate } from "react-router-dom";
import {
  IHeaderToolBar,
  IFooterToolBar,
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
import dayGridPlugin from "@fullcalendar/daygrid"; // 월간 // day 그리드 플러그인
import timeGridPlugin from "@fullcalendar/timegrid"; // 주간, 일간 // time 그리드 플러그인
import interactionPlugin from "@fullcalendar/interaction"; // 이벤트 플러그인
const CalendarEx = () => {
  const navigate = useNavigate();
  const plugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];
  // 띄어쓰면 갭이 생기고, 콤마가 있으면 그룹으로 묶는 형태 header 와 footer 동일
  const headerToolOptions: IHeaderToolBar = {
    left: "title",
    right: "dayGridYear,dayGridMonth,dayGridWeek,dayGridDay prev next", // 선택 가능 ex)dayGridMonth 만 표시도 가능
  };
  const footerToolOptions: IFooterToolBar = {
    right: "today",
  };

  const mockSchedules = [
    {
      title: "회의",
      start: "2024-06-24T10:00:00",
      end: "2024-06-24T14:00:00",
    },
    {
      title: "테스트",
      start: "2024-06-25",
    },
    { title: "휴가", start: "2024-06-04", end: "2024-06-05" },
    { title: "김진욱 퇴사", start: "2024-07-01" },
  ];

  const handleSelect = (selectedCell: DateSelectArg) => {
    console.log("selectdCell", selectedCell);
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
  };
  const handleHover = (hover: EventHoveringArg) => {
    console.log("hover", hover);
  };
  const handleLeave = (leave: EventHoveringArg) => {
    console.log("leave", leave);
  };

  return (
    <div>
      <div>
        <CustomFullCalendar
          plugins={plugins}
          height="850px"
          headerToolbar={headerToolOptions}
          footerToolbar={footerToolOptions}
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
      <button onClick={() => navigate("/demo-list")}>back</button>
    </div>
  );
};

export default CalendarEx;
