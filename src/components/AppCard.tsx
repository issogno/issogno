/**
 * Copyright (C) 2022 Issogno Music
 */
import { Card, CardHeader, Heading,CardBody, BoxExtendedProps } from 'grommet';
import { PropsWithChildren } from 'react';

export interface AppCardProps extends BoxExtendedProps, PropsWithChildren<unknown> {
    headerText?: string;
    bodyText?: string;
}

export const AppCard = ({ headerText, bodyText, children, ...others }: AppCardProps) => (
  <Card pad="medium" background="issognoCard" gap="xxsmall" {...others}>
    <CardHeader>
      <Heading margin="none" color={'brand'} level={3} >
        {headerText}
      </Heading>
    </CardHeader>
    <CardBody margin="none" >
      {bodyText || children}
    </CardBody>
  </Card>);
