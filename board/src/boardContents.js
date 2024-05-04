import React, { useState } from "react";
import BoardContentsItem from "./BoardContentsItem";

const BoardContents = (props) => {
  const [board, setBoard] = useState(props.board);

  return (
    <div>
      <BoardContentsItem board={board} />
    </div>
  );
};

export default BoardContents;
