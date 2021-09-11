import styled, { keyframes } from 'styled-components';
import { Row } from '../../../ui-kit';

interface INotificationProps {
    type: string;
}

const drop = keyframes`
    0% {
        transform: translateY(-200%);
        opacity: 0;
    }
    50% {
        transform: translateY(10px);
        opacity: 1;
    }
    100% {
        transform: translateY(0px);
    }
`;

export const Notification = styled(Row)`
    position: relative;
    background-color: ${(props: INotificationProps) => props.type === 'error' ? 'red' : '#caffca'};
    color: ${(props: INotificationProps) => props.type === 'error' ? 'white' : '#008000'};
    z-index: 1000;
    padding: 20px;
    border-radius: 5px;
    top: 35px;
    display: block;
    left: -50%;
    animation: ${drop} 0.5s ease 1;
`;