import React, { FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import { IRouteProps } from './types';
import { ProjectBuilder } from './views';
import data from './fakeData.json';

const { routes: userRawRoutes, layouts, mainLayoutComponents } = data as any; 

export const routeMap = userRawRoutes.map((route: IRouteProps) => {

    // const pageLayout = layouts.find((l:any) => l.path === route.path);
    
    // return {...route, path: `/project${route.path}`, exact: true, component: () => <Page mainLayout={mainLayoutComponents} pageLayout={pageLayout}/>}
    return {...route, path: `/project/:id${route.path}`, exact: true, component: () => <ProjectBuilder />}

});

const routes = routeMap.map((route: IRouteProps) => <Route key={route.path} {...route}/>);


export const Router: FunctionComponent = () => <Switch>{ routes }</Switch>;
