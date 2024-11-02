import { useState } from "react";
import LogoSvg from "../assets/images/logo.svg";
import { TwoLineHamburger } from "../components";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header>
        {/* stan+vision logo */}
        <div className="logo">
          <img
            src={LogoSvg}
            alt="stan+vision logo"
            width={"165px"}
            height={"24px"}
          />
        </div>

        {/* 2 line hamburger button */}
        <TwoLineHamburger toggleMenu={toggleMenu} isActive={isActive} />

        {/* Let's connect button */}
        <button
          onClick={() => window.open("https://www.google.com", "_blank")}
          className="sv-basic-font-family header-connect-btn"
        >
          <div className="header-connect-btn-text-container">
            <div className="connect-text-1">Let's Connect</div>
            <div className="connect-text-2">Let's Connect</div>
          </div>
        </button>
      </header>

      {/* NavBar */}
      {isActive && (
        <div className="navbar-content-wrapper">
          <div>NavBar</div>
        </div>
      )}
    </>
  );
};

export default Header;
