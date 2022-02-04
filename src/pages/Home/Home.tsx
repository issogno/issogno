
import React from 'react';

import {
    Box, Paragraph
} from 'grommet';
import { PageLayout } from '../../components/PageLayout';

// import image01 from './image01.png';
import logo from './../../img/logo_shift_left.jpg';
import { Hero } from '../../components/Hero';
import { AppCard } from '../../components/AppCard';

const mainTitle = '¿Quiénes somos?'
// eslint-disable-next-line no-multi-str
const mainText = () => 
<Paragraph textAlign='justify'>
Somos una empresa online de audio-producción compuesta por profesionales:
Compositores, Músicos, Arreglistas e Ingenieros de sonido de diferentes nacionalidades,
dedicados a ejercer cada una de estas disciplinas para llevar el producto final al siguiente nivel.
Composiciones a la medida de las necesidades del cliente, Arreglos musicales que satisfagan sus exigencias,
así como grabación, edición, postproducción, mezcla y masterización.
</Paragraph>;

 const tendenciesCard = () => 
<Paragraph textAlign='justify'>
No existe nada más negativo para la industria musical que estar fuera de las tendencias, 
dale diversidad y un plus a tu obra artística sin cambiar tu estilo, personalidad o esencia, 
solo necesitas gente que te entienda y que haga destacar tus ideas. Para ello está Issogno Music,
te entendemos perfecto y sabemos qué sugerirte, tú solo brilla como el artista que eres.
</Paragraph>;

const diverisityCard = () =>
<Paragraph textAlign='justify'>
Tal cual existen colores, existe la diversidad en las necesidades de tu música, 
¿quieres distinguirte del resto? Haz llegado al lugar en donde lo versátil y actual se toman de la mano,
un equipo de diferentes culturas, regiones diversas, costumbres y lenguajes que a su vez, 
hablan y se conjugan en el lenguaje universal de la música, éste es tu sitio y tu lugar, es tu momento.
</Paragraph>;

const contactCard = () => 
<Paragraph textAlign='justify'>
Puede contactar con nosotros desde cualquier parte del mundo y será atendido de forma profesional y seria, justo como el artista se merece.
</Paragraph>;

export const Home = () => (
    <PageLayout>
        <Box pad="medium" gap="medium" overflow="hidden" >
            <Hero image={logo} >
                <AppCard 
                    headerText={mainTitle}
                    bodyText={mainText()}
                />
            </Hero>
        </Box>
        <Box direction='row' alignSelf='center' gap="medium" pad='medium'>
            <AppCard
                headerText="Variedad" 
                bodyText={diverisityCard()}
            />        
            <AppCard 
                headerText="Tendencias" 
                bodyText={tendenciesCard()}
            />        
            <AppCard 
                headerText="Contacto" 
                bodyText={contactCard()}
            />        
        </Box>
    </PageLayout>
);
