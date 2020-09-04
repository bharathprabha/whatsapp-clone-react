import React, { useEffect, useState } from "react";

function ChatMessage({ message }) {
  const [msg, setMsg] = useState({});
  useEffect(() => {
    setMsg(message);
  }, [message]);
  return (
    <p className={`chat__message ${true && "chat__reciever"}`}>
      <span className="chat__name">{msg.user}</span>
      {msg.message}
      <span className="chat__time">{msg.time}</span>
    </p>
  );
}

export default ChatMessage;
