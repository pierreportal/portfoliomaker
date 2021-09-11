import React from 'react';
import { Navigator } from '../Navigator';
import { MainAppHeader } from './styles';
import { Row, oldLadyPurple, InlineLInk } from '../../ui-kit';
import { appRoutes } from '../../AppRouter';
import { SimpleButton } from '../ActionUI/Buttons'

export const MainHeader: React.FunctionComponent = () => {
    return <MainAppHeader margin={5}>
        
        <Row margin={5}>
            {/* <h1>Folio</h1> */}
            <Navigator routes={appRoutes} main margin={15}/>
        </Row>

        <Row margin={7}>
            {/* <InlineLInk>
                Show me around
            </InlineLInk> */}
            <SimpleButton type={'secondary'} large label={"Log in"} onClickCallback={() => false}/>
            <SimpleButton type={'primary'} large label={"Sign up"} backgroundColor={oldLadyPurple} onClickCallback={() => false}/>
        </Row>

    </MainAppHeader>
}
