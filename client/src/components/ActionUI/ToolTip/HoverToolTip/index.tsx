import React from 'react';
import { ToolTipContainer, SmallToolTip } from './styles'

interface IHoverToolTipProps {
    children: React.ReactNode,
    content: string,
    position: 'left' | 'right' | 'top' | 'bottom'
    clickCallback?: () => void;
}

export const HoverToolTip: React.FunctionComponent<IHoverToolTipProps> = ({ children, content, position, clickCallback}) => {

    const [displayTip, setDisplayTip] = React.useState<boolean>(false);

    const handleMouseOver = (isOver: boolean) => setDisplayTip(isOver);

    return <ToolTipContainer onMouseEnter={() => handleMouseOver(true)}
        onMouseLeave={() => handleMouseOver(false)}>
            { children }
            { displayTip && <SmallToolTip position={position} onClick={clickCallback} clickable={!!clickCallback}>{ content }</SmallToolTip> }
    </ToolTipContainer>
}