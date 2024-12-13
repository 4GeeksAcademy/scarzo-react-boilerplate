import { useState } from "react";
import { Badge, ListGroupItem } from "react-bootstrap";

export const Task = ({ listItem, deleteItem }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <ListGroupItem
      className="d-flex justify-content-between align-items-start"
      onMouseEnter={() => setIsHighlighted(true)}
      onMouseLeave={() => setIsHighlighted(false)}
    >
      <div
        style={{
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {listItem.label}
      </div>
      <Badge
        bg="light"
        text="dark"
        onClick={() => deleteItem(listItem.id)}
        pill
        style={{
          cursor: "pointer",
          visibility: isHighlighted ? "visible" : "hidden",
          userSelect: "none",
        }}
      >
        X
      </Badge>
    </ListGroupItem>
  );
};
