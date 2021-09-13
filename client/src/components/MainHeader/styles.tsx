import styled from 'styled-components';
import { Row, fontBlack, deepBlue } from '../../ui-kit';

// #333e90

interface IMainAppHeaderProps {
    hidden: boolean
}

export const MainAppHeader = styled(Row)`
    transition: transform 200ms ease;
    transform: translateY(${(props:IMainAppHeaderProps) => props.hidden ? '-100%' : '0'});
    justify-content: space-between;
    color: ${deepBlue};
    width: 100%;
    height: 55px;
    align-items: center;
    padding: 10px;
    // box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
    &>div {
        align-items: center;
    }
`;