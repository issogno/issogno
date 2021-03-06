/**
 * Copyright (C) 2022 Issogno Music
 */

import { Box, Text } from 'grommet'
import demoPortrait from '../../img/demo_portrait.png'
import { PageLayout } from '../../components/PageLayout';
import { DecoratedCard } from '../../components/DecoratedCard';


const adrianTitle = 'Adrián S. Meléndez de León'
const adrianCV = <>
  <Text margin='xxsmall' >Lugar de Nacimiento: Ciudad de México, 1970</Text>
  <Text margin='xxsmall'>Egresado como Lic. en Música del INBA (Instituto Nacional de Bellas Artes)</Text>
  <Text margin='xxsmall'>Director musical y tecladista de varios artistas como: Gloria Trevi, Juan Gabriel, Alejandra Guzmán, Enrique iglesias, Alejandro Fernández.</Text>
  <Text margin='xxsmall'>Productor Musical con 25 años de experiencia creando empresas legalmente constituidas y estudios de grabación en diferentes puntos estratégicos de la república mexicana, (Cancún, Villahermosa, Cuidad de México y Monterrey) </Text>
  <Text margin='xxsmall'>Actualmente trabaja en conjunto con la empresa Presonus para el crecimiento de la marca en Latinoamérica conocido como “Shido One”</Text>
</>;

export const Members = () => (
  <PageLayout>
    <Box direction="row">
      <Box pad={{ bottom: 'none', top: 'small', left: 'large', right: 'large' }}>
        <DecoratedCard headerText={adrianTitle} image={demoPortrait} imageRatio='1/3' textRatio='2/3'>
          {adrianCV}
        </DecoratedCard>
      </Box>
      <Box pad={{ bottom: 'none', top: 'small', left: 'large', right: 'large' }}>
        <DecoratedCard headerText={adrianTitle} image={demoPortrait} imageRatio='1/3' textRatio='2/3'>
          {adrianCV}
        </DecoratedCard>
      </Box>
    </Box>
    <Box direction="row">
      <Box pad={{ bottom: 'none', top: 'small', left: 'large', right: 'large' }}>
        <DecoratedCard headerText={adrianTitle} imageThenText={false} image={demoPortrait} imageRatio='1/3' textRatio='2/3'>
          {adrianCV}
        </DecoratedCard>
      </Box>
      <Box pad={{ bottom: 'none', top: 'small', left: 'large', right: 'large' }}>
        <DecoratedCard headerText={adrianTitle} imageThenText={false} image={demoPortrait} imageRatio='1/3' textRatio='2/3'>
          {adrianCV}
        </DecoratedCard>
      </Box>
    </Box>
  </PageLayout>
);
