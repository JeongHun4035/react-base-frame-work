import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDndData } from "@/components/types/HelloPangeaDnd";
import "@/demo/styles/HelloPangeaDnd.css";
import {
  DiLinux,
  DiIe,
  DiVisualstudio,
  DiJava,
  DiFirefox,
  DiReact,
} from "react-icons/di";
import { DragStart, DragUpdate, DropResult } from "@hello-pangea/dnd";
import HelloPangeaDnd from "@/components/HelloPangeaDnd";

const DragAndDropArea = () => {
  const [globalData, setGlobalData] = useState<IDndData[]>([
    {
      id: "ITEM_01",
      key: "A",
      name: "Linux",
      icon: <DiLinux />,
    },
    {
      id: "ITEM_02",
      key: "B",
      name: "Explore",
      icon: <DiIe />,
    },
    {
      id: "ITEM_03",
      key: "C",
      name: "Visual Studio Code",
      icon: <DiVisualstudio />,
    },
    {
      id: "ITEM_04",
      key: "D",
      name: "Java",
      icon: <DiJava />,
    },
    {
      id: "ITEM_05",
      key: "E",
      name: "Firefox",
      icon: <DiFirefox />,
    },
    {
      id: "ITEM_06",
      key: "F",
      name: "React",
      icon: <DiReact />,
    },
  ]);
  const [myData, setMyData] = useState<IDndData[]>([]);
  const dragStartEvent = (result: DragStart) => {
    console.log("DragStart", result);
  };
  const dragEndEvent = (result: DropResult) => {
    if (result.destination) {
      console.log("Dropped in valid zone", result);
    } else {
      console.log("Dropped outside of valid zone", result);
    }
  };
  const dragUpdateEvent = (result: DragUpdate) => {
    console.log("DragUpdate", result);
  };
  return (
    <div className="dnd-wrapper">
      <div className="left-area">
        Global
        {globalData.map(function (data) {
          return (
            <HelloPangeaDnd
              key={data.id}
              dropZoneId={"global"}
              onDragStart={dragStartEvent}
              onDragEnd={dragEndEvent}
              onDragUpdate={dragUpdateEvent}
              dragKey={data.key}
              dragId={data.id}
            >
              <div key={data.id}>
                <span>
                  {data.icon} {data.name}
                </span>
              </div>
            </HelloPangeaDnd>
          );
        })}
      </div>
      <div className="right-area">
        Mine
        {myData.map(function (data) {
          return (
            <HelloPangeaDnd
              key={data.id}
              dropZoneId={"mine"}
              onDragStart={dragStartEvent}
              onDragEnd={dragEndEvent}
              onDragUpdate={dragUpdateEvent}
              dragKey={data.key}
              dragId={data.id}
            >
              <div key={data.id}>
                <span>
                  {data.icon} {data.name}
                </span>
              </div>
            </HelloPangeaDnd>
          );
        })}
      </div>
    </div>
  );
};

const HelloPangeaDndExample = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Let's move!!</h2>
      <DragAndDropArea />
      <button onClick={() => navigate("/demo-list")}>back</button>
    </div>
  );
};

export default HelloPangeaDndExample;
