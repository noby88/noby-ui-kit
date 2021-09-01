export interface IColor {
  hue: number;
  saturation: number;
  lightness: number;
}

export type IVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

export interface ITheme {
  colors: { [key in IVariant]: IColor };
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

export const theme: ITheme = {
  colors: {
    primary: {
      hue: 200,
      saturation: 80,
      lightness: 30,
    },
    secondary: {
      hue: 300,
      saturation: 70,
      lightness: 45,
    },
    success: {
      hue: 100,
      saturation: 70,
      lightness: 30,
    },
    warning: {
      hue: 35,
      saturation: 70,
      lightness: 35,
    },
    danger: {
      hue: 360,
      saturation: 80,
      lightness: 45,
    },
  },
  layout: {
    corners: '0.5rem',
    buttons: {
      padding: '0.7rem 1rem',
      boxShadow: '',
      hover: {
        boxShadow: '0 0 0.1rem black',
      },
    },
  },
};
