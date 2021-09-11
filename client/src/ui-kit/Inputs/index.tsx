import styled from 'styled-components';

interface IMorphingInputStypeProps {
    color?: string,
    widthButton: number,
    widthInput: number,
    buttonType?: string
}

const mapTypeToColor = (type:string) => {
    let textColor = '#000', bgColor = '#80808040', borderColor = '#000';
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

export const MorphingInput = styled.input`
    cursor: pointer;
    background-color: ${(props:IMorphingInputStypeProps) => props.buttonType ? mapTypeToColor(props.buttonType).bgColor : 'transparent'};
    border: solid 1px ${(props:IMorphingInputStypeProps) => props.buttonType ? mapTypeToColor(props.buttonType).borderColor : props.color || 'black'};
    color: ${(props:IMorphingInputStypeProps) => props.buttonType ? mapTypeToColor(props.buttonType).textColor : props.color || 'black'};
    padding: 5px;
    border-radius: 4px;
    width: ${(props:IMorphingInputStypeProps) => props.widthButton + 'px' || 'auto'};
    transition: all 200ms ease;
    margin-right: 5px;
    display: inline-block;

    &:focus {
        width: ${(props:IMorphingInputStypeProps) => props.widthInput + 'px' || 'auto'};
        border-radius: 0;
        border: none;
        color: black;
        background: #eee;
        outline: none
}
`;