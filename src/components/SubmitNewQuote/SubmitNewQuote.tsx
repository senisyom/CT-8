import { useState } from "react";
import { INewQuote } from "../../types";

const initiaStateQuote: INewQuote = {
  id: undefined,
  category: "",
  authour: "",
  text: "",
};
const SubmitNewQuote = () => {
  const [quote, setQuote] = useState<INewQuote>(initiaStateQuote);

  const onChangeField = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setQuote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const onButtonSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newQuote = {
      id: quote.id,
      authour: quote.authour,
      text: quote.text,
      category: quote.category,
    };
    console.log(newQuote);

    setQuote({ category: "", authour: "", text: "" });
  };

  return (
    <div>
      <div className="container w-50 mx-auto mt-4">
        <h2 className="mb-4">Submit new quote</h2>
        <form onSubmit={onButtonSubmit}>
          <select
            className="form-select mb-4"
            aria-label="Default select example"
            name="category"
            value={quote.category}
            onChange={onChangeField}
          >
            <option disabled selected>
              Category
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="form-floating mb-4">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={quote.authour}
              onChange={onChangeField}
              name="authour"
            ></textarea>
            <label htmlFor="floatingTextarea">Author</label>
          </div>

          <div className="form-floating mb-4">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              value={quote.text}
              onChange={onChangeField}
              name="text"
            ></textarea>
            <label htmlFor="floatingTextarea2">Quote text</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitNewQuote;
