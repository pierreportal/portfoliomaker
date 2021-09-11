import React from 'react';
import { AbsoluteSideBar, PaletteSectionItem } from './style'
import { PaletteSection } from './components/PaletteSection'

interface ILayoutComponentPaletteProps {
    show: boolean;
}

export const LayoutComponentPalette:React.FunctionComponent<ILayoutComponentPaletteProps> = ({ show }) => {

    return <AbsoluteSideBar hidden={!show}>
        <PaletteSection title={'Navigations'}>

            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
        
        </PaletteSection>


        <PaletteSection title={'Headings'}>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
        </PaletteSection>
        
        <PaletteSection title={'Texts'}>
            <PaletteSectionItem>a</PaletteSectionItem>
        </PaletteSection>
        
        <PaletteSection title={'Galeries'}>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
            <PaletteSectionItem>a</PaletteSectionItem>
        </PaletteSection>
    </AbsoluteSideBar>;
};