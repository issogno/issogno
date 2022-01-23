
import React from 'react';

import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Carousel,
    Heading
} from 'grommet';
import { PageLayout } from '../../components/PageLayout';

import image01 from './image01.png';
import image02 from './image02.png';
import { Hero } from '../../components/Hero';
import { AppCard } from '../../components/AppCard';

export const PrimaryPage = () => (
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
        <Box direction='row' gap="medium" pad={'large'}>
            <Card pad="medium" background="dark-1" gap="medium">
                <CardHeader>
                    <Heading color={'brand'} level={3}>
                        Experiencia
                    </Heading>
                </CardHeader>
                <CardBody>Ingenieros de sonido con más de 10 años de experiencia en el medio</CardBody>
            </Card>
            <Card pad="medium" background="dark-1" gap="large">
                <CardHeader>
                    <Heading color={'brand'} level={3}>
                        Variedad
                    </Heading>
                </CardHeader>
                <CardBody>Un equipo que cuenta con músicos compositores e intérpretes de diferentes intrumentos, nacionalidades y diversos estilos</CardBody>
            </Card>
            <Card pad="medium" background="dark-1" gap="large">
                <CardHeader>
                    <Heading color={'brand'} level={3}>
                        Calidad
                    </Heading>
                </CardHeader>
                <CardBody >Trabajamos en conjunto manteniendo un proceso de control de calidad de todos los proyectos que realizamos</CardBody>
            </Card>
        </Box>
    </PageLayout>
);
