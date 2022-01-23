import { PropsWithChildren } from 'react'
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

import { StyledPageLayout } from "./PageLayout.style"

export interface PageLayoutProps {
    Header: (props: any) => JSX.Element;
    Main: (props: any) => JSX.Element;
    Footer: (props: any) => JSX.Element;
}

export const PageLayout = ({children}: PropsWithChildren<any>): JSX.Element => (
    <StyledPageLayout>
        <AppHeader />
        <div className="page-main">
            {children}
        </div>
        <AppFooter />
    </StyledPageLayout>);
