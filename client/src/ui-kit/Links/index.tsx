import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { fontBlack } from '../colors'

export const SimpleNavLink = styled(NavLink)`
    color: ${fontBlack};
    text-decoration: none;
    padding:5px;

    &.active {
        border-bottom: solid 2px ${fontBlack}
    }
`;


export const MainAppNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    padding:5px;

    &.active {
        border-bottom: solid 2px white
    }
`;