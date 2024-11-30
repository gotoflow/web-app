import { BaseProps } from '@/types/base-props';
import Image from 'next/image';


type LogoIconProps = BaseProps &{
    width?: number;
    height?: number;
    
}

export const LogoIcon = ({width, height, ...props}: LogoIconProps) => {
    return (
        <Image
        src="/gotoflow_icon.svg"
        alt="Logo"
        width={width ? width : 40}
        height={height? height : 40}
        {...props}
        />
    );
}