import { StyledSearchItem, StyledDescription, StyledAvatar } from './SearchItem.styled.js'

const SearchItem = ({ item }) => (
    <StyledSearchItem>
      <StyledAvatar src={item.avatar_url} alt={`Avatar of user ${item.login}`}/>
      <StyledDescription>
        <h2><a href={item.html_url} title={item.login}>{item.login}</a></h2>
        <span>Type: {item.type}</span>
        <span>Id: {item.id}</span>
      </StyledDescription>
      
    </StyledSearchItem>
  );

  export default SearchItem;