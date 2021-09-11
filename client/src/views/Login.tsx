import React from 'react';
import { FullPageCenterContent } from '../ui-kit'
import { SimpleButton } from '../components/ActionUI/Buttons'

interface ILoginProps {
    changeColor: () => void;
}

export const Login: React.FunctionComponent<ILoginProps> = ({ changeColor }) => {

    React.useEffect(() => {
        changeColor()
    }, []);

    return <FullPageCenterContent margin={10}>
        <h2>Welcome home</h2>
        <SimpleButton label={'login'} onClickCallback={() => false}/>
    </FullPageCenterContent>;
}