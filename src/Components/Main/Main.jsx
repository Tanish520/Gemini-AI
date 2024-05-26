import React, { useContext } from "react";
import "../Main/Main.css";
import { assets } from "../../../assets/assets";
import Input from "../Input Field/Input";
import { context } from "../../Context/Context";
import User from "../User Actitvity/User";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    isAuthenticated,
    user
  } = useContext(context);

  const cardData = [
    {
      text: "Suggest beautiful places to see on an upcoming road trip.",
      img: <img src={assets.compass_icon}/>,
    },
    {
      text: "Briefly summarize this concept: urban planning.",
      img: <img src={assets.bulb_icon}/>,
    },
    {
      text: "Brainstorm team bonding activities for our work retreat.",
      img: <img src={assets.menu_icon}/>,
    },
    {
      text: "Tell me about React js and React native.",
      img: <img src={assets.code_icon}/>,
    },
  ];

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <User></User>
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, {isAuthenticated ? user.name : "Dev"}.</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                {cardData.map((item, index) => {
                  return (
                    <div className="card" onClick={() => onSent(item.text)}>
                      <p>
                        {item.text}
                      </p>
                      {item.img}
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={isAuthenticated ? user.picture : assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }} />
                )}
              </div>
            </div>
          )}
          <div className="input">
            <Input />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
