import React from "react";
import ExboardItem from "./ExboardItem";
import "./Board.css";

const Exboard = (props) => {
  return (
    <div>
      <table className="boardTable">
        <thead>
          <tr>
            <td className="boardTdIndex">구분</td>
            <td className="boardTdTitle">제목</td>
            <td className="boardTdName">작성자</td>
            <td className="boardTdDate">날짜</td>
          </tr>
        </thead>
      </table>
      {props.board.map((title, index) => (
        <ExboardItem title={title} index={index} />
      ))}
    </div>
  );
};

export default Exboard;
