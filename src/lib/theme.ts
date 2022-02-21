export interface IColor {
  hue: number;
  saturation: number;
  lightness: number;
}

export interface IColorPartial {
  hue?: number;
  saturation?: number;
  lightness?: number;
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

export interface ISurfaceTheme {
  base: string;
  middle: string;
  high: string;
  top: string;
  paper: string;
  disabledPaper: string;
}
export interface IButtonTheme {
  boxShadow: string;
  padding: string;
  width: string;
  hover: {
    outlineWidth: string;
  };
}

export interface IInputTheme {
  boxShadow: string;
  padding: string;
  width: string;
  fontSize: string;
  border: {
    width: string;
    style: string;
  };
  background: keyof ISurfaceTheme;
  disabledBackground: keyof ISurfaceTheme;
}

export interface ICardTheme {
  padding: string;
  border: string;
  size: { [key in ISize]: string };
  background: keyof ISurfaceTheme;
}

export interface IChipTheme {
  padding: string;
  borderWidth: string;
  gap: string;
  hover: {
    outlineWidth: string;
  };
  colorOffset: {
    [key in 'foreground' | 'background']: {
      active: IColor;
      inactive: IColor;
    };
  };
}

export interface IPageTheme {
  padding: string;
  maxWidth: string;
  background: keyof ISurfaceTheme;
}

export interface ISliderTheme {
  height: string;
  minWidth: string;
  fixedWidth: string;
  track: {
    height: string;
    deSaturation: IColor;
    disabled: IColor;
  };
  step: {
    size: string;
  };
  bullet: {
    size: string;
    shadow: string;
    outline: string;
    disabled: IColor;
  };
  label: {
    fontSize: string;
    offset: string;
  };
}

export interface ISkeletonTheme {
  animation: {
    duration: number;
    accentWidth: string;
  };
  colors: {
    deSaturation: number;
    lightness: number;
    accentLightnessOffset: number;
  };
  paragraph: {
    gap: string;
    lastRowTrunc: string;
  };
}

export interface ITheme {
  transitionsTime: number;
  colors: { [key in IVariant]: IColor };
  surface: ISurfaceTheme;
  corners: string;
  gap: string;
  layout: {
    button: IButtonTheme;
    card: ICardTheme;
    chip: IChipTheme;
    input: IInputTheme;
    page: IPageTheme;
    skeleton: ISkeletonTheme;
    slider: ISliderTheme;
    toggle: ISliderTheme;
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
      hue: 180,
      saturation: 70,
      lightness: 40,
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
  surface: {
    base: 'hsl(0 0% 99%)',
    middle: 'hsl(0 0% 97%)',
    high: 'hsl(0 0% 96%)',
    top: 'hsl(0 0% 95%)',
    paper: 'hsl(0 0% 100%)',
    disabledPaper: 'hsl(0 0% 96%)',
  },
  corners: '0.5rem',
  gap: '1rem',
  layout: {
    button: {
      padding: '0.7rem 1rem',
      boxShadow: '',
      width: '',
      hover: {
        outlineWidth: '0.15rem',
      },
    },
    input: {
      padding: '0.7rem 1rem',
      boxShadow: '',
      width: '',
      fontSize: '1rem',
      border: {
        width: '2px',
        style: 'solid',
      },
      background: 'paper',
      disabledBackground: 'disabledPaper',
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
      background: 'middle',
    },
    chip: {
      padding: '0.3rem 0.7rem',
      borderWidth: '0.2rem',
      gap: '0.5rem',
      hover: {
        outlineWidth: '0.2rem',
      },
      colorOffset: {
        foreground: {
          active: {
            hue: 0,
            saturation: 0,
            lightness: 0,
          },
          inactive: {
            hue: 0,
            saturation: -50,
            lightness: 25,
          },
        },
        background: {
          active: {
            hue: 0,
            saturation: -20,
            lightness: 45,
          },
          inactive: {
            hue: 0,
            saturation: -20,
            lightness: 50,
          },
        },
      },
    },
    page: {
      padding: '1rem',
      maxWidth: '70rem',
      background: 'base',
    },
    toggle: {
      height: '0.5rem',
      minWidth: '',
      fixedWidth: '2.5rem',
      track: {
        height: '0.25rem',
        deSaturation: { hue: 0, saturation: -25, lightness: 15 },
        disabled: { hue: 0, saturation: 0, lightness: 80 },
      },
      step: {
        size: '1rem',
      },
      bullet: {
        size: '1.5rem',
        outline: '0.5rem',
        shadow: '0 0.1rem 0.2rem grey',
        disabled: { hue: 0, saturation: 0, lightness: 80 },
      },
      label: {
        fontSize: '',
        offset: '',
      },
    },
    slider: {
      height: '0.5rem',
      minWidth: '5rem',
      fixedWidth: '',
      track: {
        height: '0.25rem',
        deSaturation: { hue: 0, saturation: -25, lightness: 15 },
        disabled: { hue: 0, saturation: 0, lightness: 80 },
      },
      step: {
        size: '1rem',
      },
      bullet: {
        size: '1.5rem',
        outline: '0.5rem',
        shadow: '0 0.1rem 0.2rem grey',
        disabled: { hue: 0, saturation: 0, lightness: 80 },
      },
      label: {
        fontSize: '1rem',
        offset: '-1.5rem',
      },
    },
    skeleton: {
      animation: {
        duration: 3,
        accentWidth: '2rem',
      },
      colors: {
        deSaturation: -30,
        lightness: 90,
        accentLightnessOffset: 5,
      },
      paragraph: {
        gap: '0.5rem',
        lastRowTrunc: '10%',
      },
    },
  },
};
