import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="pageWrap">
      <div className="page1">
        <div className="sidebarButtonWrap">
          <button
            onClick={() => {
              setSidebarOpen((sidebarOpen) => !sidebarOpen);
            }}
          >
            sidebar
          </button>
        </div>
      </div>
      <div className="page2">
        <div className={sidebarOpen ? "sidebarMenu active" : "sidebarMenu"}>
          <div className="contentsWrap">
            <button
              className="XButton"
              onClick={() => {
                setSidebarOpen((sidebarOpen) => !sidebarOpen);
              }}
            >
              X
            </button>
            <div className="userInfo">
              <div className="photoWrap">
                <img className="photo" src="img/증사아이콘.jpeg" />
              </div>
              <div className="nameStudentNumMajor">
                <div className="nameStudentNum">
                  <div className="name">name</div>
                  <div className="studentNum">12345678</div>
                </div>
                <div className="major">데이터사이언스전공</div>
              </div>
            </div>
            <div className="changeLogout">
              <div className="change">회원 정보 수정</div>
              <div className="logout">로그아웃</div>
            </div>
            <hr />
            <div className="sidebarContents">비밀번호 변경하기</div>
            <hr />
            <div className="sidebarContents">캘린더 보러가기</div>
            <hr />
            <div className="sidebarContents">시간표 보러가기</div>
            <hr />
            <div className="sidebarContents">학점 계산기</div>
            <hr />
            <div className="logo">
              <img src="img/logo.png" />
            </div>
            <div className="question">문의 : sanginjeong07@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
