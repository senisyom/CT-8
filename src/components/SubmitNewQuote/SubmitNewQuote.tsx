import { useState } from "react";

const SubmitNewQuote = () => {
  const [quote, setQuote] = useState<>();

  return (
    <div>
      <div className="container w-50 mx-auto mt-4">
        <h2 className="mb-4">Submit new quote</h2>
        <form >
          <select className="form-select mb-4" aria-label="Default select example">
            <option disabled selected>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="form-floating mb-4">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            //   value={}
            //   onChange={}
              name="title"
            ></textarea>
            <label htmlFor="floatingTextarea">Author</label>
          </div>

          <div className="form-floating mb-4">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            //   value={}
            //   onChange={}
              name="description"
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
