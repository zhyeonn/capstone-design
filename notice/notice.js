import React from "react";
import "./Notice.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Notice = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div className="page1">
        <div>
          <div className="logoSidebar">
            <div className="logo">
              <img src="/img/logo.png" />
            </div>
            <div className="sidebarButtonWrap">
              <button
                onClick={() => {
                  setSidebarOpen((sidebarOpen) => !sidebarOpen);
                }}
              >
                <AiOutlineMenu />
              </button>
            </div>
          </div>
          <div className="rowHr1">
            <hr />
          </div>
          <div className="pageTitle">공지사항</div>
          <div className="rowHr2">
            <hr />
          </div>
          <div className="pageContents">
            <div className="myPageBoard">
              <div className="myPage">
                <div className="myPageBoardTitle">마이페이지</div>
                <Link to="/ChangePassword" className="myPageBoardMenu">
                  비밀번호 변경하기
                </Link>
                <Link to="/Calendar" className="myPageBoardMenu">
                  캘린더 보러가기
                </Link>
                <Link to="/Schedule" className="myPageBoardMenu">
                  시간표 보러가기
                </Link>
                <Link to="/학점" className="myPageBoardMenu">
                  학점 계산기
                </Link>
              </div>
              <div className="board">
                <div className="myPageBoardTitle">게시판</div>
                <Link to="/Notice" className="thisPage">
                  공지사항
                </Link>
                <Link to="/Notice" className="myPageBoardMenu">
                  자유게시판
                </Link>
              </div>
            </div>
            <div className="linePage">
              <div className="line"></div>
              <div className="noticeTableWrap">
                <table className="noticeTable">
                  <thead>
                    <tr>
                      <td className="tableNumber">구분</td>
                      <td className="tableTitle">제목</td>
                      <td className="tableWriter">작성자</td>
                      <td className="tableDate">날짜</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link
                          to="/NoticeContents"
                          className="tableTitleContents"
                        >
                          수강 신청 안내
                        </Link>
                      </td>
                      <td>학사과</td>
                      <td>2024. 03. 16</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
            <div className="sidebarHr">
              <hr />
            </div>
            <div className="sidebarContents">비밀번호 변경하기</div>
            <div className="sidebarHr">
              <hr />
            </div>
            <div className="sidebarContents">캘린더 보러가기</div>
            <div className="sidebarHr">
              <hr />
            </div>
            <div className="sidebarContents">시간표 보러가기</div>
            <div className="sidebarHr">
              <hr />
            </div>
            <div className="sidebarContents">학점 계산기</div>
            <div className="sidebarHr">
              <hr />
            </div>
            <div className="logoInSidebar">
              <img src="img/logo.png" />
            </div>
            <div className="question">문의 : sanginjeong07@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
