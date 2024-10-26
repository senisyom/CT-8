import { categories } from "../../constants";
import { NavLink } from "react-router-dom";

const QuoteList = () => {
  return (
    <div className="mt-5">
      <ul className="list-group">
        <NavLink className="nav-link mb-3" to="/">
          All
        </NavLink>
        {categories.map((category) => (
          <li className="mb-3 border-bottom" key={category.id}>
            <NavLink className="nav-link" to={"/quotes/" + category.id}>
              {category.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
