import React from 'react';
import { Notification } from './styles'

interface IToastNotificationProps {
    type: string,
    message: string,
    duration?: number,
    close: any

}

export const ToastNotification: React.FunctionComponent<IToastNotificationProps> = ({ type, message, close, duration }) => {

    React.useEffect(() => {
        setTimeout(() => {
            return close();
        }, duration || 2500)
    }, [close, duration]);

    return <div style={{position: 'absolute', left:'50%'}}><Notification type={type}>{message}</Notification></div>
}