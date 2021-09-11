import styled from 'styled-components';
import { Row, fontBlack, deepBlue } from '../../ui-kit';
// #333e90
export const MainAppHeader = styled(Row)`
    // background-color: ${deepBlue};
    justify-content: space-between;
    color: white;
    width: 100%;
    height: 35px;
    align-items: center;
    padding: 10px;
    &>div {
        align-items: center;
    }
`;