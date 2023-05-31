import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
        max-width: 40vw;
        margin: auto;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    width: 100%;

    input {
        flex: 1;
        margin-right: 1em;
    }

    @media (min-width: 1024px) {
        max-width: 800px;
        margin: auto;
    }
`;

export const StyledButton = styled.button`
    flex: 0 0 auto;
`;

export const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1em;
    border: none;
`;

export const RadioButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5px;
`;
