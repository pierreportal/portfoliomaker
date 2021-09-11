import React from 'react';
import { Switch, Route } from "react-router-dom";
import { MainCanvas } from './components/MainCanvas'
import { IRouteProps } from './types';
import { Login } from './views'

export const appRoutes = [
    {
        label: 'my projects',
        path: '/my-projects',
        exact: true,
        // component: () => <>{'My List of Projects'}</>
    },
    {
        label: 'login',
        path: '/login',
        exact: true,
        // component: () => <Login/>
    },
    {
        label: 'project',
        path: '/project',
        exact: false,
        // component: () => <MainCanvas/>
    },
]


interface IAppRouterProps {
    setColor: (color:string) => void
}

export const AppRouter: React.FunctionComponent<IAppRouterProps> = ({ setColor }) => {

    const componentMap: any = {
        '/my-projects' : () => <>{'My List of Projects'}</>,
        '/login' : () => <Login setColor={setColor}/>,
        '/project' : () => <MainCanvas setColor={setColor}/>

    }

    const routes = appRoutes.map((route: IRouteProps) => <Route key={route.path} component={componentMap[route.path]} {...route}/>);

    return <Switch>{routes}</Switch>
};