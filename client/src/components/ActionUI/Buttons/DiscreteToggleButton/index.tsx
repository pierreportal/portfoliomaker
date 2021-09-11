import React from 'react';
import { ToggleButton } from './styles'

interface IDiscreteToggleButtonProps {
    label: string,
    activated?: boolean
}

export const DiscreteToggleButton: React.FunctionComponent<IDiscreteToggleButtonProps> = ({ label, activated }) => {
    const [isOn, setIsOn] = React.useState<boolean>(activated || false);
    return <ToggleButton active={isOn} onClick={() => setIsOn(!isOn)}>{label}</ToggleButton>
}