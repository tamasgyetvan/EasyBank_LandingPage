type NavBarProps = {
  toggle: () => void;
  isOpen: boolean;
};

export function NavBar({ isOpen, toggle }: NavBarProps) {
  return (
    <nav className={isOpen ? "active" : "inactive"}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
      </ul>
      <button className="closeMenu" onClick={toggle}>
        <img src="./icon-close.svg" alt="" />
      </button>
    </nav>
  );
}
