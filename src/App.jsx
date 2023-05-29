import React, { useState, useCallback } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import './App.css'


const App = () => {
  
  const [results, setResults] = useState([]);

  return (
    <>
      <p>Github Search App</p>
      <SearchForm setResults={setResults} />
      {results.length > 0 && <SearchResults results={results} />}
    </>
  )
}

export default App
