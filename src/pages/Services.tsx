import {
    Box,
    Carousel,
} from 'grommet';
import { PageLayout } from '../components/PageLayout';

import image01 from '../pages/PrimaryPage/image01.png';
import image02 from '../pages/PrimaryPage/image02.png';
import { Hero } from '../components/Hero';
import { AppCard } from '../components/AppCard';

export const Services = () => (
    <PageLayout>
                <Box pad="large" gap="large" overflow="hidden">
            <Carousel play={5000} height={"medium"}>
                <Hero image={image01} >
                    <AppCard 
                        headerText="Sitio Web en Construcción 1" 
                        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit. Turpis in eu mi bibendum neque egestas. Lectus magna fringilla urna porttitor rhoncus dolor. Mauris cursus mattis molestie a iaculis at erat. Imperdiet sed euismod nisi porta lorem mollis. Est placerat in egestas erat imperdiet. Sapien nec sagittis aliquam malesuada. In nulla posuere sollicitudin aliquam ultrices sagittis. Tellus at urna condimentum mattis pellentesque id. Ac tortor dignissim convallis aenean. Quisque egestas diam in arcu cursus euismod quis viverra nibh."
                    />
                </Hero>
                <Hero image={image02} >
                    <AppCard 
                        headerText="Sitio Web en Construcción 2" 
                        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit. Turpis in eu mi bibendum neque egestas. Lectus magna fringilla urna porttitor rhoncus dolor. Mauris cursus mattis molestie a iaculis at erat. Imperdiet sed euismod nisi porta lorem mollis. Est placerat in egestas erat imperdiet. Sapien nec sagittis aliquam malesuada. In nulla posuere sollicitudin aliquam ultrices sagittis. Tellus at urna condimentum mattis pellentesque id. Ac tortor dignissim convallis aenean. Quisque egestas diam in arcu cursus euismod quis viverra nibh."
                    />
                </Hero>
                <Hero image={image02} >
                    <AppCard 
                        headerText="Si si, sitio web en Construcción. Pronto, Pronto" 
                        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit. Turpis in eu mi bibendum neque egestas. Lectus magna fringilla urna porttitor rhoncus dolor. Mauris cursus mattis molestie a iaculis at erat. Imperdiet sed euismod nisi porta lorem mollis. Est placerat in egestas erat imperdiet. Sapien nec sagittis aliquam malesuada. In nulla posuere sollicitudin aliquam ultrices sagittis. Tellus at urna condimentum mattis pellentesque id. Ac tortor dignissim convallis aenean. Quisque egestas diam in arcu cursus euismod quis viverra nibh."
                    />
                </Hero>
            </Carousel>
        </Box>

    </PageLayout>        
);
