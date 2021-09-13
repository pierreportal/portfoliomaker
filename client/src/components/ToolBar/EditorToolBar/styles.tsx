import styled from 'styled-components';
import { Column, ghostBlack } from '../../../ui-kit';

export const EditorToolBarColumn = styled(Column)`
    position: absolute;
    left: 0;
    display: flex;
    height: calc(100% - 40px);
    background-color: ${ghostBlack};
    color: #eee;
    top: 40px;
    width: 45px;
    padding: 10px;
    transform: translateX(-100%)
`;