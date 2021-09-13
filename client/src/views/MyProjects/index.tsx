import React from 'react';
import { ApolloMyProjects } from './Apollo/ApolloMyProjects'
import { MyProjectsView } from './MyProjectsView'

interface IMyProjectsProps {
    apolloProps?: any,
    changeColor?: () => void
}

export const MyProjects: React.FunctionComponent<IMyProjectsProps> = ({ changeColor }) => {

    return (
        <ApolloMyProjects>
            <MyProjectsView apolloProps={undefined} changeColor={changeColor}/>
        </ApolloMyProjects>
    )
}