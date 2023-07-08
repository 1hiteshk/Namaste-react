import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-[#f7ebb7] shadow-lg ">
      <div className="w-28 ml-4">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-bold text-[#0f334b] text-lg" ><Link to="/home">Home</Link></li>
          <li className="px-4 font-bold text-[#0f334b] text-lg"><Link to="/about">About Us</Link></li>
          <li className="px-4 font-bold text-[#0f334b] text-lg"><Link to="/contact"> Contact Us</Link> </li>
          <li className="px-4 font-bold text-[#0f334b] text-lg"><Link to="/grocery"> Grocery</Link> </li>
          <li className="px-4 font-bold text-[#0f334b] text-lg"><Link>🛒Cart</Link></li>
          <li className="px-4 font-bold text-[#0f334b] text-lg"> Online status: {onlineStatus? "✅" :"🔴"}</li>
          <button
            className="px-4 font-bold text-[#0f334b] text-lg"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
