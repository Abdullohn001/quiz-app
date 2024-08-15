// react router dom imports
import { Outlet } from "react-router-dom";

// component
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <a href="https://t.me/id_24806" target="_blank">
          Telegram
        </a>{" "}
        |
        <a href="https://github.com/Abdullohn001" target="_blank">
          Github
        </a>
      </footer>
    </>
  );
}

export default MainLayout;
