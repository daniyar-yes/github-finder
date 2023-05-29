import React from 'react'

const SearchItem = ({ item }) => (
    <div className="search-item">
      <img src={item.avatar_url} alt={item.login} className="avatar" />
      <div>
        <h2><a href={item.html_url}>{item.login}</a></h2>
        <p>Type: {item.type}</p>
        <p>Id: {item.id}</p>
      </div>
    </div>
  );

  export default SearchItem;