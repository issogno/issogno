/**
 * Copyright (C) 2022 Issogno Music
 */

import styled from 'styled-components';
import background from '../img/background.jpg';

export const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  .page-main {
    background-image: url(${background});
    flex-grow: 1;
  }
`;