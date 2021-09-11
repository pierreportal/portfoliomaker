import React, { FunctionComponent } from 'react';
import { IRouteProps } from '../../types';
import { MainNavigation, SimpleNavLink } from '../../ui-kit';

interface INavigatorProps {
    main?: boolean,
    routes: IRouteProps[]
}

export const Navigator: FunctionComponent<INavigatorProps> = ({ routes, main }) => {
    const links = routes
        .filter((route: IRouteProps) => !!route.label)
        .map((route: IRouteProps) => <SimpleNavLink exact={true} activeClassName="active" key={route.path} to={main ? route.path : '/project' + route.path}>{route.label}</SimpleNavLink>);
    return <MainNavigation>{ links }</MainNavigation>
}
