import React from "react";
import { io } from "socket.io-client";
const socket = io("127.0.0.1:5505");

const ChatDashboard = () => {
  return (
    <div className="w-screen h-screen p-1 flex">
     <h1>Hello World Lets Chat</h1>
    </div>
  );
};

export default ChatDashboard;
