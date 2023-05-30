import React, { useState, useEffect } from 'react';

const SearchForm = ({ setResults, setIsLoading }) => {

  const [query, setQuery] = useState('');
  const [queryType, setQueryType] = useState('');
  

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  }

  const handleQueryTypeChange = (e) => {
    setQueryType(e.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}${queryType}`);
      const data = await response.json();
      console.log(data);
      setResults(data.items)
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input type="text" value={query} onChange={handleSearchChange} />
      </label>
    <label>
        <input
            type="radio"
            value=""
            checked={queryType === ''}
            onChange={handleQueryTypeChange} 
        />
    User
    </label>
    <label>
        <input
            type="radio"
            value="+type:org"
            checked={queryType === '+type:org'}
            onChange={handleQueryTypeChange}
        />
        Organization
    </label>

      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default SearchForm;