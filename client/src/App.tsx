import React from 'react';
import { StateManager } from './stateManager';
import { MainHeader } from './components/MainHeader';
import { AppContainer } from './ui-kit'
import { AppRouter } from './AppRouter'
import { useQuery, gql} from '@apollo/client';

export const App: React.FunctionComponent = () => {

  const [fullBackgroundColor, setFullBackgroundColor] = React.useState<string>("#eee");

  const CHECK_LOGGED_IN_QUERY = gql`
    query loggedIn {
        loggedIn {
            username
            email
            id
        }
    }`;

  const { data } = useQuery(CHECK_LOGGED_IN_QUERY);

  console.log(data)


  const setColor = (color: string) => setFullBackgroundColor(color)

  return (
    <StateManager loggedInUser={data}>
        <AppContainer backgroundColor={fullBackgroundColor} horizontalAlign={'center'}>
            <MainHeader/>
            <AppRouter setColor={setColor}/>
        </AppContainer>
    </StateManager>
  );
}