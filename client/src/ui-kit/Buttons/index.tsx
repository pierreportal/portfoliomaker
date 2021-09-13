import styled from 'styled-components';
import {softBlue, fontBlack, ghostBlack} from '../'

interface ITouchButtonStypeProps {
    color?: string,
    type?: any,
    large?: boolean,
    backgroundColor?: string,
}

const mapTypeToColor = (type:string) => {
    let textColor = 'grey', bgColor = '#80808040', borderColor = 'grey';
    if(type === 'cancel'){
        textColor = '#fff';
        bgColor = '#000';
    } else if(type === 'danger'){
        textColor = '#fff';
        bgColor = 'red';
        borderColor = 'red'
    } else if(type === 'primary'){
        textColor = 'white';
        borderColor = softBlue;
        bgColor = softBlue;
    } else if(type === 'secondary'){
        textColor = fontBlack;
        borderColor = 'transparent';
        bgColor = '#ddd';
    }
    return {textColor, bgColor, borderColor}
}

export const TouchButton = styled.button`
    cursor: pointer;
    background-color: ${(props:ITouchButtonStypeProps) => props.backgroundColor? props.backgroundColor : props.type ? mapTypeToColor(props.type).bgColor :'transparent'};;
    border: solid 1px ${(props:ITouchButtonStypeProps) => props.backgroundColor? props.backgroundColor : props.type ? mapTypeToColor(props.type).borderColor : props.color || 'black'};
    color: ${(props:ITouchButtonStypeProps) => props.color ? props.color : props.type ? mapTypeToColor(props.type).textColor : props.color || 'black'};
    padding: ${(props:ITouchButtonStypeProps) => props.large ? '10px' : '5px'};
    border-radius:  ${(props:ITouchButtonStypeProps) => props.large ? '7px' : '4px'};;
    min-width: 27px;
    width: fit-content;
    transition: all 200ms ease;
    font-weight: bold;
    font-size: ${(props:ITouchButtonStypeProps) => props.large ? '15px' : '15px'};
`;

interface ITinyStateBttonProps {
    active: boolean,
    activeColor?: string,
}
export const TinyStateBtton = styled.button`
    cursor: pointer;
    border: none;
    background-color: ${(props:ITinyStateBttonProps) => props.active ? props.activeColor || 'lightgreen' : 'lightgrey'};
    color: ${(props:ITinyStateBttonProps) => props.active ? 'grey' : 'white'};
`