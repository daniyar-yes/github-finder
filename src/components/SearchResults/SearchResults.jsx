// SearchResults.js
import { useState, useEffect } from 'react';
import SearchItem from '../SearchItem/SearchItem';
import { StyledSearchResults, StyledButtonsGroup, StyledButton } from './SearchResults.styled.js'

const SearchResults = ({ results }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(0);
  }, [results]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'});
  }, [currentPage]);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const isLastPage = endIndex >= results.length;
  return (
    <StyledSearchResults>
      <StyledButtonsGroup>
        <StyledButton onClick={handlePrevious} disabled={currentPage === 0} aria-label="Previous">
          Previous Page
        </StyledButton>
        <StyledButton onClick={handleNext} disabled={isLastPage} aria-label="Next">
          Next Page
        </StyledButton>
      </StyledButtonsGroup>
      {results.slice(startIndex, endIndex).map(item => (
        <SearchItem key={item.id} item={item} />
      ))}
      <StyledButtonsGroup>
        <StyledButton onClick={handlePrevious} disabled={currentPage === 0}>
          Previous Page
        </StyledButton>
        <StyledButton onClick={handleNext} disabled={isLastPage}>
          Next Page
        </StyledButton>
      </StyledButtonsGroup>
      </StyledSearchResults>
  );
};

export default SearchResults;
