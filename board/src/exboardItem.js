import React from "react";
import { Link } from "react-router-dom";
import "./Board.css";

const ExboardItem = (props) => {
  const today = new Date();

  const formattedDate = `${today.getFullYear()}. ${
    today.getMonth() + 1
  }. ${today.getDate()}`;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className="boardTdIndex">{props.index + 1}</td>
            <td className="boardTdTitle notCenter">
              <Link to="/BoardContents" className="boardTdTitleContents">
                {props.title}
              </Link>
            </td>
            <td className="boardTdWriter">name</td>
            <td className="boardTdDate">{formattedDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExboardItem;
