import React, { useState } from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [nowPw, setNowPw] = useState("");
  const [changePw, setChangePw] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const handleNowPwChange = (event) => {
    setNowPw(event.target.value);
  };

  const handleChangePwChange = (event) => {
    setChangePw(event.target.value);
  };

  const handleCheckPwChange = (event) => {
    setCheckPw(event.target.value);
  };

  return (
    <div>
      <div className="changePasswordPage">
        <div className="changePasswordHeader">비밀번호를 변경하세요.</div>
        <div>
          <div className="changePasswordInputWrap">
            <input
              className="changePasswordInput"
              placeholder="현재 비밀번호"
              value={nowPw}
              onChange={handleNowPwChange}
            />
          </div>
          <div className="changePasswordInputWrap">
            <input
              className="changePasswordInput"
              placeholder="변경 비밀번호"
              value={changePw}
              onChange={handleChangePwChange}
            />
          </div>
          <div className="changePasswordInputWrap">
            <input
              className="changePasswordInput"
              placeholder="비밀번호 확인"
              value={checkPw}
              onChange={handleCheckPwChange}
            />
          </div>
          <div className="changePasswordErrorMessageWrap">
            {changePw !== checkPw &&
              (changePw.length > 0 || checkPw.length > 0) && (
                <div className="changePasswordErrorMessage">
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
          </div>
        </div>
        <div className="changePasswordBtnWrap">
          <button className="changePasswordBtn changeBtn">변경하기</button>
          <button className="changePasswordBtn cancleBtn">취소하기</button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
