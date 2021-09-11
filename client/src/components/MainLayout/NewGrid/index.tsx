import React from 'react';
import { GridLayout } from './styles';
import { IGrid } from '../../../types';
import { MainContext } from '../../../stateManager';

interface INewGridProps {
    children: React.ReactNode,
}

export const NewGrid: React.FunctionComponent<INewGridProps> = ({ children }) => {

    const { gridConfig } = React.useContext(MainContext);
    
    const { width:gridWidth, rowHeight } = gridConfig as IGrid;

    return <GridLayout width={gridWidth} rowHeight={rowHeight}>{ children }</GridLayout>
}