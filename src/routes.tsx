import { Grommet } from 'grommet';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";

import { PrimaryPage } from './pages/PrimaryPage/PrimaryPage';
import { Services } from './pages/Services';
import { History } from './pages/History';
import { Contact } from './pages/Contact';
import { Members } from './pages/Members';
import { theme } from './Theme';

const DebugRouter = (props: any) => {
    console.log('router triggered');
    return (<Router {...props} />);
};

const routes = (
  <Grommet theme={theme} full>
    <DebugRouter>
        <Routes>
            <Route path={'/'} element={<PrimaryPage/>} />
            <Route path={'/services'} element={<Services/>} />
            <Route path={'/history'} element={<History/>} />
            <Route path={'/contact'} element={<Contact/>} />
            <Route path={'/members'} element={<Members/>} />            
        </Routes>  
    </DebugRouter>
  </Grommet>
);

export default routes;
