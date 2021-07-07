import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface PillProps {
    id: number;
    label: string;
    removable: boolean;
  removeHandler?: (label: string) => void;
}

function Pill({ id, label, removable, removeHandler }: PillProps) {
  const colors = ["#fa7878", "#f8fa78", "#8efa78", "#78ebfa", "#789bfa", "#a578fa"]

  return (
    <div className="pill" style={{backgroundColor: colors[id % colors.length]}}>
      <div className="pill-label">{label}</div>
      {removeHandler ? (
        <div className="close" onClick={() => removeHandler(label)}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Pill;
