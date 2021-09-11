import React from 'react';
import {softPink} from '../ui-kit'

interface ILoginProps {
    setColor: (color: string) => void;
}

export const Login: React.FunctionComponent<ILoginProps> = ({ setColor }) => {

    React.useEffect(() => {
        setColor(softPink)
    }, []);

    return <>Login</>;
}