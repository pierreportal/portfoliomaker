import React from 'react';
import { FullPageCenterContent, Row, deepBlue, softBlue } from '../../ui-kit';
import { SimpleButton } from '../../components/ActionUI';
import { EditableText } from '../../components/ActionUI/EditableText'
import { HoverToolTip } from '../../components/ActionUI/ToolTip'
import { MainContext } from '../../stateManager';
import { useHistory } from 'react-router-dom';


interface IMyProjectsViewProps {
    apolloProps?: any
    changeColor: any
}

export const MyProjectsView: React.FunctionComponent<IMyProjectsViewProps> = ({ changeColor, apolloProps }) => {

    const { onlineUser } = React.useContext(MainContext);

    const history = useHistory();

    React.useEffect(() => {
        changeColor()
    });

    const { createProject, myProjectsData, newProjectData } = apolloProps;

    const projectsGalery = myProjectsData?.projects.map((project:any) => {
        return <div key={project.id} onClick={() => history.push(`/project/${project.id}`)}>{project.title}</div>
    });

    return <FullPageCenterContent margin={30}>

        <HoverToolTip position={'right'} content={'How should we call you ?'}>

        <h1> Hey <EditableText content={(onlineUser?.username?.length && onlineUser?.username) || 'there'} inline preventReturn onChange={() => true}/>! </h1>
        </HoverToolTip>

        {projectsGalery}

        <Row margin={30} verticalAlign={'center'}>
            <h2>All your projects will appear here. Create your first now !</h2>
            <SimpleButton type={'primary'} backgroundColor={'#d66fa3'} large label={'New project'} onClickCallback={createProject}/>
        </Row>

        <h2>Explore our starter templates</h2>

        <SimpleButton type={'secondary'} backgroundColor={deepBlue} color={softBlue} label={'Log out'} onClickCallback={() => true}/>

    </FullPageCenterContent>;
}