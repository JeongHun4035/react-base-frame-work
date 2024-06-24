import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDndData } from "@/components/types/HelloPangeaDnd";
import { DropResult } from "@hello-pangea/dnd";
import "@/demo/styles/HelloPangeaDnd.css";
import HelloPangeaDnd from "@/components/HelloPangeaDnd";

const DragAndDropArea = () => {
  const [dndItems, setDndItems] = useState<IDndData[]>([
    {
      id: "ITEM_01",
      name: "A",
    },
    {
      id: "ITEM_02",
      name: "B",
    },
    {
      id: "ITEM_03",
      name: "C",
    },
    {
      id: "ITEM_04",
      name: "D",
    },
    {
      id: "ITEM_05",
      name: "E",
    },
  ]);

  const dragEndEvent = (result: DropResult) => {
    console.log(result);
    if (!result.destination) return;
    const reorderedItems = Array.from(dndItems);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);
    setDndItems(reorderedItems);
  };

  return (
    <div className="dnd-wrapper">
      <div className="dnd-area">
        Drag and Drops Area
        <HelloPangeaDnd
          droppableId="dndA"
          initialItems={dndItems}
          onDragEnd={dragEndEvent}
        />
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
