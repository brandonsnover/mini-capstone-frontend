import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="border-solid border-2 border-black p-4 bg-sky-500/50">
        <Link className="hover:bg-sky-500 p-2" to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link className="hover:bg-sky-500 p-2" to="/login">
          Login
        </Link>{" "}
        |{" "}
        <Link className="hover:bg-sky-500 p-2" to="/cart">
          My Cart
        </Link>{" "}
        |{" "}
        <button className="hover:bg-sky-500 p-2">
          <LogoutLink />
        </button>
      </nav>
    </header>
  );
}
