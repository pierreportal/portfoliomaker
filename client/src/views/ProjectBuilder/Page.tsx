import React from 'react';
import { MainLayout } from '../../components/MainLayout';
import { MainContext } from '../../stateManager';
// import { useParams } from 'react-router-dom';
interface IPageProps {
    // mainLayout: any[],
    // pageLayout: any,
    apolloProps?: any,
}


export const Page: React.FunctionComponent<IPageProps> = ({ apolloProps }) => {

    // const { id } = useParams() as any;

    const { projectData } = apolloProps

    console.log('projectData:', projectData)

    // React.useEffect(() => console.log('render page'), []);

    const { setCurrentView, setToastTip } = React.useContext(MainContext);
    
    React.useEffect(() => {
        setCurrentView('project-editor')
        setTimeout(() => setToastTip({message: 'Welcome ! Start by editing the main heading', clickCallback:() => false}), 1000)
        // setTimeout(() => setToastTip({message: 'Welcome ! Start by editing the main heading', clickCallback:() => false}), 1000)
        return () => setCurrentView('home')
    })

    // const { userMainLayout, userLayout } = React.useContext(MainContext);

    // const thisPageLayout = userLayout.find((layout:any) => layout?.id === pageLayout?.id)?.layoutComponents || pageLayout.layoutComponents;

    // const thisMainLayout = userMainLayout.length ? userMainLayout : mainLayout;
    
    // do we need this component or should we render MainLayout directly ?
    // maybe we could wrappe MainLayout in an Apollo component, get the content of the page (feeds etc)

    // return <MainLayout layout={[...thisMainLayout, ...thisPageLayout]}/>
    return <MainLayout layout={[]}/>

};
