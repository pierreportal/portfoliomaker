import styled from 'styled-components';
import { Row, ghostBlack } from '../../../ui-kit';

export const HeaderToolBarStyled = styled(Row)`
    transition: all 200ms ease;
    transform: translateY(-55px);
    color: #eee;
    // background-color: ${ghostBlack};
    justify-content: space-between;
    width:100%;
    height: 30px;
    align-items: center;
    padding: 20px 10px;
    // margin-bottom: 10px;
`;