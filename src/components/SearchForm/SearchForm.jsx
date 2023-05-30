import { useState } from 'react';
import { StyledForm, InputGroup, StyledButton, StyledFieldset, RadioButtonsContainer } from './SearchForm.styled.js'


const SearchForm = ({ setResults, setIsLoading }) => {

  const [query, setQuery] = useState('');
  const [queryType, setQueryType] = useState('');
  

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!query.trim()) {
      alert('Search Input is required');
      return;
    }

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
    </>
  )
}

export default SearchForm;