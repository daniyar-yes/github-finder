import { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import GlobalStyles from './components/styles/Global';

const App = () => {
  
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const searchCallback = (results) => {
    setResults(results);
    setHasSearched(true);
  }

  return (
    
    <>
      <GlobalStyles />
      <SearchForm setResults={searchCallback} setIsLoading={setIsLoading} />
      {isLoading ? (
        <p>Loading...</p>
      ) : hasSearched ? (
        results.length > 0 ? <SearchResults results={results}/> : <p>No results found</p>
      ) : (
        <p>Start your search!</p>
      )}
    </>
    
  )
}

export default App
