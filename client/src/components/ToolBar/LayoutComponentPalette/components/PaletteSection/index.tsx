import React from 'react';
import { PaletteSectionStyle, PaletteSectionDorpDown, PaletteSectionHeading } from './styles'

interface IPaletteSectionProps {
    title: string,
    children: React.ReactNode
}

export function getValidChildren(children: React.ReactNode) {
    return React.Children.toArray(children).filter((child) =>
      React.isValidElement(child),
    ) as React.ReactElement[]
  }

export const PaletteSection: React.FunctionComponent<IPaletteSectionProps> = ({ title, children }) => {

    const [openPalette, setOpenPalette] = React.useState<boolean>(false);

    const NCH = getValidChildren(children);
    const heights = NCH.map(c => {
        const t = c.type as any;
        const styles = t.componentStyle.rules[0];
        const heightFromStyle = new RegExp('height:(.*?)px')
        const h = styles.match(heightFromStyle) && styles.match(heightFromStyle)[0]
        const d = new RegExp('[0-9]+')
        return Number(h.match(d) && h.match(d)[0])
    }).reduce((a,b) => a+b, 0);

    return <PaletteSectionStyle>
        <PaletteSectionHeading onClick={() => setOpenPalette(!openPalette)}>{title} {openPalette ? '-' : '+'}</PaletteSectionHeading>
        <PaletteSectionDorpDown margin={5} open={openPalette} height={heights}>
           { children }
        </PaletteSectionDorpDown>
    </PaletteSectionStyle>
}



