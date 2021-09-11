import React from 'react';
import { Navigator } from '../Navigator';
import { MainAppHeader } from './styles';
import { Row } from '../../ui-kit';
import { appRoutes } from '../../AppRouter';

export const MainHeader: React.FunctionComponent = () => {
    return <MainAppHeader margin={5}>
        
        <Row margin={5}>
            <div>A</div>
            <Navigator routes={appRoutes} main/>
        </Row>

        <Row>
            Profile / login
        </Row>

    </MainAppHeader>
}
