import { Grommet } from 'grommet';
import {
    HashRouter,
    Route,
    Routes
  } from "react-router-dom";

import { PrimaryPage } from './pages/PrimaryPage/PrimaryPage';
import { Services } from './pages/Services';
import { History } from './pages/History';
import { Contact } from './pages/Contact';
import { Members } from './pages/Members';
import { theme } from './Theme';

const routes = (
  <Grommet theme={theme} full>
    <HashRouter>
        <Routes>
            <Route path={'/'} element={<PrimaryPage/>} />
            <Route path={'/services'} element={<Services/>} />
            <Route path={'/history'} element={<History/>} />
            <Route path={'/contact'} element={<Contact/>} />
            <Route path={'/members'} element={<Members/>} />            
        </Routes>  
    </HashRouter>
  </Grommet>
);

export default routes;
