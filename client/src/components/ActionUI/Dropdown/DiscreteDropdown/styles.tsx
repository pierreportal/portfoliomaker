import styled from 'styled-components';

import { Column } from '../../../../ui-kit';

export const DropDownContainer = styled(Column)`
    position: relative;
    width: 80px;
    text-align: center;
    font-size: 12px;
    `;
    
export const DropDownList = styled(Column)`
    position: absolute;
    left:0;
    background-color: #eee;
    width: 100%;
    border-radius: 4px 4px 0 0;
    z-index: 70;
    top: calc(-100% - 20px)
    `;
    
export const SelectedOption = styled.div `
    cursor: pointer;
    padding: 3px
`;

export const DropDownItem = styled.div `
    padding: 3px;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
    }
`;