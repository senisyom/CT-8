export interface INewQuote {
  id?: string;
  category: string;
  authour: string;
  text: string;
}

export interface QuotesAPI {
  [id: string]: INewQuote;
}