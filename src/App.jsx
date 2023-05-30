import { useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import './App.css'


const App = () => {
  
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <p>Github Search App</p>
      <SearchForm setResults={setResults} setIsLoading={setIsLoading} />
      {isLoading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? ( <SearchResults results={results}/>
      ) : (
        <p>No results found</p>
      )}
    </>
  )
}

export default App
