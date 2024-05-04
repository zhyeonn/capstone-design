import React from "react";
import "./Board.css";
import { useState, useEffect } from "react";
import Exboard from "./Exboard";

const Board = () => {
  const [boardWriteFrame, setBoardWriteFrame] = useState(false);

  const [boardTitle, setBoardTitle] = useState("");
  const [boardContents, setBoardContents] = useState("");

  const [boardTitleValid, setBoardTitleValid] = useState(false);
  const [boardContentsValid, setBoardContentsValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);

  const onChange = (event) => {
    const { name, value } = event.target;

    if (name === "boardTitle") {
      setBoardTitle(value);
      const boardTitleRegex = /^.{2,}$/;
      setBoardTitleValid(boardTitleRegex.test(value));
    } else if (name === "boardContents") {
      setBoardContents(value);
      const boardContentsRegex = /^.{4,}$/;
      setBoardContentsValid(boardContentsRegex.test(value));
    }
  };

  useEffect(() => {
    if (boardTitleValid && boardContentsValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [boardTitleValid, boardContentsValid]);

  const [board, setBoard] = useState([]);

  const handleRegisterButton = () => {
    setBoard([...board, boardTitle]);

    setBoardTitle("");
    setBoardContents("");

    setBoardWriteFrame(false);
  };

  return (
    <div>
      <div className="boardPage1">
        <div>
          <button
            className="boardWriteButton"
            onClick={() => {
              setBoardWriteFrame((boardWriteFrame) => !boardWriteFrame);
            }}
          >
            글쓰기
          </button>
        </div>
        <Exboard board={board} />
      </div>
      <div className="boardPage2">
        <div
          className={
            boardWriteFrame ? "boardWriteFrame active" : "boardWriteFrame"
          }
        >
          <div className="boardWriteWrap">
            <div>
              <button
                onClick={() => {
                  setBoardWriteFrame((boardWriteFrame) => !boardWriteFrame);
                }}
                className="boardWriteXButton"
              >
                X
              </button>
            </div>
            <div className="boardWrite">
              <div>
                <label>제목</label>
                <input
                  type="text"
                  name="boardTitle"
                  className="boardWriteTitle"
                  value={boardTitle}
                  onChange={onChange}
                />
              </div>
              <div>
                <label>내용</label>
                <input
                  type="text"
                  name="boardContents"
                  className="boardWriteContents"
                  value={boardContents}
                  onChange={onChange}
                />
              </div>
              <div>
                <button
                  disabled={notAllow}
                  className="boardRegisterButton"
                  onClick={handleRegisterButton}
                >
                  등록
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
