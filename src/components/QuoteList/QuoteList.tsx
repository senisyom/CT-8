import { categories } from "../../constants";

const QuoteList = () => {
  return (
    <div className="mt-5">
      <ul className="list-group">
        {categories.map((category) => (
          <li className="mb-3 border-bottom">{category.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
