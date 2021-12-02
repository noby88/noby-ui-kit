import { ITheme, IVariant } from '../theme';
export declare const SliderContainer: import("styled-components").StyledComponent<"div", any, {
    theme: ITheme;
}, never>;
export declare const Track: import("styled-components").StyledComponent<"div", any, {
    theme: ITheme;
    variant: IVariant;
}, never>;
export declare const Bullet: import("styled-components").StyledComponent<"div", any, {
    style: {
        left: string;
    };
} & {
    theme: ITheme;
    variant: IVariant;
    offset: number;
}, "style">;
export declare const StepContainer: import("styled-components").StyledComponent<"div", any, {
    theme: ITheme;
}, never>;
export declare const StepBullet: import("styled-components").StyledComponent<"div", any, {
    theme: ITheme;
    variant: IVariant;
}, never>;
export declare const StepValueContainer: import("styled-components").StyledComponent<"div", any, {
    theme: ITheme;
}, never>;
export declare const StepValue: import("styled-components").StyledComponent<"span", any, {
    theme: ITheme;
    variant: IVariant;
    selected?: boolean | undefined;
}, never>;
