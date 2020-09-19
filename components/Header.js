import Style from "../styles/header.module.css";
import Link from "next/link";
function Header() {
  return (
    <div className="header">
      <nav className={Style.nav}>
        <Link href="/">
          <a className={Style.link}>To Do List</a>
        </Link>
        <Link href="/calculator">
          <a className={Style.link}>Calculator</a>
        </Link>
        <Link href="/rickandmorty">
          <a className={Style.link}>Rick And Morty</a>
        </Link>
      </nav>
    </div>
  );
}
export default Header;
