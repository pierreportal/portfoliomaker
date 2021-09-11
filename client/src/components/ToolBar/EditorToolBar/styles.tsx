import styled from 'styled-components';
import { Column } from '../../../ui-kit';

export const EditorToolBarColumn = styled(Column)`
    position: absolute;
    left: 0;
    display: flex;
    height: calc(100% - 75px);
    background-color: #ddd;
    top: 75px;
    width: 45px;
    padding: 10px
`;