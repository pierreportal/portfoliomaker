import React from 'react';
import { StateManager } from './stateManager';
import { MainHeader } from './components/MainHeader';
import { AppContainer } from './ui-kit'
import { AppRouter } from './AppRouter'
import { MainContext } from './stateManager';

export const App: React.FunctionComponent = () => {

  // const {fullBackgroundColor} = React.useContext(MainContext);
  const [fullBackgroundColor, setFullBackgroundColor] = React.useState<string>("#eee");

  const setColor = (color: string) => setFullBackgroundColor(color)

  console.log('fullBackgroundColor:', fullBackgroundColor)
  // const [fullBackgroundColor, setFullBackgroundColor] = React.useState<string>("#eee");

  return (
    <StateManager>
        <AppContainer backgroundColor={fullBackgroundColor} horizontalAlign={'center'}>
            <MainHeader/>
            <AppRouter setColor={setColor}/>
        </AppContainer>
    </StateManager>
  );
}