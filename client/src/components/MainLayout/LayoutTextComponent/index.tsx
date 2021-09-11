import React from 'react';
import { EditableText } from '../../ActionUI/EditableText'
// import { PinsControls } from './components/PinsControls';
import { ITextComponentCustomStyled } from '../../../types';


interface ILayoutTextComponentProps {
    content: any,
    layoutSettings? : any,
    id: string,
    customStyles:ITextComponentCustomStyled
}

export const LayoutTextComponent: React.FunctionComponent<ILayoutTextComponentProps> = ({ content, id, layoutSettings }) => {

    return <EditableText tag={'p'} content={content} onChange={(value:string) => console.log(value)}/>
}