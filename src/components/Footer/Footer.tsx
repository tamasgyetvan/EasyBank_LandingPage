import { RequestButton } from "../RequestButton/RequestButton";

export function Footer() {
  return (
    <footer>
      <div className="column">
        <img className="footerLogo" src="/logo_white.svg" alt="" />
        <div className="iconContainer">
          <img className="socialIcon" src="/icon-facebook.svg" alt="" />
          <img className="socialIcon" src="/icon-youtube.svg" alt="" />
          <img className="socialIcon" src="/icon-twitter.svg" alt="" />
          <img className="socialIcon" src="/icon-pinterest.svg" alt="" />
          <img className="socialIcon" src="/icon-instagram.svg" alt="" />
        </div>
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
