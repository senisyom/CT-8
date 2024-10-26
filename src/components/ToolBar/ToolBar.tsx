import { NavLink } from "react-router-dom";

const ToolBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-sm">
        <span className="navbar-brand">Quotes Central</span>

        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/quotes" className="nav-link">
              Quotes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-quote" className="nav-link">
              Submit new quote
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ToolBar;
