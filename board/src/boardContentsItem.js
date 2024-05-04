import React from "react";

const BoardContentsItem = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>제목</td>
            <td>name</td>
            <td>2024. 03. 16</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3">~~~</td>
          </tr>
          <tr>
            <td>첨부파일</td>
            <td colSpan="2">pdf</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BoardContentsItem;
