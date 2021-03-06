import React, { FunctionComponent, createContext } from 'react';
import { IContext, IToastNotification, ITip, IGrid, IRouteProps, IUser } from '../types';
import data from '../fakeData.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {
  gridConfig: userGridConfig,
  mainLayoutComponents,
  layouts,
  routes
} = data as any;

export const MainContext = createContext<IContext>({
  onlineUser: null,
  setOnlineUser: () => {/* set in provider */},
  darkMode: false,
  setDarkMode: () => {/* set in provider */},
  selectedLayoutComponent: [],
  setSelectedLayoutComponent: () => {/* set in provider */},
  toastNotification: null,
  setToastNotification: () => {/* set in provider */},
  toastTip: null,
  setToastTip: () => {/* set in provider */},
  gridConfig: {},
  setGridConfig: () => {/* set in provider */},
  userMainLayout: [],
  setUserMainLayout: () => {/* set in provider */},
  userLayout: [],
  setUserLayout: () => {/* set in provider */},
  userRoutes: [],
  setUserRoutes: () => {/* set in provider */},
  currentView: '',
  setCurrentView: () => {/* set in provider */},
});

interface IStateManagerProps {
    children: React.ReactNode,
    loggedInUser: IUser | null
}

export const StateManager: FunctionComponent<IStateManagerProps> = ({ children, loggedInUser }) => {

  
  // const [onlineUser, setOnlineUser] = React.useState<IUser | null>(loggedInUser)
  const [onlineUser, setOnlineUser] = React.useState<IUser | null>({id:"613e289443e397d045497229", username:"Pipo", email:"pierreportal.mac@gmail.com", password:"sdfs"})
  // React.useEffect(() => console.log(onlineUser), [onlineUser]);


  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const [selectedLayoutComponent, setSelectedLayoutComponent] = React.useState<any[]>([]);
  const [toastNotification, setToastNotification] = React.useState<IToastNotification | null>(null);
  const [toastTip, setToastTip] = React.useState<ITip | null>(null);
  const [gridConfig, setGridConfig] = React.useState<IGrid | {}>(userGridConfig);

  const [userMainLayout, setUserMainLayout] = React.useState<any[]>(mainLayoutComponents);
  const [userLayout, setUserLayout] = React.useState<any[]>(layouts);

  const [userRoutes, setUserRoutes] = React.useState<IRouteProps[]>(routes);

  const [currentView, setCurrentView] = React.useState<string>('home');



  const contextProviderValue: IContext = {
    darkMode,
    setDarkMode,
    selectedLayoutComponent,
    setSelectedLayoutComponent,
    toastNotification,
    setToastNotification,
    toastTip,
    setToastTip,
    gridConfig,
    setGridConfig,
    userMainLayout,
    setUserMainLayout,
    userLayout,
    setUserLayout,
    userRoutes,
    setUserRoutes,
    currentView,
    setCurrentView,
    onlineUser,
    setOnlineUser
  };
  
  return <MainContext.Provider value={ contextProviderValue }>{ children }</MainContext.Provider>;
}
