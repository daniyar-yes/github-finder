import styled from 'styled-components';

export const StyledSearchResults = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
        max-width: 40vw; 
        margin: auto;
    }
`;

export const StyledButtonsGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    padding-bottom: 10px;

    @media (min-width: 768px) {
        max-width: 30vw;
        margin: auto;
    }
`;

export const StyledButton = styled.button`
    width: 50%;
`;

