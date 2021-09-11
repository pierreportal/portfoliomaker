import React from 'react';
import { StateManager } from './stateManager';
import { MainHeader } from './components/MainHeader';
import { AppContainer } from './ui-kit'
import { AppRouter } from './AppRouter'
import { useQuery, gql} from '@apollo/client';

export const App: React.FunctionComponent = () => {

  const [fullBackgroundColor, setFullBackgroundColor] = React.useState<string>("#eee");

  const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    users {
      username
    }
  }
`;

  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  console.log(data)


  const setColor = (color: string) => setFullBackgroundColor(color)

  return (
    <StateManager>
        <AppContainer backgroundColor={fullBackgroundColor} horizontalAlign={'center'}>
            <MainHeader/>
            <AppRouter setColor={setColor}/>
        </AppContainer>
    </StateManager>
  );
}