import React from "react";
import "./SideBar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SideBarChat from "./SideBarChat";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="http://avatars.dicebear.com/api/human/1234.svg" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search for chats" type="text" />
        </div>
      </div>
      <div className="sidebar__char">
        <SideBarChat />
      </div>
    </div>
  );
}

export default SideBar;
