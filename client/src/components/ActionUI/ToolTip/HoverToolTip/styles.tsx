import styled, {css} from 'styled-components';
import { fadeIn } from '../../../../ui-kit'

interface ToolTipStypeProps {
    clickable?: boolean;
    position?: any;
}

const gettranslateX = (position: string) => {
    if (position === 'left') return '-104%';
    else if (position === 'right') return '10px';
    else if (position === 'bottom') return '0';
}

const gettranslateY = (position: string) => {
    if (position === 'left') return '0';
    else if (position === 'right') return '0';
    else if (position === 'bottom') return '130%';
}
const getPosition = (position: string) => {
    if (position === 'left') return 'absolute';
    else if (position === 'right') return '';
    else if (position === 'bottom') return 'absolute';
}

const getCarretPosition = (position: string) => {
    if (position === 'left') return css`
        right: -4px;
        top: 8px;
    `;
    else if (position === 'right')  return css`
        left: -4px;
        top: 8px;
    `;
    else if (position === 'bottom')  return css`
        left: calc(50% - 5px);
        top: -4px;
    `;
}

export const SmallToolTip = styled.div`
    cursor: ${(props:ToolTipStypeProps) => props.clickable ? 'pointer' : 'default'};
    width: max-content;
    padding: 5px 10px;
    background-color: black;
    border-radius: 5px;
    color: #ddd;
    transform: translateX(${(props:ToolTipStypeProps) => gettranslateX(props.position)})
                translateY(${(props:ToolTipStypeProps) => gettranslateY(props.position)});


    position: ${(props:ToolTipStypeProps) => getPosition(props.position)};
    font-size: 13px;
    z-index: 1;
    animation: ${fadeIn} 0.15s linear 1;
    &:after {
        content: "";
        ${(props:ToolTipStypeProps) => getCarretPosition(props.position)};
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: black;
        transform: rotate(45deg);
      }
`;

export const ToolTipContainer = styled.div`
    display: flex;
    flex-direction: ${(props:ToolTipStypeProps) => props.position === 'bottom' ? 'column' : 'row'};
    position: relative;
    align-items: center;
    width: fit-content;
    justify-content: center;
`;