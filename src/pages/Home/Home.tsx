/**
 * Copyright (C) 2022 Issogno Music
 */
import { Trans, useTranslation } from 'react-i18next';
import {
  Box, Paragraph
} from 'grommet';
import { PageLayout } from '../../components/PageLayout';
import { Hero } from '../../components/Hero';
import { AppCard } from '../../components/AppCard';
import { Link } from 'react-router-dom';

import logo from './../../img/logo_shift_left_xlarge.png';

// eslint-disable-next-line no-multi-str
function TranslatedParagraph({textKey, fill = true}: {textKey: string, fill: boolean}) {
  const { t } = useTranslation();

  return <Paragraph fill={fill} textAlign='justify'>
    {t(textKey as never)}
  </Paragraph>
}

const contactCard = () => 
  <Paragraph fill textAlign='justify'>
    <Trans i18nKey="home-contact-text">
      Puede <Link to="/contact">contactar con nosotros</Link> desde
    </Trans>
  </Paragraph>;

export const Home = () => {
  const { t } = useTranslation();
  return <PageLayout>
    <Box pad="medium" gap="medium" overflow="hidden" >
      <Hero image={logo} >
        <AppCard headerText={t('home-main-title')}>
          {<TranslatedParagraph textKey='home-main-text' fill={false} />}
        </AppCard>
      </Hero>
    </Box>
    <Box direction='row' alignSelf='center' gap="medium" pad='medium'>
      <AppCard headerText={t('home-diverisity-title')}>
        {<TranslatedParagraph textKey='home-diverisity-text' fill={true} />}
      </AppCard>
      <AppCard headerText={t('home-tendencies-title')}>
        {<TranslatedParagraph textKey='home-tendencies-text' fill={true} />}
      </AppCard>
      <AppCard headerText={t('home-contact-title')}>
        {contactCard()}
      </AppCard>
    </Box>
  </PageLayout>
};
