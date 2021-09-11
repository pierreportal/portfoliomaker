import styled from 'styled-components';
import ContentEditable from 'react-contenteditable'
import { ITextComponentCustomStyled } from '../../../types';

export const EditableTextElement = styled(ContentEditable)`
    color: ${(props: ITextComponentCustomStyled) => props.color};
    width: fit-content;
    outline: none;
    cursor: text;

    &:hover {
        background-color: #c7f7e9;
    }
    
    &:focus {
        background-color: aquamarine;
    }
`;