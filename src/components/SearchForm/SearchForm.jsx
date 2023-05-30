import { useState } from 'react';
import { StyledForm, InputGroup, StyledButton, StyledLabel, RadioButtonsContainer } from './SearchForm.styled.js'


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
      <StyledLabel>
          Search GitHub Users or Organizations:
          <RadioButtonsContainer>
              <label>
                  <input
                      type="radio"
                      value=""
                      checked={queryType === ''}
                      onChange={handleQueryTypeChange} 
                  />
              Users
              </label>
              <label>
                  <input
                      type="radio"
                      value="+type:org"
                      checked={queryType === '+type:org'}
                      onChange={handleQueryTypeChange}
                  />
                  Organizations
              </label>
          </RadioButtonsContainer>
          <InputGroup>
            <input type="text" value={query} onChange={handleSearchChange} />
            <StyledButton type="submit">Submit</StyledButton>
          </InputGroup>
      </StyledLabel>
    </StyledForm>
    </>
  )
}

export default SearchForm;