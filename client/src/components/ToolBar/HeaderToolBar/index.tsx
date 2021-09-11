import React from 'react';
import { HeaderToolBarStyled } from './styles';
import { Row } from '../../../ui-kit';
import { BgSwitchButton, SwitchButton, ConfirmButton, ButtonTextInput } from '../../ActionUI/Buttons';
import { Navigator } from '../../Navigator';
import { HoverToolTip } from '../../ActionUI/ToolTip';
import { MainContext } from '../../../stateManager';
import { ComponentSettings } from './components/ComponentSettings';

interface IHeaderToolBarProps {

}

export const HeaderToolBar: React.FunctionComponent<IHeaderToolBarProps> = () => {

    const {selectedLayoutComponent, userRoutes, setUserRoutes, userLayout, setUserLayout} = React.useContext(MainContext);

    const addNewRoute = (newRoute:string) => {
        const route = {
            label:newRoute,
            path: `/${newRoute.toLowerCase().split(' ').join('-')}`,
        }
        setUserRoutes([...userRoutes, route]);
        setUserLayout([...userLayout, { id:String(Math.random()), path: route.path, layoutComponents:[]}])
    }

    return (<>
            <HeaderToolBarStyled>
                <Row margin={5}>
                    <SwitchButton options={[{label:'preview', type:'secondary'}, {label:'edit', type:'secondary'}]} onClickCallback={(value) => console.log(value)}/>
                    <ConfirmButton label={'Publish'} confirmMessage={'Publish this new version ?'} onClickCallback={() => console.log('publish')}/>
                    {/* undo / redo */}
                    <HoverToolTip content={"Toggle screen / phone view"} position={'bottom'}>
                        <BgSwitchButton direction={'row'} margin={5}>
                            <div>A</div>
                            <div>B</div>
                        </BgSwitchButton>
                    </HoverToolTip>
                    {selectedLayoutComponent.length === 1 && <ComponentSettings component={selectedLayoutComponent[0]}/>}
                </Row>
                <Row margin={5}>
                    <Navigator routes={userRoutes}/>
                    <ButtonTextInput type={'primary'} widthInput={200} widthButton={100} label={'Add new page'} placeholder="/new-page" onSubmitCallBack={(value) => addNewRoute(value)}/>
                </Row>
            </HeaderToolBarStyled>
        </>
    )
}