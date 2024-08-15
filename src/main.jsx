import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "./index.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster />
  </>
);