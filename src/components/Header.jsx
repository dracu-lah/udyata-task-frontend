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
        <li>
          <a role="button" target="_blank" className="secondary" href="https://github.com/dracu-lah/udyata-task-frontend">Github</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
