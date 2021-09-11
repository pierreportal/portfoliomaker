import styled from 'styled-components';
import { fontBlack, ghostBlack } from './colors';

interface IColumnStyleProps {
    verticalAlign?: string,
    horizontalAlign?: string,
    margin?: number
}

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props: IColumnStyleProps) => props.horizontalAlign};
    justify-content: ${(props: IColumnStyleProps) => props.verticalAlign};
    & > *:not(:last-child) {
        margin-bottom: ${(props:IColumnStyleProps) => props.margin + 'px' || 0}
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    & > *:not(:last-child) {
        margin-right: ${(props:IColumnStyleProps) => props.margin + 'px' || 0}
    }
`;

interface IAppContainerProps {
    backgroundColor?: string
}

export const AppContainer = styled(Column)`
    background-color: ${(props:IAppContainerProps) => props.backgroundColor || '#eee'};
    // background: repeating-linear-gradient(
    //     -45deg,
    //     ${ghostBlack},
    //     ${ghostBlack} 5px,
    //     ${fontBlack} 3px,
    //     ${fontBlack} 10px
    //   );
    transition: background-color 200ms linear;

    width: 100vw;
    height: 100vh;
`;

interface IMainCOntainerProps {
    backgroundColor?: string,
}

export const MainContainer = styled.div`
    flex:1;
    width: 90%;
    padding: 10px;
    border: dashed 2px ${ghostBlack};
    background-color: ${(props:IMainCOntainerProps) => props.backgroundColor || 'white'};
    overflow-y: scroll;
    color: ${fontBlack};
    & .react-grid-item {
        background-color: ${(props:IMainCOntainerProps) => props.backgroundColor || 'white'};
        transition: none
    }
`;