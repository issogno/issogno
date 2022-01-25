import { Card, CardHeader, Heading,CardBody } from "grommet";

export const AppCard = ({ headerText, bodyText }: { headerText: string, bodyText: string}) => (
<Card pad="medium" background="issognoCard" gap="xxsmall">
    <CardHeader>
        <Heading color={'brand'} level={3}>
            {headerText}
        </Heading>
    </CardHeader>
    <CardBody>
        {bodyText}
    </CardBody>
</Card>);
