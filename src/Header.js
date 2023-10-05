import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="search" />
        <Link to="/search">
          <SearchIcon className="header__centerIcon" />
        </Link>
      </div>

      <div className="header__right">
        <p>Airbnb your home</p>
        <LanguageIcon className="header__rightLangIcon"/>
        <div className="header__rightIcon">
          <MenuIcon />
          <AccountCircleIcon className="header__rightIconAccount" />
        </div>
      </div>
    </div>
  );
}

export default Header;
