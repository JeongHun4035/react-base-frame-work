import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDndData } from "@/components/types/helloPangeaDnd";
import { DropResult } from "@hello-pangea/dnd";
import "@/demo/styles/HelloPangeaDnd.css";
import HelloPangeaDnd from "@/components/dnd/HelloPangeaDnd";
import Button from "@/components/Button";
const DragAndDropArea = () => {
  const [dndItemsA, setDndItemsA] = useState<IDndData[]>([
    { id: "ITEM_01", name: "A" },
    { id: "ITEM_02", name: "B" },
    { id: "ITEM_03", name: "C" },
  ]);

  const [dndItemsB, setDndItemsB] = useState<IDndData[]>([
    { id: "ITEM_04", name: "D" },
    { id: "ITEM_05", name: "E" },
    { id: "ITEM_06", name: "F" },
  ]);

  const dragEndEvent = (result: DropResult) => {
    if (!result.destination) return;

    let sourceItems, destinationItems, setSourceItems, setDestinationItems;

    if (result.source.droppableId === "dndA") {
      sourceItems = dndItemsA;
      setSourceItems = setDndItemsA;
    } else {
      sourceItems = dndItemsB;
      setSourceItems = setDndItemsB;
    }

    if (result.destination.droppableId === "dndA") {
      destinationItems = dndItemsA;
      setDestinationItems = setDndItemsA;
    } else {
      destinationItems = dndItemsB;
      setDestinationItems = setDndItemsB;
    }

    const [movedItem] = sourceItems.splice(result.source.index, 1);
    destinationItems.splice(result.destination.index, 0, movedItem);

    setSourceItems([...sourceItems]);
    setDestinationItems([...destinationItems]);
  };
  return (
    <div className="dnd-wrapper">
      <div className="dnd-area">
        Drag and Drop Zone A
        <HelloPangeaDnd
          droppableId="dndA"
          initialItems={dndItemsA}
          onDragEnd={dragEndEvent}
        />
      </div>
      <div className="dnd-area">
        Drag and Drop Zone B
        <HelloPangeaDnd
          droppableId="dndB"
          initialItems={dndItemsB}
          onDragEnd={dragEndEvent}
        />
      </div>
    </div>
  );
};

const DeepeningDnd = () => {
  const navigate = useNavigate();
  return (
    <div>
      <DragAndDropArea />
      <Button name="Back" onClick={() => navigate("/simple-drag-and-drops")} />
      <Button name="List" onClick={() => navigate("/demo-list")} />
    </div>
  );
};

export default DeepeningDnd;
