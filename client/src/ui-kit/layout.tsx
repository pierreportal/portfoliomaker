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
    align-items: ${(props: IColumnStyleProps) => props.verticalAlign || 'none'};
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
    transition: background-color 200ms linear;
    width: 100vw;
    height: 100vh;
`;

interface IMainCOntainerProps {
    backgroundColor?: string,
}

export const MainContainer = styled.div`
    flex:1;
    width: 95%;
    height: 100%;
    border-radius: 3px;
    // padding: 10px;
    // border: dashed 2px ${ghostBlack};
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    background-color: ${(props:IMainCOntainerProps) => props.backgroundColor || 'white'};
    overflow-y: scroll;
    color: ${fontBlack};
    transform: translateY(-40px);
    & .react-grid-item {
        background-color: ${(props:IMainCOntainerProps) => props.backgroundColor || 'white'};
        transition: none
    }
`;

interface IFullPageCenterContentProps {
    centerHorizontally?: boolean
    centerVertically?: boolean
}

export const FullPageCenterContent = styled(Column)`
    justify-content: ${(props:IFullPageCenterContentProps) => props.centerHorizontally ? 'center' : 'none'};
    align-items: ${(props:IFullPageCenterContentProps) => props.centerVertically ? 'center' : 'none'};
    flex: 1;
    width:100%;
    color: ${fontBlack};
    padding: 10px 40px;
    overflow-y: scroll
`;