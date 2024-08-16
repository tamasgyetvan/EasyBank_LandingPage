import { RequestButton } from "../RequestButton/RequestButton";

export function Footer() {
  return (
    <footer>
      <div className="column">
        <img className="footerLogo" src="public/logo_white.svg" alt="" />
        <div className="iconContainer"></div>
      </div>
      <div className="column">
        <ul>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <RequestButton />
        <span>© Easybank. All Rights Reserved</span>
      </div>
    </footer>
  );
}
