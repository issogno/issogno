import { Card, CardHeader, Heading,CardBody } from "grommet";
import { ReactElement } from "react";

export const AppCard = ({ headerText, bodyText }: { headerText: string, bodyText: string | ReactElement }) => (
<Card pad="medium" background="issognoCard" gap="xxsmall">
    <CardHeader>
        <Heading margin="none" color={'brand'} level={3} >
            {headerText}
        </Heading>
    </CardHeader>
    <CardBody margin="none" >
        {bodyText}
    </CardBody>
</Card>);
