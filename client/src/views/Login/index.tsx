// export { Login } from './Login'

import React from 'react';
import { ApolloAuth } from './Apollo/ApolloAuth'
import { LoginView } from './LoginView'
import { MainContext } from '../../stateManager';
import { useHistory } from 'react-router-dom'


interface ILoginProps {
    view: string,
    apolloProps?: any,
    changeColor?: () => void
}

export const Login: React.FunctionComponent<ILoginProps> = ({ changeColor, view }) => {

    const history = useHistory();

    const { setCurrentView, onlineUser } = React.useContext(MainContext);

    if(onlineUser) {
        history.push('/my-projects')
    }

    React.useEffect(() => {
        setCurrentView('login')
        return () => setCurrentView('home')
    })

    return (
        <ApolloAuth>
            <LoginView view={view} apolloProps={undefined} changeColor={changeColor}/>
        </ApolloAuth>
    )
}