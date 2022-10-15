import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

const StatsList = ({ stats }) => {
  const statColors = [
    "success",
    "danger",
    "primary",
    "warning",
    "info",
    "secondary",
  ];
  return (
    <ListGroup horizontal="md" className="my-2">
      {stats &&
        stats.map((stat, idx) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <Badge bg={statColors[idx]} pill>
              {stat.base_stat}
            </Badge>
            <div className="ms-2 me-auto">
              <div className="font-monospace">{`${stat.stat.name.toUpperCase()}`}</div>
            </div>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default StatsList;
