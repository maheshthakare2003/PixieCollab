import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import About from "./components/About.jsx";
import ChatDashboard from "./components/ChatDashboard.jsx";
import Contact from "./components/Contact.jsx";
import HomePage from "./components/HomePage.jsx";
import Login from "./components/Login.jsx";
import Layout from "./Layout";

import "./index.css";

import { Provider } from 'react-redux';
import store from "./app/store.js";

import { io } from "socket.io-client";
const socket = io("127.0.0.1:5505");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage/>}/>
      <Route path="about/" element={<About />} />
      <Route path="contact/" element={<Contact />} />
      <Route path="chat/" element={<ChatDashboard />} />
      <Route path="login/" element={<Login />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


//Socket Code
socket.on("joinAlso", (channelUsername, editorEmail) => {
  if (isEditor && isEditor.email === editorEmail) {
    socket.emit("finalJoin", (channelUsername, editorEmail));
  } else if (isChannel && isChannel.channelUserName === channelUsername) {
    socket.emit("finalJoin", (channelUsername, editorEmail));
  }
});

export const joinRoom = (channelUsername, editorEmail) => {
  socket.emit("join", channelUsername, editorEmail);
};

export const sendMessage = (message, channelUsername, editorEmail) => {
  socket.emit("sendMessage", message, channelUsername, editorEmail);
};
