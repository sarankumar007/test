import React, { useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";

const TokenForm = () => {
  // const urlkey = "https://rp1.ybites.com"
  const urlkey = "http://localhost:3000"
  const navigator = useNavigate();
  const [data, setData] = useState({
    clientId: "",
    clientSecret: "",
    userName: "",
  });
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("/token", data);
      window.location.href = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${res.data.data.clientId}&redirect_uri=${urlkey}/auth/twitch/callback&scope=user:read:email%20channel:read:subscriptions%20moderator:read:followers%20openid moderator:read:followers&state=${res.data.data._id}`;
    } catch (error) {}
  };
  return (
    <div className="container">
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="mb-3 col-12">
              <h1>Welcome to Liverpool</h1>
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter Client ID
              </label>
              <input
                required
                onChange={onChange}
                value={data.clientId}
                type="text"
                name="clientId"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter Client Secret
              </label>
              <input
                required
                onChange={onChange}
                type="text"
                value={data.clientSecret}
                name="clientSecret"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter UserName
              </label>
              <input
                required
                onChange={onChange}
                value={data.userName}
                type="text"
                name="userName"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div className="mb-3 col-12 d-flex justify-content-center ">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TokenForm;
