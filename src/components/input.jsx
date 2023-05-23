import React from "react";
import { FaPaperclip, FaImage } from "react-icons/fa";

const input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <FaPaperclip />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <FaImage />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default input;
