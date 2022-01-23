import { PropsWithChildren } from 'react'
import { Box, Image } from 'grommet';

export interface HeroProps extends PropsWithChildren<any> {
    image: string | JSX.Element;
}

/**
 * Component based on grommet v1 Hero
 * @param props
 */
export const Hero = ({image, children} : HeroProps) => {
    let imageMarkup;
    if (image) {
      if (typeof image === 'string') {
        imageMarkup = (<Image fill="horizontal" fit="cover" src={(image as string)} />);
      } else {
        imageMarkup = image;
      }
    }
    return (
        <Box justify='end' align='center' direction='row'>
        <Box basis='1/2' justify='center' align='center'>
          {imageMarkup}
        </Box>
        <Box basis='1/2' pad={{horizontal: 'large', vertical: 'large'}}>
          {children}
        </Box>
      </Box>
    );
}