// SearchResults.js
import { useState, useEffect } from 'react';
import SearchItem from '../SearchItem/SearchItem';
import { StyledSearchResults } from './SearchResults.styled.js'

const SearchResults = ({ results }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    setCurrentPage(0);
  }, [results]);

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

  return (
    <StyledSearchResults>
      {results.slice(startIndex, endIndex).map(item => (
        <SearchItem key={item.id} item={item} />
      ))}
      <button onClick={handlePrevious} disabled={currentPage === 0}>
        Previous
      </button>
      <button onClick={handleNext}>
        Next
      </button>
      </StyledSearchResults>
  );
};

export default SearchResults;
