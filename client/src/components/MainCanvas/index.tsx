import React from 'react';
import { Router } from '../../router';
import { EditorManager } from '../../editorManager';
import { MainContainer } from '../../ui-kit'

interface IMainCanvasProps {
    changeColor: () => void
}

export const MainCanvas: React.FunctionComponent<IMainCanvasProps> = ({ changeColor }) => {

    React.useEffect(() => changeColor(), []);

    return <EditorManager>
    <MainContainer backgroundColor={'pink'}>
        <Router/>
    </MainContainer>
    </EditorManager>

}