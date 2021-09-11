import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { MainContext } from '../stateManager';

interface IPageProps {
    mainLayout: any[],
    pageLayout: any,
}


export const Page: React.FunctionComponent<IPageProps> = ({ mainLayout, pageLayout }) => {

    React.useEffect(() => console.log('render page'), []);
    

    const { userMainLayout, userLayout } = React.useContext(MainContext);
    // const { userMainLayout, userLayout } = { userMainLayout:[], userLayout:[{layoutComponents:[]}]};


    const thisPageLayout = userLayout.find((layout:any) => layout?.id === pageLayout?.id)?.layoutComponents || pageLayout.layoutComponents;

    const thisMainLayout = userMainLayout.length ? userMainLayout : mainLayout;

    // do we need this component or should we render MainLayout directly ?
    // maybe we could wrappe MainLayout in an Apollo component, get the content of the page (feeds etc)
    return <MainLayout layout={[...thisMainLayout, ...thisPageLayout]}/>
};