import { useCallback, useEffect, useState } from "react";
import axiosAPI from "../../axiosAPI";
import { QuotesAPI, INewQuote } from "../../types";
import { useParams } from "react-router-dom";
import QuoteList from "../QuoteList/QuoteList";

const QuoteCard = () => {
  const { categoryId } = useParams();
  const [quotes, setQuotes] = useState<INewQuote[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response: { data: QuotesAPI } = await axiosAPI<QuotesAPI>(
        "quotes.json"
      );

      if (response.data) {
        const quotesFromAPI: INewQuote[] = Object.keys(response.data)
          .map((quoteKey) => ({
            ...response.data[quoteKey],
            id: quoteKey,
          }))

        setQuotes(quotesFromAPI);
      } else {
        console.log("Ошибка");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  if (quotes.length === 0) {
    return (
      <>
        <h5>Загрузка</h5>
      </>
    );
  }

  return (
    <div className="container container-sm d-flex gap-3">
      <QuoteList/>
      <div className="card m-4">
        {quotes.map((quote) => (
          (!categoryId || quote.category === categoryId) && (
          <div key={quote.id}>
            <div className="card-header">{quote.category}</div>
            <div className="card-body">
              <h5 className="card-title m-3">{quote.text}</h5>
              <p>- {quote.authour}</p>
            </div>
            <button className="btn btn-primary m-3">Edit</button>
            <button className="btn btn-primary">Delete</button>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default QuoteCard;
