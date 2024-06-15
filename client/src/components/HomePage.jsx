import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoUpload from "./VideoUpload.jsx";
import { increase, decrease } from "../features/userSlice.js";

const HomePage = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const currUser = useSelector((state) => state.currUser);
  const isEditor = useSelector((state) => state.isEditor);
  const isLogin = useSelector((state) => state.isLogin);

  useEffect(() => {
    if (!isLogin) {
      nav("/login");
    }
  }, [isLogin, nav]);

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Hello, {currUser?.name}, you are a {isEditor ? 'Editor' : 'Channel'}
        </h1>
        {isEditor ? <h1>You are an editor</h1> : <h1>You are not an editor</h1>}
        <div className="flex justify-center space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
      <div className="w-full max-w-lg">
        <VideoUpload />
      </div>
    </div>
  );
};

export default HomePage;
