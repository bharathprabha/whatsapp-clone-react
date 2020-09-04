import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoodIcon from "@material-ui/icons/Mood";
import MicIcon from "@material-ui/icons/Mic";
import axios from "axios";
import ChatMessage from "./ChatMessage";

function Chat() {

  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => console.log(err));
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const d = new Date();
    const datetext = d.getHours() + ":" + d.getMinutes();
    axios
      .post("http://localhost:8000/", {
        message: input,
        time: datetext,
      })
      .then((res) => {
        const msg = [...messages];
        msg.push(res.data);
        setMessages(msg);
        setInput("");
      });
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((data) => (
          <ChatMessage key={data._id} message={data} />
        ))}
      </div>
      <div className="chat__footer">
        <MoodIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="type here"
          ></input>
          <button onClick={sendMessage} type="submit"></button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
