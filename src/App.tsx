import React from 'react';

import { Grommet } from 'grommet';
import { AppHeader } from './components/AppHeader'
import { IssognoLogoSvg } from './img/IssognoLogoSvg';
import { theme } from './Theme';

function App() {
  return (
    <Grommet theme={theme} full>
      <AppHeader>
      </AppHeader>
      <IssognoLogoSvg size={{ height:"800px", width:"800px" }}/>
    </Grommet>
  );
}

export default App;
