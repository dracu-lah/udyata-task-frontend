import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>
            <strong>ProductFetch</strong>
          </li>
        </Link>
      </ul>
      <ul>
        <li>
          <CartIcon />
        </li>

        <li>
          <a
            role="button"
            target="_blank"
            className="secondary"
            href="https://github.com/dracu-lah/udyata-task-frontend"
          >
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
