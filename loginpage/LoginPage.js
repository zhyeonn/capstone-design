import React from "react";
import "./LoginPage.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

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

  const handlePassword = (e) => {
    setPw(e.target.value);
    const pwRegex = /^[A-Za-z0-9]{8,20}$/;
    if (pwRegex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);
  return (
    <div>
      <div className="page">
        <div className="titleWrap">서비스를 이용하려면 로그인하세요.</div>
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
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="비밀번호"
              value={pw}
              onChange={handlePassword}
            />
          </div>
          <div className="errorMessageWrap">
            {(!emailValid || !pwValid) &&
              (email.length > 0 || pw.length > 0) && (
                <div>아이디 또는 비밀번호가 틀렸습니다.</div>
              )}
          </div>
        </div>
        <div>
          <button disabled={notAllow} className="loginButton">
            로그인
          </button>
        </div>
        <div className="searchPasswordWrap">
          <Link to="searchPassword" className="searchPasswordLink">
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
