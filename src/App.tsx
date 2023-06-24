import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuIcon from "@material-ui/icons/Menu";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";

function App() {
  return (
    <div className="App">
      <div className="headerRoot">
        <div className="header_leftPart">
          <MenuIcon className="menuIcon" />
          <img src="/images/BelayLink.png" alt="img" className="logoImg" />
        </div>
        <div className="header_rightPart">
          <img src="/images/1.jpg" alt="img" className="userAvatar" />
          <ChatBubbleIcon className="messageIcon" />
          <Badge badgeContent={1} color="error">
            <NotificationsIcon className="notificationIcon" />
          </Badge>
        </div>
      </div>

      <div className="mainContainer">
        <div className="contentTxt">Find People to do sports together</div>
        <div className="yellowOption">
          <div className="optionContentTxt">I'm looking for...</div>
          <img src="/images/book.png" alt="img" className="bookIcon" />
        </div>

        <div className="blueOption">
          <div className="optionContentTxt">Look around</div>
          <img src="/images/eye.png" alt="img" className="bookIcon" />
        </div>
      </div>
    </div>
  );
}

export default App;
