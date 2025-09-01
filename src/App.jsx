import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/CardList';

function App() {

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState();


  useEffect ( () => {

    fetch('https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10')
    .then((res) => res.json())
    .then((datos) => setBooks(datos.docs))
    .catch((error) => setError(error))
    .finally(setLoading(false));

  }, []);

   if(error) return <p>Hay un error: {error}</p>
   if(loading) return <p>Cargando.....</p>

  return (
    <>
       <input 
      type='text'
      placeholder='Busca tu libro'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

      <CardList books={books}></CardList>
    </>
  )
}

export default App