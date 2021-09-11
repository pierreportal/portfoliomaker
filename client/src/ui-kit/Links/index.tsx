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

export const InlineLInk = styled.a`
    cursor: pointer;
    color: #485dff;
    font-weight: 500;
    padding: 5px 0;
    border-bottom: solid 1px #485dff;
    transition: all 200ms ease;
    &:hover {
        color: ${fontBlack};
        border-bottom: solid 1px ${fontBlack};
    }
`;