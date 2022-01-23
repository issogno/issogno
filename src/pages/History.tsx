import { Box } from 'grommet';
import image01 from '../pages/PrimaryPage/image01.png';
import { PageLayout } from '../components/PageLayout';
import { Hero } from '../components/Hero';
import { AppCard } from '../components/AppCard';


const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras fermentum odio. Urna condimentum mattis pellentesque id nibh. Gravida rutrum quisque non tellus orci. In fermentum posuere urna nec tincidunt praesent semper feugiat. Nulla aliquet enim tortor at auctor urna nunc id. Adipiscing bibendum est ultricies integer. Elit pellentesque habitant morbi tristique senectus et netus. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Dictum non consectetur a erat.
Quam pellentesque nec nam aliquam sem. Dictum varius duis at consectetur lorem. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Vulputate enim nulla aliquet porttitor lacus luctus. Mattis molestie a iaculis at erat pellentesque. Tortor at risus viverra adipiscing at in tellus. In vitae turpis massa sed elementum tempus egestas. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. At lectus urna duis convallis convallis. Et magnis dis parturient montes. Et netus et malesuada fames.`;

export const History = () => (
    <PageLayout>
        <Box pad="large">
            <Hero image={image01} >
                <AppCard
                    headerText="Sitio Web en Construcción 1"
                    bodyText={lorem}
                />
            </Hero>
        </Box>
    </PageLayout>
);
