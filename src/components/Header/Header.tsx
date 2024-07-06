import { NavBar } from "../NavBar/NavBar";
import { RequestButton } from "../RequestButton/RequestButton";
import { useState } from "react";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <header>
      <img src="public/logo.svg" alt="EveryBank Logo" />
      <NavBar toggle={toggleMenu} isOpen={isOpen} />
      <RequestButton />
      <button className="mobileMenuButton" onClick={toggleMenu}>
        <img src="/icon-hamburger.svg" alt="" />
      </button>
    </header>
  );
}
