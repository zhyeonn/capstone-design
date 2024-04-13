import React from "react";
import "./MypageFrame.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";

const MypageFrame = () => {
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
                sidebar
                {/* <AiOutlineMenu /> */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageFrame;
