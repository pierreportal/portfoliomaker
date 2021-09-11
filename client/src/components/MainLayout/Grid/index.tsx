import React from 'react';
import { GridLayout } from './styles';
import { LayoutComponentStyle } from './styles';
import { AddGridComponentFloatingPalette } from '../../ToolBar/AddGridComponentFloatingPalette'
import { MainContext } from '../../../stateManager';
import { IGrid } from '../../../types';

interface IGridProps {
    children: any,
}
export const Grid: React.FunctionComponent<IGridProps> = ({ children }) => {

    React.useEffect(() => console.log('render gris'), []);

    const {selectedLayoutComponent, setSelectedLayoutComponent, gridConfig} = React.useContext(MainContext);

    const [displayComponentAddTool, setDisplayComponentAddTool] = React.useState<false | {x: number, y: number}>(false);

    const { width:gridWidth, rowHeight, cols, isDraggable } = gridConfig as IGrid;

    const [isDragging, setIsDragging] = React.useState<boolean>(false);

    const handleDragging = (item: any) => {
        console.log('drag::::',item)
        setIsDragging(true);
    }
    const handleStopDragging = (layout:any) => {
        setTimeout(() => setIsDragging(false), 10);
    }

    const componentIsSelected = (component: any) => selectedLayoutComponent?.find((selectedComponent:any) => selectedComponent.id === component.id);

    const selectCompoent = (e: any, component: any) => {
        const { shiftKey } = e;
        const isAlreadySelected = componentIsSelected(component);
        if(isAlreadySelected) return;
        if(shiftKey) {
            const newState = [...selectedLayoutComponent, component];
            setSelectedLayoutComponent(newState);
        } else {
            setSelectedLayoutComponent([component])
        }
    }

    const layout = children && children.map((child:any, index:number) => {
        return {...child.props.layoutSettings, i: String(index)}
    });

    const childrenWithProps = children && children.map((child:any, childIndex:number) => {
        return (
            <LayoutComponentStyle
                key={layout[childIndex].i}
                onClick={(event) => selectCompoent(event, child.props)}
                selected={componentIsSelected(child.props)}
            >
                {child}
            </LayoutComponentStyle>
        );
    });

    const clickedElementIsGrid = (event: any) => {
        return (event?.target as Element | undefined)?.classList?.contains('react-grid-layout') && !(event?.target as Element | undefined)?.classList?.contains('floating-palette')
    }
    const clickedElementIsFloatingPalette = (event: any) => {
        return (event?.target as Element | undefined)?.classList?.contains('floating-palette')
    }
      
    return (
        <div onMouseDown={(event: any) => {
            if (clickedElementIsGrid(event) && !displayComponentAddTool) {
                const {pageX, pageY} = event;
                setDisplayComponentAddTool({x:pageX, y:pageY});
            } else if (clickedElementIsFloatingPalette(event)) {
                setTimeout(() => {
                    setDisplayComponentAddTool(false);
                }, 100)
            } else setDisplayComponentAddTool(false);
        }}>
            {displayComponentAddTool && <AddGridComponentFloatingPalette {...displayComponentAddTool}/>}
            <GridLayout
                width={gridWidth ? gridWidth + 4 : 1200}
                // autoSize
                cols={cols}
                rowHeight={rowHeight}
                margin={[0,0]}
                layout={layout}
                compactType={null}
                isDraggable={isDraggable}
                resizeHandles={['se']}
                onDrag={handleDragging}
                onDragStop={handleStopDragging}
                onResizeStop={() => false}
                >
                { childrenWithProps }
            </GridLayout>
        </div>
    )
};