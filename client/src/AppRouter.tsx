import React from 'react';
import { Switch, Route } from "react-router-dom";
import { softPink, softBlue } from './ui-kit'
import { MainCanvas } from './components/MainCanvas'
import { IRouteProps } from './types';
import { Login, ListOfProjects, Home } from './views'
  
export const appRoutes = [
    {
        label: 'Home',
        path: '/',
        exact: true,
    },
    {
        label: 'my projects',
        path: '/my-projects',
        exact: true,
    },
    {
        label: 'login',
        path: '/login',
        exact: true,
    },
    {
        label: 'project',
        path: '/project',
        exact: false,
    },
]

interface IAppRouterProps {
    setColor: (color:string) => void
}

export const AppRouter: React.FunctionComponent<IAppRouterProps> = ({ setColor }) => {

    const componentMap: any = {
        '/': () => <Home changeColor={() => setColor('#eee')}/>,
        '/login' : () => <Login changeColor={() => setColor(softPink)}/>,
        '/project' : () => <MainCanvas changeColor={() => setColor('#eee')}/>,
        '/my-projects' : () => <ListOfProjects changeColor={() => setColor(softBlue)}/>
    }

    const routes = appRoutes.map((route: IRouteProps) => <Route key={route.path} component={componentMap[route.path]} {...route}/>);

    return <Switch>{routes}</Switch>
};