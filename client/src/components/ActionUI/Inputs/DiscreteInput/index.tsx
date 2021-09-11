import React from 'react';
import { DiscreteInputStyled } from './styles';

interface IDiscreteInputProps {
    type?: string
    placeholder: string
    label?: string
    onBlur: (value: string) => void
}

export const DiscreteInput: React.FunctionComponent<IDiscreteInputProps> = ({ type, placeholder, label, onBlur:submitValue }) => {

    const [value, setValue] = React.useState<string>('');
    const [displayedvalue, setDisplayedValue] = React.useState<string>('');

    // const passwordSecretChars = '● ◼︎ ▼ ▶︎ ◀︎ ▲'.split(' ');


    const handleChange = (e: any) => {
        const { value } = e.target;
        setValue(value)
        // if(type === 'password') {
        //     setDisplayedValue([...value].map((_,i) => passwordSecretChars[i % passwordSecretChars.length]).join(''))
        // }
        // else
        setDisplayedValue(value)
    }
    return <DiscreteInputStyled type={type || 'text'} placeholder={placeholder} value={displayedvalue} onChange={handleChange} onBlur={() => submitValue(value)}/>
}