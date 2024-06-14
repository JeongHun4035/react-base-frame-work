import CustomFullCalendar from "@/components/FullCalendar";
import { useNavigate } from "react-router-dom";
import {
  IHeaderToolBar,
  IFooterToolBar,
} from "@/components/types/fullCalendar";

const CalendarEx = () => {
  const navigate = useNavigate();

  // 띄어쓰면 갭이 생기고, 콤마가 있으면 그룹으로 묶는 형태 header 와 footer 동일
  const headerToolOptions: IHeaderToolBar = {
    left: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay prev next", // 선택 가능 ex)dayGridMonth 만 표시도 가능
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
  ];

  return (
    <div>
      <div>
        <CustomFullCalendar
          height="850px"
          headerToolbar={headerToolOptions}
          footerToolbar={footerToolOptions}
          eventSchedule={mockSchedules}
        />
      </div>
      <button onClick={() => navigate("/demo-list")}>back</button>
    </div>
  );
};

export default CalendarEx;
