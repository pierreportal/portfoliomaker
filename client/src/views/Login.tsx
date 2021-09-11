import React from 'react';
import { FullPageCenterContent } from '../ui-kit'
import { SimpleButton } from '../components/ActionUI/Buttons'
import { DiscreteInput } from '../components/ActionUI'
import { useMutation } from '@apollo/client'
import { CREATE_USER_MUTATION } from './apollo/createUserMutation';
import { LOGIN_USER_MUTATION } from './apollo/loginUserMutation';
import { MainContext } from '../stateManager';
import { ToastNotification } from '../components/ActionUI/Notification'

interface ILoginProps {
    changeColor: () => void;
}

export const Login: React.FunctionComponent<ILoginProps> = ({ changeColor }) => {

    React.useEffect(() => changeColor(), []);

    const { toastNotification, setToastNotification } = React.useContext(MainContext);

    const [ password, setPassword ] = React.useState<string>('');
    const [ email, setEmail ] = React.useState<string>('');
    const [ mode, setMode ] = React.useState<string>('login');

    const [createUser, {data:signupData, loading:signupLoading, error:signupError}] = useMutation(CREATE_USER_MUTATION);

    const [loginUser, {data:loginData, loading:loginLoading, error:loginError}] = useMutation(LOGIN_USER_MUTATION);

    const handleSubmit = () => {
        if(!password.length || !email.length) {
            setToastNotification({type:'error', message:'All fields are required'})
            return;
        }
        if(mode === 'login'){
            loginUser({ variables:{ email, password } });
        } else {
            createUser({ variables:{ email, password } });
        }
    }

    return <>
        {toastNotification && <ToastNotification {...toastNotification} close={() => setToastNotification(null)} duration={2500}/>}
            <FullPageCenterContent centerHorizontally centerVertically margin={10}>
            <h2>Welcome home</h2>
            <DiscreteInput type={'text'} placeholder="Email" onBlur={setEmail}/>
            <DiscreteInput type={'password'} placeholder="Password" onBlur={setPassword}/>
            <SimpleButton label={'log in'} onClickCallback={handleSubmit}/>
        </FullPageCenterContent>
    </>;
}
