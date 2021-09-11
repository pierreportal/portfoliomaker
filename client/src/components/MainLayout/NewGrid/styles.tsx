import styled from 'styled-components';

interface IGridLayoutProps {
    width: number,
    rowHeight: number
}

export const GridLayout = styled.div`
    margin: auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: ${(props: IGridLayoutProps) => props.width + 'px'};
    min-height: ${(props: IGridLayoutProps) => props.rowHeight + 'px'};
    border: dashed 1px pink;
    height: fit-content;
    padding: 10px;

    &>* {
        border: solid 1px blue;
        height: fit-content;
        width: fit-content
    }
`