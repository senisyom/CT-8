import QuoteCard from "../components/QuoteCard/QuoteCard"
import QuoteList from "../components/QuoteList/QuoteList"

const Container = () => {
    return (
        <div className="container container-sm d-flex gap-3">
            <QuoteList />
            <QuoteCard/>
        </div>
    )
}

export default Container