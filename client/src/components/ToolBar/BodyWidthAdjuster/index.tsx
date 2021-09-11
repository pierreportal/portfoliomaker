import React from 'react';
import { WidthIndicator } from './styles';
import { DiscreteDropdown } from '../../ActionUI/Dropdown/DiscreteDropdown';
import { MainContext } from '../../../stateManager';
import { IGrid } from '../../../types';

export const BodyWidthAdjuster : React.FunctionComponent = () => {

    const { gridConfig, setGridConfig } = React.useContext(MainContext);

    const { width } = gridConfig as IGrid;
    const changeGridWidth = (newWidth: string) => {
        setGridConfig({...gridConfig as IGrid, width: newWidth === '900 px' ? 900 : newWidth === '1000 px' ? 1000 : 1200});
    }

    return <WidthIndicator width={width}>
        <DiscreteDropdown selected={width + ' px'} options={['Full page','900 px', '1000 px']} onChange={(newValue: string) => changeGridWidth(newValue)}/>
    </WidthIndicator>
}