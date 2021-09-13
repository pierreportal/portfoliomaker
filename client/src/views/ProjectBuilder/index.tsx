import React from 'react';
import { ApolloProjectBuilder } from './Apollo/ApolloProjectBuilder'
import { Page } from './Page'
import { useParams } from 'react-router-dom';


interface IProjectBuilderProps {
    apolloProps?: any,
    changeColor?: () => void
}

export const ProjectBuilder: React.FunctionComponent<IProjectBuilderProps> = ({ changeColor }) => {

    const { id } = useParams() as any;

    return (
        <ApolloProjectBuilder variables={{projectId: id}}>
            <Page apolloProps={undefined}/>
        </ApolloProjectBuilder>
    )
}