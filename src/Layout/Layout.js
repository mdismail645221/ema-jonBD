import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
          <div id="detail">
              <Header></Header>
            <Outlet />
      </div>
    </>
  );
}