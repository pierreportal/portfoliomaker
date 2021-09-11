import React from 'react';

interface IDiscreteStateButtonProps {
    active: boolean,
    children: React.ReactNode
}

export const DiscreteStateButton: React.FunctionComponent<IDiscreteStateButtonProps> = ({ active, children }) => {

    //TODO: this is not done and this component is not used yet
    return <>{ children }</>;
}