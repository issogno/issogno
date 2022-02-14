/**
 * Copyright (C) 2022 Issogno Music
 */
import { PropsWithChildren } from 'react'
import { Box, BoxExtendedProps, CardHeader, Heading } from 'grommet';
import { AppCard } from './AppCard';

export interface DecoratedCardProps extends PropsWithChildren<unknown>, BoxExtendedProps {
  image: string;
  imageThenText?: boolean;
  headerText?: string;
  imageRatio?: string;
  textRatio?: string;
  direction?: 'row' | 'column';
}

/**
 * Component based on grommet v1 Hero
 * @param props
 */
export const DecoratedCard = ({ headerText, image, imageThenText = true, imageRatio = '2/3', textRatio = '1/3', direction, children, ...others }: DecoratedCardProps) => {
  return (
    <AppCard {...others}>
      <Box justify='end' fill align='stretch' direction={ direction || 'row'}>
        {
          imageThenText
            ? <Box basis={imageRatio} background={{ color: 'black', image: `url(${image})` }} />
            : null
        }
        <Box basis={textRatio} pad={{ horizontal: 'medium' }}>
          <CardHeader pad={{ vertical: 'small' }}>
            <Heading margin="none" color={'brand'} level={3} >
              {headerText || ''}
            </Heading>
          </CardHeader>
          {children}
        </Box>
        {
          !imageThenText
            ? <Box basis={imageRatio} pad={{ vertical: 'large' }} background={{ color: 'black', image: `url(${image})` }} />
            : null
        }
      </Box>
    </AppCard>
  );
}
