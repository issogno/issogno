import { Anchor, Avatar, Box, BoxExtendedProps, Header, Nav, Text } from "grommet";
import { Facebook, Instagram, Linkedin } from 'grommet-icons';
import styled from 'styled-components';
import { IssognoLogoSvg } from "../img/IssognoLogoSvg";

const AnchorWithPadding = styled(Anchor)`
	padding: ${props => "" + props.theme?.global?.edgeSize?.small}
`;

export const AppHeader = (props: BoxExtendedProps) => {
    return (
        <Header background="issognoHeader" pad="small" wrap>
            <Box direction="row" gap="small" >
                <Avatar border={{ color: "white", size: '2px' }}>
                    <IssognoLogoSvg size={{ height: "44px", width: "44px" }} />
                </Avatar>
                <Box direction="row" align="center">
                    <Text color="brand" weight="bold">Issogno Music</Text>
                </Box>
            </Box>

            <Nav direction="row">
                <Box direction='row' align="center" wrap>
                    <AnchorWithPadding label="Inicio" href="/" />
                    <AnchorWithPadding label="Servicios" href="/Services" />
                    <AnchorWithPadding label="Historia" href="/history" />
                    <AnchorWithPadding label="Miembros" href="/members" />
                    <AnchorWithPadding label="Contacto" href="/contact" />
                </Box>
            </Nav>
            <Box direction='row' wrap>
                    <AnchorWithPadding href="https://www.facebook.com/issogno" target="_blank">
                        <Facebook color={'brand'} />
                    </AnchorWithPadding>
                    <AnchorWithPadding href="https://www.instagram.com/issognomusic" target="_blank">
                        <Instagram color={'brand'} />
                    </AnchorWithPadding>
                    <AnchorWithPadding href="https://www.linkedin.com/in/issogno-music" target="_blank">
                        <Linkedin color={'brand'} />
                    </AnchorWithPadding>
                </Box>
        </Header>
    );
};
