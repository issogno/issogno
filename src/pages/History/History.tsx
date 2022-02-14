/**
 * Copyright (C) 2022 Issogno Music
 */

import { Box, CardHeader, Heading, Paragraph } from 'grommet';
import image01 from './image01.jpg';
import { PageLayout } from '../../components/PageLayout';
import { useTranslation } from 'react-i18next';
import { DecoratedCard } from '../../components/DecoratedCard';

const Content = () => {
  const { t } = useTranslation();
  return <>
    <CardHeader>
      <Heading margin='none' color={'brand'} level={3} >
        {t('history-header')}
      </Heading>
    </CardHeader>
    <Paragraph fill textAlign='justify'>{t('history-1')}</Paragraph>
    <Paragraph fill textAlign='justify'>{t('history-2')}</Paragraph>
    <Paragraph fill textAlign='justify'>{t('history-3')}</Paragraph>
  </>
};

export const History = () => {
  return <PageLayout>
    <Box pad="large">
      <DecoratedCard imageThenText={false} image={image01}>
        {Content()}
      </DecoratedCard>
    </Box>
  </PageLayout>
};
