import styled from 'styled-components';
import RGL, { WidthProvider } from 'react-grid-layout';
import { fontBlack } from '../../../ui-kit'

interface IGridLayoutProps {
    width: number | null,
}

export const GridLayout = styled(WidthProvider(RGL))`
    margin-right: auto;
    margin-left: auto;
    min-height: calc(100vh - 100px);
    width: ${(props: IGridLayoutProps) => props.width ? props.width + 'px' : 'auto'};
    background: transparent;
    transition: all 400ms ease;
    
    &:hover {
        background-image: radial-gradient(${fontBlack} 1px, transparent 1px);
        background-position: 0 0;
        background-size: 50px 50px;
        height: 200px;
    }
    .react-grid-item.react-grid-placeholder {
        border: dashed 2px ${fontBlack};
        background: none;
        opacity: 1;
    }
`;

export const LayoutComponentStyle = styled.div`
    background-color: #fff;
    padding: 10px;
    overflow: hidden;
    cursor: move;
    border: ${(props:{selected:boolean}) => props.selected ? "dashed 2px grey" : "none"};
    
    &:hover {
        transition: all 200ms ease;
        background-color: #eee;
        
        & .react-resizable-handle {
            opacity:0;
        }
    }

    .react-resizable-handle {
        opacity:0;
    }
`;