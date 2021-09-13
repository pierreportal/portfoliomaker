import React from 'react';
import { Switch, Route } from "react-router-dom";
import { softPink, softBlue } from './ui-kit'
import { MainCanvas } from './components/MainCanvas'
import { IRouteProps } from './types';
import { Login, MyProjects, Home } from './views';
import { PrivacyFilter } from './views/PrivacyFilter'
  
export const appRoutes = [
    {
        label: 'Home',
        path: '/',
        exact: true,
        private: false
    },
    {
        label: 'my projects',
        path: '/my-projects',
        exact: true,
        private: true
    },
    {
        // label: 'login',
        path: '/login',
        exact: true,
        private: false
    },
    {
        // label: 'signup',
        path: '/signup',
        exact: true,
        private: false
    },
    {
        label: 'project',
        path: '/project/:id',
        exact: false,
        private: true
    },
]

interface IAppRouterProps {
    setColor: (color:string) => void
}

export const AppRouter: React.FunctionComponent<IAppRouterProps> = ({ setColor }) => {

    const componentMap: any = {
        '/': (isPrivate:boolean) => <PrivacyFilter isPrivate={isPrivate}><Home changeColor={() => setColor('#eee')}/></PrivacyFilter>,
        '/login' : (isPrivate:boolean) => <PrivacyFilter isPrivate={isPrivate}><Login view={'login'} changeColor={() => setColor(softPink)}/></PrivacyFilter>,
        '/signup' : (isPrivate:boolean) => <PrivacyFilter isPrivate={isPrivate}><Login view={'signup'} changeColor={() => setColor(softPink)}/></PrivacyFilter>,
        '/project/:id' : (isPrivate:boolean) => <PrivacyFilter isPrivate={isPrivate}><MainCanvas changeColor={() => setColor('#ddd')}/></PrivacyFilter>, // NO !!!! render ProjectBuilder here
        '/my-projects' : (isPrivate:boolean) => <PrivacyFilter isPrivate={isPrivate}><MyProjects changeColor={() => setColor(softBlue)}/></PrivacyFilter>
    }
    const routes = appRoutes.map((route: IRouteProps) => <Route key={route.path} component={() => componentMap[route.path](route.private)} {...route}/>);

    return <Switch>{routes}</Switch>
};