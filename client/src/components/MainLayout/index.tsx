import React from 'react';
import { Grid } from './Grid';
import { LayoutTextComponent } from './LayoutTextComponent';
import { LayoutHeadingComponent } from './LayoutHeadingComponent';
import { LayoutNavigationComponent } from './LayoutNavigationComponent';
import { LayoutGaleryComponent } from './LayoutGaleryComponent';

import { ITextComponentCustomStyled } from '../../types';

interface IMainLayoutProps {
    pageTitle?: string,
    layout: ILayoutComponent[]
}
interface ILayoutComponent {
    id: string,
    layoutSettings: any,
    content: any,
    componentType: string,
    customStyles: ITextComponentCustomStyled
}

export const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({ layout }) => {

    React.useEffect(() => console.log('render layout'), []);

    const mapComponents: any = {
        navigation: (props:ILayoutComponent) => <LayoutNavigationComponent key={props.id} {...props}/>,
        galery: (props:ILayoutComponent) => <LayoutGaleryComponent key={props.id} {...props}/>,
        text: (props:ILayoutComponent, content:any) => <LayoutTextComponent key={props.id} {...props}>{content}</LayoutTextComponent>,
        heading: (props:ILayoutComponent, content:any) => <LayoutHeadingComponent key={props.id} {...props}>{content}</LayoutHeadingComponent>,
        mainTitle: (props:ILayoutComponent, content:any) => <LayoutHeadingComponent key={props.id} {...props}>{content}</LayoutHeadingComponent>
    };

    const layoutToComponents = layout.map((component: ILayoutComponent) => {
        return mapComponents[component.componentType](component, component.content);
    });
    
    return <Grid>{layoutToComponents}</Grid>;
};

