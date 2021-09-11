import React, { FunctionComponent } from 'react';
import { ToastNotification } from '../components/ActionUI/Notification'
import { Tips } from '../components/ActionUI/Tips'
import { HeaderToolBar } from '../components/ToolBar/HeaderToolBar';
import { EditorToolBar } from '../components/ToolBar/EditorToolBar';
import { BodyWidthAdjuster } from '../components/ToolBar/BodyWidthAdjuster';
import { MainContext } from '../stateManager';

interface IEditorManagerProps {
    children: React.ReactNode
}

export const EditorManager: FunctionComponent<IEditorManagerProps> = ({ children }) => {

  const {
    toastNotification,
    setToastNotification,
    toastTip,
    setToastTip
  } = React.useContext(MainContext);

  // Editor panel, notification, etc...
  
  return <>
    {toastNotification && <ToastNotification {...toastNotification} close={() => setToastNotification(null)} duration={2500}/>}
    {toastTip && <Tips {...toastTip} close={() => setToastTip(null)}/>}
    <HeaderToolBar/>
    <EditorToolBar/>
    {/* <BodyWidthAdjuster/> */}
    { children }
  </>;
}
