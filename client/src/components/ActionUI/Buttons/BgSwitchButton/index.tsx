import React from 'react';
import { BgSwitchButtonStyled, BgSwitchButtonItem } from './styles';

interface IBgSwitchButton {
    direction?: string,
    margin?: number,
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
}

export const BgSwitchButton: React.FunctionComponent<IBgSwitchButton> = ({ direction, children, margin }) => {
    
    const [selected, setSelected] = React.useState(0)

    const switchOption = (i:number) => setSelected(i);

    const childrenWithProps = children.map((child, i:number) => React.cloneElement(
       <BgSwitchButtonItem key={i} selected={i === selected} >{ child }</BgSwitchButtonItem>,
        {
            selected: i === selected,
            onClick: () => switchOption(i)
        }
    ));

    return <BgSwitchButtonStyled margin={margin || 5} direction={direction || 'column'}> { childrenWithProps }</BgSwitchButtonStyled>
}