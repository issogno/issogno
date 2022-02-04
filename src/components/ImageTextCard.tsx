import { Box, Image } from "grommet";
import { PropsWithChildren } from "react";

export interface ImageTextCardProps extends PropsWithChildren<any> {
    image: string;
    imageOnLeft?: boolean;
    imageRatio?: string;
    textRatio?: string;
}

/**
 * Component that displays some text and an image side by side
 * @param props
 */
 export const ImageTextCard = ({image, imageOnLeft = true, imageRatio = '1/2', textRatio = '1/2', children} : ImageTextCardProps) => {
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