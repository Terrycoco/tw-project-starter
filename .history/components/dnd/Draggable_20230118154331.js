import { useDraggable } from "@dnd-kit/core";

const Draggable = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
};

export default Draggable;
