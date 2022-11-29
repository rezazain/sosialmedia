import React from "react";
import "./topbar.css";
import { Chat, Person, Search, Notifications } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbarContainer ">
      <div className="topbarLeft">
        <span className="Logo">Nextsosial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assests/person/1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
