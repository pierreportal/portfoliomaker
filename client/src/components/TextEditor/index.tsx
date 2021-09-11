import React from 'react';
import { TextEditorInput } from './styles'

interface ITextEditorProps {
    height: number,
    width: number
}
 
export const TextEditor: React.FunctionComponent<ITextEditorProps> = ({ height, width }) => {

 const [textContent, setTextContent] = React.useState('');

  return (
      <TextEditorInput contentEditable={true}>
          dfij
      </TextEditorInput>
  );
}
