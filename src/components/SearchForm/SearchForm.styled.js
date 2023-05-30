import styled from 'styled-components';
import devices from '../styles/Devices';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputGroup = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const StyledButton = styled.button`
    width: 100%;

@media ${devices.medium} {
  width: 50%;
}

@media ${devices.large} {
  width: 25%;
}
`;

export const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1em;
`;

export const RadioButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
