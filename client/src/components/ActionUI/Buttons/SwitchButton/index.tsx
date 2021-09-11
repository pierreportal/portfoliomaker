import React from 'react';
import { SimpleButton } from '../'

interface ISwitchButtonProps {
    options: {label:string, type?:string}[],
    defaultValue?: string,
    onClickCallback: (value:string) => void;
}

export const SwitchButton: React.FunctionComponent<ISwitchButtonProps> = ({ options, defaultValue, onClickCallback }) => {

    const [selected, setSelected] = React.useState<any>(defaultValue || options[0]);
    const flattedOptions = options.map(o => o.label);

    const handleSwitch = () => {
        const currentValueIndex = flattedOptions.indexOf(selected.label);
        const newValue = options[(currentValueIndex + 1) % options.length];
        setSelected(newValue);
        onClickCallback(newValue.label);
    }

    return <SimpleButton type={selected.type} label={selected.label} onClickCallback={handleSwitch}/>
}