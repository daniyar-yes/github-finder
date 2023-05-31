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
      <header><h2>Welcome to GitHub Finder!</h2></header>
      <main>
      <SearchForm setResults={searchCallback} setIsLoading={setIsLoading} />
      {isLoading ? (
        <p>Loading...</p>
      ) : hasSearched ? (
        results.length > 0 ? <SearchResults results={results}/> : <p>No results found</p>
      ) : (
        <section>Start your search!</section>
      )}
      </main>
       <footer>
            Daniyar Yeskaliyev © {new Date().getFullYear()}
        </footer>
    </>
    
  )
}

export default App
