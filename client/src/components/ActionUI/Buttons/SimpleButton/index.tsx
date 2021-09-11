import React from 'react';
import { TouchButton } from '../../../../ui-kit';

interface ISimpleButonProps {
    label: string,
    tip?: string,
    type?: any,
    onClickCallback: () => void
}

export const SimpleButton:React.FunctionComponent<ISimpleButonProps> = ({ label, type, onClickCallback }) => {
    return <TouchButton type={type} onClick={onClickCallback}>{ label.toLowerCase() }</TouchButton>
}