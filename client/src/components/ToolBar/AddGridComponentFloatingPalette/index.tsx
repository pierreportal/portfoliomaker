import React from 'react';
import { FloatingPalette } from './styles';
import { DiscreteStateButton } from '../../ActionUI/Buttons'
import { Row } from '../../../ui-kit';

interface IAddGridComponentFloatingPaletteProps {
    x: number,
    y: number
}

export const AddGridComponentFloatingPalette: React.FunctionComponent<IAddGridComponentFloatingPaletteProps> = ({ x, y }) => {
    return <FloatingPalette className={'floating-palette'} top={y} left={x}>
        <Row margin={5}>
            <div className={'floating-palette'} onClick={() => console.log('A')}>A</div>
            <div>B</div>
        </Row>
        <Row margin={5}>
            <div>C</div>
            <div>D</div>
        </Row>
    </FloatingPalette>
}