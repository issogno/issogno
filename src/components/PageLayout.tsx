/**
 * Copyright (C) 2022 Issogno Music
 */

import { Box } from 'grommet';
import { PropsWithChildren } from 'react'
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

import { StyledPageLayout } from './PageLayout.style'

export const PageLayout = ({children, ...others}: PropsWithChildren<unknown>): JSX.Element => (
  <StyledPageLayout>
    <AppHeader />
    <div className="page-main">
      <Box {...others}>
        {children}
      </Box>
    </div>
    <AppFooter />
  </StyledPageLayout>);
