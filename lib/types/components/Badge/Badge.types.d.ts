import { ReactNode, CSSProperties } from 'react';
import { TextProps } from '../Text';
export declare type BadgeDefaultProps = Pick<TextProps, 'size'>;
export interface BadgeProps extends Partial<BadgeDefaultProps> {
    style?: CSSProperties;
    children: ReactNode;
    className?: string;
}
