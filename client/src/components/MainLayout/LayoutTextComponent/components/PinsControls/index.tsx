import React from 'react';
import { TinyStateBtton } from '../../../../../ui-kit'
import { PinsControlsStyle } from './styles'
// import { DiscreteStateButton } from '../../../../ActionUI/Buttons'

interface IPinsControlsProps {
    isLocked: boolean,
    isMainLayout: boolean,
}

export const PinsControls: React.FunctionComponent<IPinsControlsProps> = ({ isLocked, isMainLayout }) => {

    return <PinsControlsStyle>
        <TinyStateBtton active={isLocked} activeColor={'lightblue'}>{'a'}</TinyStateBtton>
        <TinyStateBtton active={isMainLayout} activeColor={'lightcoral'}>{'b'}</TinyStateBtton>
    </PinsControlsStyle>;
}