import React from 'react';
import { Router } from '../../router';
import { EditorManager } from '../../editorManager';
import { MainContainer } from '../../ui-kit'

interface IMainCanvasProps {
    setColor: (color: string) => void
}

export const MainCanvas: React.FunctionComponent<IMainCanvasProps> = ({ setColor }) => {

    React.useEffect(() => setColor('#eee'), []);

    return <EditorManager>
    <MainContainer backgroundColor={'pink'}>
        <Router/>
    </MainContainer>
    </EditorManager>

}