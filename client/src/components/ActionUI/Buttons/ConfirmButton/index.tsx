import React from 'react';
import { SimpleButton } from '../'

interface IConfirmButtonProps {
    label: string,
    confirmMessage: string,
    levels?: ('normal' | 'primary' | 'primary' | 'danger')[],
    onClickCallback: () => void
}

export const ConfirmButton:React.FunctionComponent<IConfirmButtonProps> = ({ label, confirmMessage, levels, onClickCallback }) => {
    
    const [toConfirm, setToConfirm] = React.useState<boolean>(false);

    const handleClick = () => {
        if(!toConfirm) {
            setToConfirm(true);
        } else {
            onClickCallback();
            setToConfirm(false);
        }
    }
    React.useEffect(() => {
        // TODO: add clear timeout
        if(toConfirm) {
            setTimeout(() => {
                setToConfirm(false)
            }, 2500)
        }
    },[toConfirm])

    const buttonLevels = levels || ['normal', 'danger'];

    return <SimpleButton type={toConfirm ? buttonLevels[1] : buttonLevels[0]} label={toConfirm ? confirmMessage : label} onClickCallback={handleClick}/>;
}