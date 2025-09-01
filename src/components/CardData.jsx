
const CardData = ({book}) => {

    return (
    <>
        <p>{book.title}</p>
        <p>{book.author_name}</p>
        <p>{book.first_publish_year}</p>
        <button>Agregar lista</button>
    </>
    )
}

export default CardData;