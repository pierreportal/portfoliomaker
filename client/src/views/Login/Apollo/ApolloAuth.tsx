import React from 'react';
import { useMutation } from '@apollo/client'
import { CREATE_USER_MUTATION } from './createUserMutation';
import { LOGIN_USER_MUTATION } from './loginUserMutation';

interface IApolloAuthProps {
    variables?: any,
    children: React.ReactElement
}

export const ApolloAuth: React.FunctionComponent<IApolloAuthProps> = ({ variables, children }) => {

    const [createUser, {data:signupData, loading:signupLoading, error:signupError}] = useMutation(CREATE_USER_MUTATION);
    const [loginUser, {data:loginData, loading:loginLoading, error:loginError}] = useMutation(LOGIN_USER_MUTATION);

    const apolloProps = {
        signupData,
        loginData,
        createUser,
        loginUser,
    }

    const childrenWithProps = children && React.cloneElement(children, { apolloProps: { ...apolloProps }});

    return <>{ childrenWithProps }</>
}