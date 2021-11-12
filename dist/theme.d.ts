export interface IColor {
  hue: number;
  saturation: number;
  lightness: number;
}
export declare type IVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light';
export declare type IElevation = 1 | 2 | 3 | 4;
export declare type ISize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
export interface ITheme {
  transitionsTime: number;
  colors: {
    [key in IVariant]: IColor;
  };
  shadows: {
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
  };
}
export declare const theme: ITheme;
