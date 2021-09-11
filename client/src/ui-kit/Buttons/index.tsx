import styled from 'styled-components';

interface ITouchButtonStypeProps {
    color?: string,
    type?: any,
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
        textColor = 'blue';
        borderColor = 'blue';
        bgColor = '#0000ff29';
    } else if(type === 'secondary'){
        textColor = 'green';
        borderColor = 'green';
        bgColor = '#00800026';
    }
    return {textColor, bgColor, borderColor}
}

export const TouchButton = styled.button`
    cursor: pointer;
    background-color: ${(props:ITouchButtonStypeProps) => props.type ? mapTypeToColor(props.type).bgColor :'transparent'};;
    border: solid 1px ${(props:ITouchButtonStypeProps) => props.type ? mapTypeToColor(props.type).borderColor : props.color || 'black'};
    color: ${(props:ITouchButtonStypeProps) => props.type ? mapTypeToColor(props.type).textColor : props.color || 'black'};
    padding: 5px;
    border-radius: 4px;
    min-width: 27px;
    width: fit-content;
    transition: all 200ms ease;
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