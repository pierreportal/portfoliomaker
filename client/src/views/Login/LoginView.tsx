import React from 'react';
import { FullPageCenterContent, fontBlack, ghostBlack, Column, Row, InlineLInk } from '../../ui-kit'
import { SimpleButton } from '../../components/ActionUI/Buttons'
import { DiscreteInput } from '../../components/ActionUI'
import { MainContext } from '../../stateManager';
import { ToastNotification } from '../../components/ActionUI/Notification'
import { useHistory } from 'react-router-dom'

interface ILoginProps {
    view: string,
    apolloProps?: any,
    changeColor?: () => void
}

export const LoginView: React.FunctionComponent<ILoginProps> = ({ changeColor, view, apolloProps }) => {

    React.useEffect(() => changeColor && changeColor());
    const history = useHistory();
    const { toastNotification, setToastNotification, setOnlineUser } = React.useContext(MainContext);
    const [ password, setPassword ] = React.useState<string>('');
    const [ email, setEmail ] = React.useState<string>('');
    const { createUser, loginUser, loginData } = apolloProps;

    if(loginData) {
        if(loginData.loginUser ) {
            setOnlineUser(loginData.loginUser);
            history.push('/my-projects')
        } else {
            console.log('Nope')
            // setToastNotification({type:'error', message:'Wrong credentials'})
        }
    }
    
    const handleChangeView = () => {
        if (view === 'login') history.push('/signup') 
        else history.push('/login')
    }

    const handleSubmit = () => {
        if(!password.length || !email.length) {
            setToastNotification({type:'error', message:'All fields are required'})
            return;
        }
        if(view === 'login'){
            loginUser({ variables:{ email, password } });
        } else {
            createUser({ variables:{ email, password } });
        }
    }

    return <>
        {toastNotification && <ToastNotification {...toastNotification} close={() => setToastNotification(null)} duration={2500}/>}
        <FullPageCenterContent centerHorizontally centerVertically margin={50}>
            <h2>Welcome {view === 'login' ? 'back :)' : 'home ;)'}</h2>
            <Column margin={10}>
                <DiscreteInput type={'text'} placeholder="Email" onBlur={setEmail}/>
                <DiscreteInput type={'password'} placeholder="Password" onBlur={setPassword}/>
            </Column>
            <Row margin={10}>
                <SimpleButton type={'primary'} backgroundColor={fontBlack} large label={view === 'login' ? 'log in' : 'Get Started !'} onClickCallback={handleSubmit}/>
                <SimpleButton type={'secondary'} backgroundColor={ghostBlack} large label={view === 'login' ? 'Or create your account' : 'I already have an account'} onClickCallback={handleChangeView}/>
            </Row>
        </FullPageCenterContent>
    </>;
}
