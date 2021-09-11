import styled from 'styled-components';
import { fontBlack, ghostBlack } from '../../../../ui-kit'

export const DiscreteInputStyled = styled.input`
    border: none;
    background: none;
    border-radius: 10px;
    width: fit-content;
    padding: 10px;
    font-size: 20px;
    text-align: center;
    outline: none;
    color: ${fontBlack};
    font-weight: bold;
    &::placeholder {
        color: ${ghostBlack}
    }
`;