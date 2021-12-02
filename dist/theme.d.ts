export interface IColor {
    hue: number;
    saturation: number;
    lightness: number;
}
export declare type IVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark' | 'light';
export declare type IElevation = 0 | 1 | 2 | 3 | 4;
export declare type ISize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
export interface ITheme {
    transitionsTime: number;
    colors: {
        [key in IVariant]: IColor;
    };
    layout: {
        corners: string;
        buttons: {
            boxShadow: string;
            padding: string;
            width: string;
            hover: {
                boxShadow: string;
            };
        };
        card: {
            padding: string;
            border: string;
            size: {
                [key in ISize]: string;
            };
        };
        page: {
            padding: string;
            maxWidth: string;
        };
        slider: {
            height: string;
            minWidth: string;
            bullet: {
                size: string;
                shadow: string;
                outline: string;
            };
            label: {
                fontSize: string;
                offset: string;
            };
        };
        surface: {
            base: string;
            middle: string;
            top: string;
        };
    };
}
export declare const theme: ITheme;
