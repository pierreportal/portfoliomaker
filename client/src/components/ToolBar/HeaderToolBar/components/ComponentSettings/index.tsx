import React from 'react';

interface IComponentSettingsProps {
    component: any
}

export const ComponentSettings: React.FunctionComponent<IComponentSettingsProps> = ({ component }) => {
    console.log(component)
    const { componentType } = component;

    return <></>;
}