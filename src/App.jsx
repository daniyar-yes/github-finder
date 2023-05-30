import { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import GlobalStyles from './components/styles/Global';

const App = () => {
  
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    
    <>
      <GlobalStyles />
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
