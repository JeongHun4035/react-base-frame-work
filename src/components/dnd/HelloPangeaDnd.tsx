import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { IDndData } from "@/components/types/helloPangeaDnd";
import "@/components/styles/BeautifulDnD.css";
interface DndProps {
  droppableId: string;
  initialItems: IDndData[];
  onDragEnd: (result: DropResult) => void;
}

const DragAndDropComponent = ({
  droppableId,
  initialItems,
  onDragEnd,
}: DndProps) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {initialItems.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    className="draggable-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.name}
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

export default DragAndDropComponent;
