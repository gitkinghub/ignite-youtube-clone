import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";

import "./loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const navigate = useNavigate(); // Use navigate instead of history

  useEffect(() => {
    if (accessToken) {
      navigate("/"); // Use navigate instead of history.push()
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <h2>Youtube Clone</h2>
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}>Login With google</button>
        <p>Leading Streaming Platform WorldWide</p>
      </div>
    </div>
  );
};

export default LoginScreen;
