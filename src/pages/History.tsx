import { Box, Paragraph } from 'grommet';
import image01 from '../pages/Home/image01.png';
import { PageLayout } from '../components/PageLayout';
import { AppCard } from '../components/AppCard';
import { ImageTextCard } from '../components/ImageTextCard';


const content = <>
 <Paragraph>Nuestro equipo comenzó con profesionales individuales: ingenieros de sonido y de mezcla, músicos, arreglistas y compositores de diferentes nacionalidades, y a raíz de la situación ocasionada por la Covid-19 y los cambios que trajo consigo, nos encontramos por primera vez en un sitio de discusión online en el cual se debatían temas relacionados con la música, se compartían experiencias y nos ayudábamos unos a los otros.</Paragraph>
 <Paragraph>Poco a poco este grupo fue creciendo y al conocer las capacidades y la calidad del trabajo de cada uno nos fuimos involucrando en diferentes proyectos de forma conjunta. </Paragraph>
 <Paragraph>Al ir adquiriendo experiencia trabajando en equipo surgió la idea de crear esta empresa para facilitar la atención a los clientes y para organizar mejor el acceso a nuestros servicios, y explotar mejor nuestro potencial de forma tal que no sea necesario ir a un estudio para poder materializar una idea, lo que resulta más económico y eficaz. Esto ha traído consigo que nuestros trabajos ya se puedan encontrar en varios países del mundo.;</Paragraph>
</>;

export const History = () => (
    <PageLayout>
        <Box pad="large">
            <ImageTextCard image={image01} >
                <AppCard
                    headerText="Historia"
                    bodyText={content}
                />
            </ImageTextCard>
        </Box>
    </PageLayout>
);
