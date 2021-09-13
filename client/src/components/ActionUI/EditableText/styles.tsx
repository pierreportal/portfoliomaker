import styled from 'styled-components';
import ContentEditable from 'react-contenteditable'
import { ghostBlack, fontBlack } from '../../../ui-kit'
import { ITextComponentCustomStyled } from '../../../types';

interface IEditableTextElement {
}

export const EditableTextElement = styled(ContentEditable)`
    border-bottom: solid 2px ${ghostBlack};
    color: ${(props: ITextComponentCustomStyled & IEditableTextElement) => props.color};
    width: fit-content;
    outline: none;
    cursor: text;
    &~.edit-pen {
        transition: all 200ms ease;
        opacity: .4;
    }
    &:hover {
        border-bottom: solid 2px ${fontBlack};
        background-color: #c7f7e9;
        &~.edit-pen {
            transform: translate(5px, -5px);
            opacity: 1;
        }
    }
    
    &:focus {
        background-color: aquamarine;
        border-bottom: solid 2px ${fontBlack};
        &~.edit-pen {
            display: none
        }
    }
`;