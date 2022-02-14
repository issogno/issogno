/**
 * Copyright (C) 2022 Issogno Music
 */
import { PropsWithChildren } from 'react'
import { Box } from 'grommet';

export interface HeroProps extends PropsWithChildren<unknown> {
  image: string;
}

/**
 * Component based on grommet v1 Hero
 * @param props
 */
export const Hero = ({ image, children }: HeroProps) => {

  return (
    <Box justify='end' align='center' direction='row' background={{ color: 'black', image: `url(${image})` }}>
      <Box justify='center' align='center' >
        <Box pad={{ horizontal: 'large', vertical: 'large' }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
