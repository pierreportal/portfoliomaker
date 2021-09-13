import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { MainContext } from '../../../stateManager';

import { CREATE_PROJECT_MUTATION } from './createProjectMutation';
import { GET_MY_PROJECTS } from './getMyProjectsQuery';


interface IApolloMyProjectsProps {
    variables?: any,
    children: React.ReactElement
}

export const ApolloMyProjects: React.FunctionComponent<IApolloMyProjectsProps> = ({ variables, children }) => {

    const { onlineUser } = React.useContext(MainContext);
    
    const [createProject, {data: newProjectData, loading, error}] = useMutation(CREATE_PROJECT_MUTATION, { variables: { ownerId: onlineUser!.id }});

    console.log(error)

    const { data: myProjectsData } = useQuery(GET_MY_PROJECTS, { variables: { ownerId: onlineUser!.id }});

    console.log('myProjectsData:', myProjectsData);
    console.log('newProjectData:', newProjectData);


    const apolloProps = {
        createProject,
        myProjectsData,
        newProjectData
    }

    const childrenWithProps = children && React.cloneElement(children, { apolloProps: { ...apolloProps }});

    return <>{ childrenWithProps }</>
}