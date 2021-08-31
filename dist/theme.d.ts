export interface IColor {
    hue: number;
    saturation: number;
    lightness: number;
}
export declare type IVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export interface ITheme {
    colors: {
        [key in IVariant]: IColor;
    };
    layout: {
        corners: string;
        buttons: {
            boxShadow: string;
            padding: string;
            hover: {
                boxShadow: string;
            };
        };
    };
}
export declare const theme: ITheme;
