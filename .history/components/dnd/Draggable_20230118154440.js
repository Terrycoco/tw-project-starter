import { useDraggable } from "@dnd-kit/core";

const Draggable = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.key,
  });

  const style = transform
    ? {
        transfor: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
};

export default Draggable;
