import React from 'react';
import { Navigator } from '../Navigator';
import { MainAppHeader } from './styles';
import { Row, oldLadyPurple, InlineLInk } from '../../ui-kit';
import { appRoutes } from '../../AppRouter';
import { SimpleButton } from '../ActionUI/Buttons'
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../stateManager';

export const MainHeader: React.FunctionComponent = () => {

    const { currentView, onlineUser } = React.useContext(MainContext);


    let history = useHistory();

    return <MainAppHeader hidden={currentView === 'project-editor'} margin={5}>
        
        <Row margin={5}>
            {/* <h1 onClick={() => history.push('/')}>F.</h1> */}
            {/* <img src="../../logo.png" alt="folio" /> */}

            {/* <div style={{backgroundImage: 'url(../../../logo.png)', width: '100px', height: '100px'}}></div> */}

            {onlineUser && <Navigator routes={appRoutes} main margin={15}/>}
        </Row>
        {currentView !== 'login' && !onlineUser && <Row margin={7}>
            {/* <InlineLInk>
                Show me around
            </InlineLInk> */}
            <SimpleButton type={'secondary'} large label={"Log in"} onClickCallback={() => history.push("/login")}/>
            <SimpleButton type={'primary'} large label={"Sign up"} backgroundColor={oldLadyPurple} onClickCallback={() => history.push("/signup")}/>
        </Row>}

    </MainAppHeader>
}
 