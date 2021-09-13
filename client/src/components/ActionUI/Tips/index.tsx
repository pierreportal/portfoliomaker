import React from 'react';
import { Tip } from './styles'

interface ITipsProps {
    message: string,
    close: any
    clickCallback: () => void,
}

export const Tips: React.FunctionComponent<ITipsProps> = ({ message, close, clickCallback }) => {

    return <Tip onClick={clickCallback}>
        {message}
        <div onClick={close}>Got it</div>
        </Tip>
}