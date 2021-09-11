import React from 'react';
import { MorphingInput } from '../../../../ui-kit'

interface IButtonTextInputProps {
    label: string,
    placeholder: string,
    widthButton?: number,
    widthInput?: number,
    type?: string,
    onSubmitCallBack: (value:string) => void;
}

export const ButtonTextInput: React.FunctionComponent<IButtonTextInputProps> = ({ label, placeholder, widthButton, widthInput, type:buttonType, onSubmitCallBack }) => {
    const [value, setValue] = React.useState<string>('');
    const [showInput, setShowInput] = React.useState<boolean>(false);

    const handleButtonClick = (show:boolean) => setShowInput(show);

    const handleChange = (e:any) => {
        setValue(e.target.value);
    };

    const submit = (e:any) => {
        onSubmitCallBack(value);
        setShowInput(false);
        setValue('');
        e.target.blur();
    }

    const handleKeyDown = (e:any) => {
        if(e.key === 'Enter') {
            submit(e);
        }
    };

    const element = <MorphingInput
        buttonType={buttonType}
        widthButton={widthButton || 100}
        widthInput={widthInput || 300}
        onBlur={submit}
        onClick={() => handleButtonClick(true)}
        type="text"
        value={showInput ? value : label}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
    />

    return element;
}