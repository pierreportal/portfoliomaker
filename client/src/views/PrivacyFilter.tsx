import React from 'react';
import { useHistory } from 'react-router-dom';
import { Login } from './';
import { MainContext } from '../stateManager';

interface IPrivacyFilterProps {
    children: React.ReactNode,
    isPrivate: boolean
}

export const PrivacyFilter: React.FunctionComponent<IPrivacyFilterProps> = ({ children, isPrivate }) => {

    const { onlineUser } = React.useContext(MainContext);
    
    const history = useHistory();

    if(isPrivate && !onlineUser) {
        history.push('/login');
        return <Login view={'login'}/>
    }
    return <>{ children }</>;
}