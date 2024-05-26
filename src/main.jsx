import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import ContextProvider from "./Context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-4cigln04q333cnro.us.auth0.com"
    clientId="qEUtErmm6YsF6HRieLGVRcrLOcK2zmKU"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ContextProvider>
      <App />
    </ContextProvider>
  </Auth0Provider>
);
