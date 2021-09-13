import React, { FunctionComponent } from 'react';
import { IRouteProps } from '../../types';
import { MainNavigation, SimpleNavLink } from '../../ui-kit';
import { MainContext } from '../../stateManager';

interface INavigatorProps {
    main?: boolean,
    routes: IRouteProps[],
    margin?: number
}

export const Navigator: FunctionComponent<INavigatorProps> = ({ routes, main, margin }) => {

    const { onlineUser } = React.useContext(MainContext);

    const links = routes
        .filter((route: IRouteProps) => onlineUser ? !!route.label && !['/login', '/signup'].includes(route.path) : !!route.label && !route.private)
        .map((route: IRouteProps) => <SimpleNavLink exact={true} activeClassName="active" key={route.path} to={main ? route.path : '/project' + route.path}>{route.label}</SimpleNavLink>);
    return <MainNavigation margin={margin}>{ links }</MainNavigation>
}

