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

export type IShadowVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'gray';

export type IElevation = 1 | 2 | 3 | 4;

export type ISize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';

export interface ITheme {
  transitionsTime: number;
  colors: { [key in IVariant]: IColor };
  shadows: { [key in IShadowVariant]: IColor };
  layout: {
    corners: string;
    buttons: {
      boxShadow: string;
      padding: string;
      hover: {
        boxShadow: string;
      };
    };
    card: {
      padding: string;
      size: { [key in ISize]: string };
    };
  };
}

export const theme: ITheme = {
  transitionsTime: 300,
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
  shadows: {
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
    gray: {
      hue: 0,
      saturation: 0,
      lightness: 50,
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
    card: {
      padding: '0.7rem 1rem',
      size: {
        sm: '5rem',
        md: '10rem',
        lg: '20rem',
        xl: '40rem',
        xxl: '80rem',
        full: '100%',
      },
    },
  },
};
