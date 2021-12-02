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
  | 'danger'
  | 'dark'
  | 'light';

export type IElevation = 0 | 1 | 2 | 3 | 4;

export type ISize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';

export interface ITheme {
  transitionsTime: number;
  colors: { [key in IVariant]: IColor };
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
      size: { [key in ISize]: string };
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

export const theme: ITheme = {
  transitionsTime: 200,
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
    dark: {
      hue: 0,
      saturation: 0,
      lightness: 25,
    },
    light: {
      hue: 0,
      saturation: 0,
      lightness: 95,
    },
  },
  layout: {
    corners: '0.5rem',
    buttons: {
      padding: '0.7rem 1rem',
      boxShadow: '',
      width: '',
      hover: {
        boxShadow: '0 0.1rem 0.2rem grey',
      },
    },
    card: {
      padding: '0.7rem 1rem',
      border: '',
      size: {
        sm: '10rem',
        md: '20rem',
        lg: '40rem',
        xl: '60rem',
        xxl: '80rem',
        full: '100%',
      },
    },
    page: {
      padding: '1rem',
      maxWidth: '70rem',
    },
    slider: {
      height: '0.5rem',
      minWidth: '10rem',
      bullet: {
        size: '1.5rem',
        outline: '0.5rem',
        shadow: '0 0.1rem 0.2rem grey',
      },
      label: {
        fontSize: '1rem',
        offset: '-1.5rem',
      },
    },
    surface: {
      base: 'hsl(0 0% 99%)',
      middle: 'hsl(0 0% 97%)',
      top: 'hsl(0 0% 95%)',
    },
  },
};
