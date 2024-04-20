import React from "react";
import "./LoginPage.css";
import { useState, useEffect } from "react";

const Code = () => {
  const [code, setCode] = useState("");
  const [codeValid, setCodeValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleCode = (event) => {
    setCode(event.target.value);
  };

  useEffect(() => {
    if (codeValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [codeValid]);
  return (
    <div>
      <div className="page">
        <div className="titleWrap">인증번호 입력</div>
        <div>
          <img src="/img/logo.png" />
        </div>
        <div className="contentWrap">
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="인증번호"
              value={code}
              onChange={handleCode}
            />
          </div>
          <div className="errorMessageWrap">
            {/* {!codeValid && code.length > 0 && ( */}
            <div>올바른 인증번호를 입력해주세요.</div>
            {/* )} */}
          </div>
          <div>
            <button disabled={notAllow} className="searchPasswordButton">
              인증번호 확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
