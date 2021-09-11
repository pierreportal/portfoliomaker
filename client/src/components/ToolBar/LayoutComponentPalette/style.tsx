import styled from 'styled-components';
import { Column } from '../../../ui-kit';

interface IAbsoluteSideBarProps {
    hidden: boolean
}

export const AbsoluteSideBar = styled(Column)`
    background-color: #ddd;
    position:absolute;
    left:0;
    top: 40px;
    height: calc(100vh - 40px);
    width: 300px;
    z-index: 10;
    padding: 10px;
    transform: translateX(${(props:IAbsoluteSideBarProps) => props.hidden ? '-100%' : '0'});
    transition: transform 200ms ease;
    overflow: scroll
`;

export const PaletteSectionItem = styled.div`
    padding: 10px;
    background-color: #eee;
    display: inline-block;
    height: 50px;
`;