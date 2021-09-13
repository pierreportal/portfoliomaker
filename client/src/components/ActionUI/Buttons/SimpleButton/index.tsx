import React from 'react';
import { TouchButton } from '../../../../ui-kit';

interface ISimpleButonProps {
    label: string,
    tip?: string,
    type?: any,
    large?: boolean,
    backgroundColor?: string,
    color?: string,
    onClickCallback: () => void
}

export const SimpleButton:React.FunctionComponent<ISimpleButonProps> = ({ label, type, large, backgroundColor, color, onClickCallback }) => {
    return <TouchButton backgroundColor={backgroundColor} color={color} large={large} type={type} onClick={onClickCallback}>{ label.toLowerCase() }</TouchButton>
}