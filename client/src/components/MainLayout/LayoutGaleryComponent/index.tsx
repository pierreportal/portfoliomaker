import React from 'react';
import { ITextComponentCustomStyled } from '../../../types';
import { SimpleFlexGalery, SimpleFlexGaleryItem } from './styles';


interface ILayoutGaleryComponentProps {
    layoutSettings? : any,
    id: string,
    customStyles:ITextComponentCustomStyled
}

export const LayoutGaleryComponent: React.FunctionComponent<ILayoutGaleryComponentProps> = ({ id, layoutSettings }) => {
   

    return <SimpleFlexGalery margin={20}>
        <SimpleFlexGaleryItem></SimpleFlexGaleryItem>
        <SimpleFlexGaleryItem></SimpleFlexGaleryItem>
        <SimpleFlexGaleryItem></SimpleFlexGaleryItem>
    </SimpleFlexGalery>;
}