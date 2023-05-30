import { useState } from 'react';
import { StyledForm, InputGroup, StyledButton, StyledLabel, RadioButtonsContainer } from './SearchForm.styled.js'


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
    <StyledForm onSubmit={handleSubmit}>
      <RadioButtonsContainer>
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
    </RadioButtonsContainer>
    <StyledLabel>
        Search:
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