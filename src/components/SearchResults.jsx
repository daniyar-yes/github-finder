// SearchResults.js
import React, { useState, useEffect } from 'react';
import SearchItem from './SearchItem';

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
    <div>
      {results.slice(startIndex, endIndex).map(item => (
        <SearchItem key={item.id} item={item} />
      ))}
      <button onClick={handlePrevious} disabled={currentPage === 0}>
        Previous
      </button>
      <button onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default SearchResults;
