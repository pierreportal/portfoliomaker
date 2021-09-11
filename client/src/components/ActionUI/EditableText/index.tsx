import React from 'react';
import { EditableTextElement } from './styles';
import { IGrid, ITextComponentCustomStyled } from '../../../types';
import { MainContext } from '../../../stateManager';


interface IEditableTextProps {
    tag: string,
    content: string,
    customStyles?: ITextComponentCustomStyled,
    onChange: (value:string) => void;

}

export const EditableText: React.FunctionComponent<IEditableTextProps> = ({ tag, content, onChange, customStyles }) => {

    const {gridConfig, setGridConfig} = React.useContext(MainContext);

    const text = React.useRef(content);

    const handleFocus = () => {
        setGridConfig({...gridConfig as IGrid, isDraggable: false})
    }

    const handleChange = (evt: any) => {
        text.current = evt.target.value;
    };
    
    const handleBlur = () => {
        setGridConfig({...gridConfig as IGrid, isDraggable: true})
        onChange(text.current);
    };

    return <EditableTextElement
        html={`<${tag}>${text.current}</${tag}>`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...customStyles}
    />

}