import React from 'react';
import { EditorToolBarColumn } from './styles';
import { HoverToolTip } from '../../ActionUI/ToolTip'
import { DiscreteToggleButton } from '../../ActionUI/Buttons'


export const EditorToolBar: React.FunctionComponent = () => {
    return <EditorToolBarColumn margin={10}>
        <HoverToolTip content={"Add a heading"} position={'right'}>
            <DiscreteToggleButton label={'n'} activated={false}/>
        </HoverToolTip>
        <HoverToolTip content={"Add text"} position={'right'}>
            <DiscreteToggleButton label={'T'} activated={false}/>
        </HoverToolTip>
        <HoverToolTip content={"Add galery"} position={'right'}>
            <DiscreteToggleButton label={'T'} activated={false}/>
        </HoverToolTip>
        <HoverToolTip content={"Add navigation"} position={'right'}>
            <DiscreteToggleButton label={'o'} activated={false}/>
        </HoverToolTip>
    </EditorToolBarColumn>
}