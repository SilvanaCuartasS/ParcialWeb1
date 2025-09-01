
import CardData from "./CardData";

const CardList = ({books}) => {

    console.log(books);

    return(
        <>
            {books.map((book) => 
            <CardData book={book} key={book.id}/>)}
        </>
    )
}



export default CardList;