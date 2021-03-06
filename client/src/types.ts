export interface IContext {
    onlineUser: IUser | null,
    setOnlineUser: (user: IUser) => void;
    darkMode: boolean;
    setDarkMode: (mode: boolean) => void;
    selectedLayoutComponent: any[],
    setSelectedLayoutComponent: (selected: any[]) => void,
    toastNotification: IToastNotification | null,
    setToastNotification: (state: IToastNotification | null) => void,
    toastTip: ITip | null,
    setToastTip: (state: ITip | null) => void,
    gridConfig: IGrid | {},
    setGridConfig: (config:IGrid) => void,
    userMainLayout: any[],
    setUserMainLayout: (layout: any[]) => void,
    userLayout: any[],
    setUserLayout: (layout: any[]) => void,
    userRoutes: IRouteProps[],
    setUserRoutes: (routes:IRouteProps[]) => void,
    currentView: string,
    setCurrentView: (currentView:string) => void,

}

export interface IUser {
    id: string;
    username?: string;
    email: string;
    password?: string
}

export interface IRouteProps {
    label?: string,
    path: string,
    exact?: boolean,
    private?: boolean,
    component?: () => JSX.Element
}

export interface IToastNotification {
    type: string,
    message: string,
}

export interface ITip {
    message: string,
    clickCallback: () => void,
}

export interface IGrid {
    width: number,
    rowHeight: number,
    cols: number,
    isDraggable: boolean
}

export interface ITextComponentCustomStyled {
    color?: string;
    backgroundColor?: string;
    fontStyle?: string
}