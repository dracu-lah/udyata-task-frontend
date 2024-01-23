import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <strong>ProductFetch</strong>
        </li>
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
