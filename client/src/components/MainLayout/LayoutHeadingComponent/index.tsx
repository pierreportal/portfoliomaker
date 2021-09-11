import React from 'react';
import { EditableText } from '../../ActionUI/EditableText'
import { ITextComponentCustomStyled } from '../../../types';

interface ILayoutHeadingComponentProps {
    content: any,
    layoutSettings? : any,
    id: string,
    customStyles:ITextComponentCustomStyled
}

export const LayoutHeadingComponent: React.FunctionComponent<ILayoutHeadingComponentProps> = ({ content, id, layoutSettings, customStyles }) => {

    return <EditableText tag={'h2'} content={content} onChange={(value:string) => console.log(value)} customStyles={customStyles}/>
}
