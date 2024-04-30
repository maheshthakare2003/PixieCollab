import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { increase, decrease } from "../features/userSlice.js";
const HomePage = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const currUser  = useSelector((state) => state.currUser);
  const isEditor  = useSelector((state) => state.isEditor);
  const isLogin  = useSelector((state) => state.isLogin);
  useEffect(() => {
    if (!isLogin) {
      nav("/login");
    }
  }, []);
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hello, {currUser?.name},Your are a {(isEditor?'Editor':'Channel')}
        </h1>
        {isEditor ? <h1>You are an editor</h1> : <h1>Your are not a editor</h1>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => {
            dispatch(increase(2));
          }}
        >
          Increase
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch(decrease());
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  )
};

export default HomePage;
