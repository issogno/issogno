import issognoLogo from './issogno_logo.svg';

export const IssognoLogoSvg = (props: { size?: { height: string; width: string } }) => (
    <img src={issognoLogo} alt="Issogno Music Logo" style={{height: props?.size?.height, width: props?.size?.width}}/>
)