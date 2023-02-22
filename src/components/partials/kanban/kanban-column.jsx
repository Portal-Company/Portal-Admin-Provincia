import React, { useRef } from "react";
import { Col } from "react-bootstrap";
import { useDrop } from "react-dnd";

const KanbanColumn = ({ status, changeTaskStatus, children }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(item) {
      changeTaskStatus(item.id, status);
    },
  });
  drop(ref);
  return (
    <>
      <Col lg="3" ref={ref}>
        {" "}
        {children}
      </Col>
    </>
  );
};

export default KanbanColumn;
