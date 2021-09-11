import React from 'react';
import { FullPageCenterContent } from '../ui-kit'

interface IListOfProjectsProps {
    changeColor: () => void;
}

export const ListOfProjects: React.FunctionComponent<IListOfProjectsProps> = ({ changeColor }) => {

    React.useEffect(() => {
        changeColor()
    }, []);

    return <FullPageCenterContent margin={10}>
        <h2>My Projects</h2>
    </FullPageCenterContent>;
}