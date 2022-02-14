/**
 * Copyright (C) 2022 Issogno Music
 */

import { Box, BoxExtendedProps, Footer, Text } from 'grommet';

export const AppFooter = (props: BoxExtendedProps) => {
    
  const year =  new Date().getFullYear();
  return (
    <Footer background="issognoHeader" pad="small">
      <Box justify="end" direction={'row-responsive'} fill={'horizontal'}>
        <Text color={'brand'} >{`Copyright ${year} © Issogno Music - Todos los derechos reservados`}</Text>
      </Box>            
    </Footer>
  );
}
