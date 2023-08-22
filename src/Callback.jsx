import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigator = useNavigate();

  //   const url = window.location.href;
  const access_token = window.location.href
    .split("access_token=")[1]
    .split("&")[0];
  const state = window.location.href.split("state=")[1].split("&")[0];
  console.log(state, access_token);
  const getData = async () => {
    const res = await axios.post("/token/callBack", { access_token, state });
    navigator(`/dashboard/${res.data.data._id}`);
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>Callback</div>;
};

export default Callback;
