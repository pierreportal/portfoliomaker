import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { MainContext } from '../../../stateManager';
import { GET_PROJECT } from './getProjectQuery'



interface IApolloProjectBuilderProps {
    variables?: any,
    children: React.ReactElement
}

export const ApolloProjectBuilder: React.FunctionComponent<IApolloProjectBuilderProps> = ({ variables, children }) => {

    // const { onlineUser } = React.useContext(MainContext);
    
    // const [createProject, {data: newProjectData, loading, error}] = useMutation(CREATE_PROJECT_MUTATION, { variables: { ownerId: onlineUser!.id }});

    // console.log(error)

    const { data: projectData } = useQuery(GET_PROJECT, { variables });


    const apolloProps = {
        projectData
        // createProject,
        // ProjectBuilderData,
        // newProjectData
    }

    const childrenWithProps = children && React.cloneElement(children, { apolloProps: { ...apolloProps }});

    return <>{ childrenWithProps }</>
}