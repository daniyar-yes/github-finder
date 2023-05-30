import styled from 'styled-components';

export const StyledSearchItem = styled.div`
    display: flex;
    align-items: center;
    margin: 1em 0;
    background-color: #fff;
    width: 100%;
    padding: 1rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    max-width: 100%;
    overflow: hidden;
`;

export const StyledAvatar = styled.img`
        width: 100px;
        height: 100px;
        margin-right: 1em;
`

export const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
`
