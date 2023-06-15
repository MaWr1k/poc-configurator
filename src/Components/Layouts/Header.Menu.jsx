/*
 *  Document    : Header.Menu.js
 *  Author      : Ganapathy
 *  Description : Header Menu
 */
import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

// Import Components
import Buttons from "../Controls/Buttons";

const HeaderMenu = () => {
  // Next Router
  const router = useNavigate();

  return (
    <>
      <div className="absolute z-[1500] inset-x-0 top-0">
        <div className="grid gap-2 bg-blue-300">
          <div className="sticky">
            <div className="flex justify-between w-screen mx-auto container p-1">
              <div className="flex">
                <img
                  src={"/Company_Logo.png"}
                  alt={"Company_Logo"}
                  width={75}
                  height={15}
                />
              </div>
              <div className="flex font-semibold">Demo Project</div>
              <div className="flex">
                <Buttons
                  onClick={() => router("/login")}
                  className="flex gap-2 justify-between bg-red-500 rounded p-1"
                >
                  <FaPowerOff name="Logout" /> Logout
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
