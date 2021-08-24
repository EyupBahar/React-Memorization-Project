import React, {memo} from "react";
import cw from "../assets/Joker.png";


const Header = ({ img }) => {
    console.log("Rendering: Header Comp!");
    return (
      <div className="header">
        <img
          src={img ? img : cw}
          alt="Joker_logo"
          style={{ margin: "1rem", maxHeight: "200px" }}
        />
      </div>
    );
  };
  
  export default memo(Header);