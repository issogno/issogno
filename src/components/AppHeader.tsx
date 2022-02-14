/**
 * Copyright (C) 2022 Issogno Music
 */

import { Anchor, Avatar, Box, BoxExtendedProps, Header, Nav, Text, Tip } from 'grommet';
import { Facebook, Instagram, Linkedin, Send } from 'grommet-icons';
import styled from 'styled-components';
import { IssognoLogoSvg } from '../img/IssognoLogoSvg';

const AnchorWithPadding = styled(Anchor)`
	padding: ${props => '' + props.theme?.global?.edgeSize?.small}
`;

export const AppHeader = (props: BoxExtendedProps) => {
  return (
    <Header background="issognoHeader" pad="small" wrap>
      <Box direction="row" gap="small" >
        <Avatar border={{ color: 'white', size: '2px' }}>
          <IssognoLogoSvg size={{ height: '44px', width: '44px' }} />
        </Avatar>
        <Box direction="row" align="center">
          <Text color="brand" weight="bold">Issogno Music</Text>
        </Box>
      </Box>

      <Nav direction="row">
        <Box direction='row' align="center" wrap>
          <AnchorWithPadding label="Inicio" href="" />
          <AnchorWithPadding label="Servicios" href="#/services" />
          <AnchorWithPadding label="Historia" href="#/history" />
          <AnchorWithPadding label="Miembros" href="#/members" />
          <AnchorWithPadding label="Contacto" href="#/contact" />
        </Box>
      </Nav>
      <Box direction='row' wrap>
        <AnchorWithPadding href="https://www.facebook.com/issogno" target="_blank">
          <Tip content={<Text color="brand">Facebook</Text>}>
            <Facebook color={'brand'} />
          </Tip>
        </AnchorWithPadding>
        <AnchorWithPadding href="https://www.instagram.com/issognomusic" target="_blank">
          <Tip content={<Text color="brand">Instagram</Text>}>
            <Instagram color={'brand'} />
          </Tip>                        
        </AnchorWithPadding>
        <AnchorWithPadding href="https://www.linkedin.com/in/issogno-music" target="_blank">
          <Tip content={<Text color="brand">Linkedin</Text>}>
            <Linkedin color={'brand'} />
          </Tip>                                                
        </AnchorWithPadding>
        <AnchorWithPadding href="https://t.me/+rc534zmZDBQwZjUx" target="_blank">
          <Tip content={<Text color="brand">Telegram</Text>}>
            <Send color={'brand'} />
          </Tip>
        </AnchorWithPadding>
      </Box>
    </Header>
  );
};
