import { PropsWithChildren } from 'react'
import { Box } from 'grommet';

export interface HeroProps extends PropsWithChildren<any> {
    image: string;
}

/**
 * Component based on grommet v1 Hero
 * @param props
 */
export const Hero = ({image, children} : HeroProps) => {

    return (
      <Box justify='end' align='center' direction='row' background={{color:"black", image: `url(${image})`}}>
        <Box basis='1/2' justify='center' align='center' >
        <Box basis='1/2' pad={{horizontal: 'large', vertical: 'large'}}>
          {children}
        </Box>
         </Box>
     </Box>
    );
}