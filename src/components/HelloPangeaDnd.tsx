import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DragStart,
  DragUpdate,
  DropResult,
} from "@hello-pangea/dnd";
import "@/demo/styles/HelloPangeaDnd.css";

interface HelloPangeaDndProps {
  children: React.ReactNode | React.ReactNode[];
  dropZoneId: string;
  dragKey: string;
  dragId: string;
  onDragStart?: (result: DragStart) => void;
  onDragEnd: (result: DropResult) => void;
  onDragUpdate?: (result: DragUpdate) => void;
}

const HelloPangeaDnd: React.FC<HelloPangeaDndProps> = ({
  children,
  dropZoneId,
  dragKey,
  dragId,
  onDragStart = () => {
    console.log("start");
  },
  onDragEnd = (result: DropResult) => {
    if (result.destination) {
      console.log("Dropped in valid zone", result);
    } else {
      console.log("Dropped outside of valid zone", result);
    }
  },
  onDragUpdate = () => {
    console.log("update");
  },
}) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragUpdate={onDragUpdate}
    >
      <Droppable droppableId={dropZoneId} isDropDisabled={false}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {childrenArray.map((child, index) => (
              <Draggable key={dragKey} draggableId={dragId} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="draggable-item"
                  >
                    {child}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default HelloPangeaDnd;
