import React, { useContext } from "react";
import "../Input Field/Input.css";
import { assets } from "../../../assets/assets";
import { context } from "../../Context/Context";
import VoiceInput from "../VoiceInput";
const Input = () => {
  const { onSent, input, setInput } = useContext(context);
  return (
    <div className="main-bottom">
      <div className="search-box">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Enter a prompt here..."
        />
        <div>
          <VoiceInput />
          {input ? (
            <i
              class="fa-solid fa-circle-down fa-rotate-270 icon"
              onClick={() => onSent()}
              src={assets.send_icon}
            ></i>
          ) : null}
        </div>
      </div>
      <div className="bottom-info">
        <p>
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default Input;
