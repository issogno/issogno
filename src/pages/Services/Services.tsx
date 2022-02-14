/**
 * Copyright (C) 2022 Issogno Music
 */

import {
  Box,
  Grid,
  Paragraph
} from 'grommet';
import { useTranslation } from 'react-i18next';

import { PageLayout } from '../../components/PageLayout';
import { DecoratedCard } from '../../components/DecoratedCard';

import image1 from './services-1.jpg';
import image2 from './services-2.jpg';
import image3 from './services-3.jpg';
import image4 from './services-4.jpg';
import image5 from './services-5.jpg';
import image6 from './services-6.jpg';
import image7 from './services-7.jpg';
import image8 from './services-8.jpg';
import image9 from './services-9.jpg';

const images = [
  image1, image2, image3,
  image4, image5, image6,
  image7, image8, image9
];


export const ServiceShowCase = ({ image, index }: { image: string, index: number }) => {
  const { t } = useTranslation();
  // pad={{ bottom: 'none', top: 'small', left: 'large', right: 'large' }} 
  return <Box>
    {(image)
      ? <DecoratedCard
        height={{min: '20rem'}} 
        flex='grow' 
        direction='row' 
        imageRatio='1/3' 
        textRatio='2/3' 
        key={'DecoratedCard' + index} 
        image={image} 
        headerText={t(('services-' + index + '-title') as never)}>
        { <Paragraph textAlign='justify' fill> 
          {  t(('services-' + index + '-text') as never)  }
        </Paragraph> }
      </DecoratedCard>
      : null}
  </Box>;
}

export const Services = () => {
  return <PageLayout>
    <Grid
      pad={'small'}
      columns={{
        count: 2,
        size: 'auto',
      }}
      gap="small">
      {images.map((image, index) => <ServiceShowCase key={'service'+ index} image={image} index={index + 1} />).filter((item, index) => index !== 5)}
    </Grid>
  </PageLayout>
};
