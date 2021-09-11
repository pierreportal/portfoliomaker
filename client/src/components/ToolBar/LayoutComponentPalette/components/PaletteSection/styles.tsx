import styled from 'styled-components';
import { Column } from '../../../../../ui-kit';

export const PaletteSectionStyle = styled.div`

`;
interface IPaletteSectionDorpDownProps {
    open: boolean;
    height: number
}
export const PaletteSectionDorpDown = styled(Column)`
    height: ${(props:IPaletteSectionDorpDownProps) => props.open ? props.height + 'px' : 0};
    transition: height 200ms ease;
    overflow: hidden;
    &>* {
        cursor: pointer;
        opacity: ${(props:IPaletteSectionDorpDownProps) => props.open ? 1 : 0.7};
        transition: opacity 200ms ease, transform 200ms ease;
        width: fit-content;
        user-select: none;
        border: solid 1px black;
        border-radius: 4px;
        &:hover {
            transform: translateX(5px)
        }
    };
`;

export const PaletteSectionHeading = styled.h4`
    cursor: pointer;    
    padding: 10px;
    margin: 5px 0;
    user-select: none;
    border-radius: 4px;
    opacity: 0.7;
    width: fit-content
`;