import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { fontBlack } from '../../../ui-kit';

export const SimpleNavLink = styled(NavLink)`
    color: inherit;
    text-decoration: none;
    padding:5px;

    &.active {
        border-bottom: solid 2px ${fontBlack}
    }
`;