import React from 'react';
import { IRouteProps, ITextComponentCustomStyled } from '../../../types';
import { SimpleNavLink } from './styles';
import { MainContext } from '../../../stateManager';


interface ILayoutNavigationComponentProps {
    layoutSettings? : any,
    id: string,
    customStyles:ITextComponentCustomStyled
}

export const LayoutNavigationComponent: React.FunctionComponent<ILayoutNavigationComponentProps> = ({ id, layoutSettings }) => {
    const { userRoutes } = React.useContext(MainContext);
    const links = userRoutes
        .filter((route: IRouteProps) => !!route.label)
        .map((route: IRouteProps) => <SimpleNavLink exact={true} activeClassName="active" key={route.path} to={'/project' + route.path}>{route.label}</SimpleNavLink>);

    return <>{links}</>;
}