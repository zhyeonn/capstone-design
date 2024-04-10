import React from "react";
import "./SearchPassword.css";
import { useState, useEffect } from "react";

const SearchPassword = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (emailRegex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  useEffect(() => {
    if (emailValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid]);

  return (
    <div>
      <div className="page">
        <div className="titleWrap">비밀번호 찾기</div>
        <div>
          <img src="/img/logo.png" />
        </div>
        <div className="contentWrap">
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="이메일"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>
          <div>
            <button disabled={notAllow} className="searchPasswordButton">
              비밀번호 찾기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPassword;
