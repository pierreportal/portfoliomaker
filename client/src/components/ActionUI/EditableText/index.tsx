import React from 'react';
import { EditableTextElement } from './styles';
import { FaPen } from 'react-icons/fa';
import { IGrid, ITextComponentCustomStyled } from '../../../types';
import { MainContext } from '../../../stateManager';
import { Row, fontBlack } from '../../../ui-kit'


interface IEditableTextProps {
    tag?: string,
    content: string,
    customStyles?: ITextComponentCustomStyled,
    onChange: (value:string) => void;
    preventReturn?: boolean;
    inline?: boolean;

}

export const EditableText: React.FunctionComponent<IEditableTextProps> = ({ tag, content, onChange, customStyles, preventReturn, inline }) => {

    const {gridConfig, setGridConfig} = React.useContext(MainContext);

    const text = React.useRef(content);

    const handleFocus = () => {
        setGridConfig({...gridConfig as IGrid, isDraggable: false})
    }

    const handleChange = (evt: any) => {
        text.current = evt.target.value;
    };
    
    const handleKeys = (e:any) => {
        const { key } = e;
        if(preventReturn && key === 'Enter') {
            e.preventDefault();
            handleBlur();
        }
    }
    
    const handleBlur = () => {
        setGridConfig({...gridConfig as IGrid, isDraggable: true})
        onChange(text.current);
    };

    const html = tag ? `<${tag}>${text.current}</${tag}>` : text.current;

    return <Row margin={10} style={{display: inline ? 'inline-block' : 'default', position: 'relative'}}>
    <EditableTextElement
        html={html}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeys}
        {...customStyles}
    />
    <div className="edit-pen" style={{position: 'absolute', top: '-50%', right:0, width: '10px', zIndex:100}}>
        <FaPen size={10} fill={fontBlack}/>
    </div>
    </Row>

}