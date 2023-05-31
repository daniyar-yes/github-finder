/* eslint-disable react/prop-types */
import { StyledSearchItem, StyledDescription, StyledAvatar } from './SearchItem.styled.js'
import { useState } from 'react';

const SearchItem = ({ item }) => {
  
  const [followers, setFollowers] = useState(0);
  const [hasFetchedFollowers, setHasFetchedFollowers] = useState(false);

  const fetchFollowers = async () => {
      
      try {
        const response = await fetch(`${item.followers_url}`);
        const data = await response.json();
        console.log(data);
        setFollowers(data.length);
      } catch (error) {
        setFollowers('Try later, reached limit for API of');
          console.error('Error:', error);          
      } finally {
        setHasFetchedFollowers(true);
      }
    
  }
  
  return (
    <StyledSearchItem>
      <StyledAvatar src={item.avatar_url} alt={`Avatar of user ${item.login}`}/>
      <StyledDescription>
        <h2>
          <a href={item.html_url} title={item.login} target="_blank" rel="noreferrer">{item.login}</a>
        </h2>
        <span>ID: {item.id}</span>
        {hasFetchedFollowers
          ? followers < 30
            ? <span>{`${followers} followers`}</span>
            : followers === 30
              ? <span>{`${followers}+ followers`}</span>
              : <span>Try later, API limit exceeded</span>
          : <button onClick={fetchFollowers} aria-label="Show followers">Show Number of Followers</button>}
      </StyledDescription>
    </StyledSearchItem>
  )};

  export default SearchItem;