import React from "react";
import "./Notice.css";

const NoticeContents = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>수강 신청 안내</td>
            <td>학사과</td>
            <td>2024. 03. 16</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3">내용</td>
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

export default NoticeContents;
