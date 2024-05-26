import React, { useContext, useState } from "react";
import "../Sidebar/Sidebar.css";
import { assets } from "../../../assets/assets";
import { context } from "../../Context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <i
          onClick={() => setExtended((prev) => !prev)}
          className="fa-solid fa-bars icon menu"
        ></i>

        <div className="new-chat" onClick={() => newChat()}>
          <i className="fa-solid fa-plus icon"></i>
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="history">
              {prevPrompts.map((item, index) => {
                return (
                  <>
                    <div
                      onClick={() => loadPrompt(item)}
                      className="recent-entry"
                      key={index}
                    >
                      <i class="fa-regular fa-message icon"></i>
                      <p>{item.slice(0, 18)} ...</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
