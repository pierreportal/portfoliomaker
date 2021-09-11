import styled from 'styled-components';
import { Column, fadeIn } from '../../../ui-kit';

interface IFloatingPaletteProps {
    left: number,
    top: number
}

export const FloatingPalette = styled(Column)`
    position: absolute;
    background-color: #ddd;
    padding: 10px;
    border-radius: 7px 7px 7px 0;
    top: ${(props:IFloatingPaletteProps) => props.top - 10 + 'px' || 0};
    left: ${(props:IFloatingPaletteProps) => props.left + 5 + 'px' || 0};
    transform: translateY(-100%);
    z-index: 30;
    animation: ${fadeIn} 0.15s linear 1;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);
` 