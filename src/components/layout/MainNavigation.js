import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import longslogo from "../../image/longslogo.png";

const MainNavigation = () => {
  const { header } = classes;
  return (
    <header className={header}>
      <div>
        <img style={{ width: "84px" }} src={longslogo}></img>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Ongs</Link>
          </li>
          <li>
            <Link to="/new-ong">Add new Ong</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
