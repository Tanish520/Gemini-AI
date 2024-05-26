import React from "react";
import "../DarkMode/DarkModeButton.css"
const DarkModeButton = () => {
  return (
    <div class="toggle-container">
      <input type="checkbox" id="toggle-switch" class="toggle-switch" />
      <label for="toggle-switch" class="toggle-label">
        <span class="toggle-icon sun-icon">☀️</span>
        <span class="toggle-icon moon-icon">🌙</span>
      </label>
    </div>
  );
};

export default DarkModeButton;
