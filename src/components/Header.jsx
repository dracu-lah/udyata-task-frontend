import { Link } from "react-router-dom";

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
          <Link to="/">
            <strong>Go to Dashboard</strong>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
