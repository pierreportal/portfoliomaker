import styled, { keyframes } from 'styled-components';
import { Row } from '../../../ui-kit';

const slideLeft = keyframes`
    0% {
        transform: translateX(150%);
        opacity: 0;
    }
    50% {
        transform: translateX(-10px);
        opacity: 1;
    }
    100% {
        transform: translateX(0px);
    }
`;

export const Tip = styled(Row)`
    font-weight: 500;
    position: absolute;
    background-color: #ffc1c1;
    color: #37345a;
    z-index: 1000;
    padding: 20px;
    border-radius: 5px;
    top: 65px;
    right: 20px;
    display: block;
    animation: ${slideLeft} 0.5s ease 1;
`;