/**
 * Copyright (C) 2022 Issogno Music
 */

import { Box, Image } from 'grommet';
import { PropsWithChildren } from 'react';

export interface ImageTextCardProps extends PropsWithChildren<unknown> {
    image: string;
    imageOnLeft?: boolean;
    imageRatio?: string;
    textRatio?: string;
}

/**
 * Component that displays some text and an image side by side
 * @param props Box props plus an image and some options
 */
export const ImageTextCard = ({image, imageOnLeft = true, imageRatio = '1/2', textRatio = '1/2', children, ...boxProps} : ImageTextCardProps) => {
  let imageMarkup;
  if (image) {
    if (typeof image === 'string') {
      imageMarkup = (<Image fill="horizontal" fit="cover" src={(image as string)} />);
    } else {
      imageMarkup = image;
    }
  }
  return (
    <Box justify='end' align='center' direction='row' {...boxProps}>
      {
        imageOnLeft 
          ? <Box basis={imageRatio} justify='center' align='center'>
            {imageMarkup}
          </Box>
          : null 
      }
      <Box basis={textRatio} pad={{horizontal: 'large', vertical: 'large'}}>
        {children}
      </Box>
      {
        !imageOnLeft 
          ? <Box basis={imageRatio} justify='center' align='center'>
            {imageMarkup}
          </Box>
          : null 
      }
    </Box>
  );
};