/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SearchResults from '../SearchResults/SearchResults.jsx';
import { 
  StyledForm, 
  InputGroup, 
  StyledButton, 
  StyledFieldset, 
  RadioButtonsContainer } from './SearchForm.styled.js'


const SearchForm = () => {

  const [query, setQuery] = useState('');
  const [queryType, setQueryType] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { query: routeQuery } = useParams();

  useEffect(() => {
    if (routeQuery) {
      setQuery(decodeURIComponent(routeQuery));
    }
  }, [routeQuery]);

  const handleSearchChange = (e) => {
    if (e.target.value.length <= 250) {
    setQuery(e.target.value);
  } else {
    alert('Search Query Should Not Exceed 250 characters')
  }
}

  const handleQueryTypeChange = (e) => {
    setQueryType(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      alert('Search Input is required');
      return;
    }

    navigate(`/search/${encodeURIComponent(query)}`);
    fetchResults();
  }

  const fetchResults = async () => {
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
    <main>
    <StyledForm onSubmit={handleSubmit}>
      <StyledFieldset>
        <legend>Search for GitHub Users or Organizations:</legend>
          <RadioButtonsContainer>
                  <input
                      type="radio"
                      id="user"
                      name="userType"
                      value=""
                      checked={queryType === ''}
                      onChange={handleQueryTypeChange} 
                  />
                  <label htmlFor="user">
                     Users
                  </label>
              
                  <input
                      type="radio"
                      id="org"
                      name="orgType"
                      value="+type:org"
                      checked={queryType === '+type:org'}
                      onChange={handleQueryTypeChange}
                  />
                  <label htmlFor="org">
                    Organizations
                  </label>
          </RadioButtonsContainer>
          <InputGroup>
            <label htmlFor='searchInput'>Search:</label>
            <input type="text" id="searchInput" value={query} onChange={handleSearchChange} />
            <StyledButton type="submit" aria-label='submit'>Submit</StyledButton>
          </InputGroup>
      </StyledFieldset>
    </StyledForm>
    {isLoading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <SearchResults results={results} />
      ) : (
        <p>No results found</p>
      )}
      </main>
    </>
  )
}

export default SearchForm;