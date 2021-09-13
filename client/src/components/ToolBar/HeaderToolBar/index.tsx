import React from 'react';
import { HeaderToolBarStyled } from './styles';
import { Row } from '../../../ui-kit';
import { SimpleButton, BgSwitchButton, SwitchButton, ConfirmButton, ButtonTextInput } from '../../ActionUI/Buttons';
import { Navigator } from '../../Navigator';
import { HoverToolTip } from '../../ActionUI/ToolTip';
import { MainContext } from '../../../stateManager';
import { ComponentSettings } from './components/ComponentSettings';
import { useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { LaptopIcon, IphoneIcon, fontBlack } from '../../../ui-kit'
import { IoMdEye } from 'react-icons/io';

import { AiFillEye } from 'react-icons/ai';





interface IHeaderToolBarProps {

}

export const HeaderToolBar: React.FunctionComponent<IHeaderToolBarProps> = () => {

    let history = useHistory();


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
                <Row margin={5} verticalAlign={'center'}>
                    <SimpleButton type={'secondary'} label={'Back'} onClickCallback={() => history.push("/my-projects")}/>
                    {/* <SwitchButton options={[{label:'preview', type:'primary'}, {label:'edit', type:'primary'}]} onClickCallback={(value) => console.log(value)}/> */}
                    <IoMdEye fill={fontBlack}/>
                    {/* <ConfirmButton label={'Publish'} confirmMessage={'Publish this new version ?'} onClickCallback={() => console.log('publish')}/> */}
                    {/* undo / redo */}
                    <AiOutlineArrowLeft fill={fontBlack}/>

                    <AiOutlineArrowRight fill={fontBlack}/>


                    <HoverToolTip content={"Toggle screen / phone view"} position={'bottom'}>
                        {/* <BgSwitchButton direction={'row'} margin={5}> */}
                            {/* <div>A</div> */}
                            <LaptopIcon/>
                            <IphoneIcon/>

                            {/* <div>B</div> */}
                        {/* </BgSwitchButton> */}
                    </HoverToolTip>
                    {selectedLayoutComponent.length === 1 && <ComponentSettings component={selectedLayoutComponent[0]}/>}
                </Row>
                <Row margin={5}>
                    <Navigator routes={userRoutes}/>
                    <ButtonTextInput widthInput={150} widthButton={30} label={'+'} placeholder="/new-page" onSubmitCallBack={(value) => addNewRoute(value)}/>
                </Row>
            </HeaderToolBarStyled>
        </>
    )
}