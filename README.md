# This is not ready to be used!

## Accessability and customization is the main focus

All components by default with aria props.

Any of the styling can be overwritten (recommended with Styled Components). None of the headaches when needing to change the styling juts a bit. One of the motives behind this package are the frustration with other UI kits like Material UI when it comes to adding your unique twist.

## Example

A live showcase of components can be found on https://noby88.github.io/noby-ui-kit/

## Setting you own theme

1. Import the Theme context and the default theme

   ```javascript
   import ThemeContext from 'noby-ui-kit/ThemeContext';
   import { theme } from 'noby-ui-kit/theme';
   ```

2. Modify all the you need

   ```javascript
   const myTheme = theme;
   myTheme.colors.primary.hue = 10;
   ```

3. Wrap you content in with the new theme object

   ```JSX
   <ThemeContext.Provider value={myTheme}>
     // your content
   </ThemeContext.Provider>
   ```

## Available components

### **Button**

> The base of this component is an actual HTML Button element. None of that fancy DIVs masquerading as buttons thing. This means the browsers will know exactly what to do with it without the need for special aria labels (from the accessability point of view).

| Prop    | Expected value                                                                                                                                                                                             |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| variant | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'` - the color of the button. The text color will change between _white_ and _black_ to ensure contrast for readability |
| loading | `boolean` - will display the spinner component instead of the text and the button will be also disabled                                                                                                    |

### **Input**

> An basic input component with some default formatting to adhere to the general design trend.

| Prop               | Expected value                                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| variant            | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'` - color for the border           |
| label              | `<string>` - to be displayed as label                                                                                  |
| labelVariant       | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'` - color for the label            |
| textVariant        | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'` - color for the input text       |
| placeholderVariant | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'` - color for the placeholder text |
| orientation        | `'stack' \| 'inline'` - the direction the label and input element relate                                               |

### **Spinner**

> A simple spinning object intended to use as a buffering indicator.

| Prop    | Expected value                                                                                                   |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| variant | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'` - the color of the element |
| size    | `<number>` - relate to the root font size                                                                        |

### **Slider**

> A slider with predefined steps. Could be a good alternative for a dropdown list with ew options.

| Prop            | Expected value                                                                                                               |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| variant         | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'` - the color of the rail and knob       |
| values          | `array<string \| number >` - the values for the steps                                                                        |
| selected        | `<string \| number>` - the _selected value_ from the _values_ array                                                          |
| onValueChange   | `(value: string \| number) => void` - function receiving as argument the _new value_ from the _values_ array                 |
| showStepBullets | `<boolean>` - have a visual indicator where the steps are on the rail                                                        |
| showLabels      | `<boolean>` - to show the labels above the steps                                                                             |
| labelVariant    | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'` - the label can have a different color |
| labelTransform  | `(value: string \| number) => any` - function taking the _values_ as arguments                                               |

### **Card**

> A component to group small amount of related content.

| Prop          | Expected value                                                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| elevation     | `0 \| 1 \| 2 \| 3 \| 4` - determines the amount of shadow under the element                                    |
| shadowVariant | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'` - the tint of the shadow |
| interactive   | `<boolean>` - on hover will increase the shadow, giving it illusion of shifting closer                         |
| size          | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'full'` - the expected with of the element                           |

### **Page**

> A standard <strong>main</strong> HTML element with teh aria role also as <strong>main</strong>. Additionally, it's padding can be configured with though the theme.

### **Group**

> A simple flex container that removes any margins, any rounded corners from the children and adds them only to the 4 newly formed corners from the group. Also adds a small gap for separation of the elements. Recommended to use for grouping: Buttons, Cards.

| Prop      | Expected value               |
| --------- | ---------------------------- |
| direction | `'vertical' \| 'horizontal'` |

### **Skleton**

> Intended to be used as a placeholder while data is being loaded.

| Prop          | Expected value                                                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| type          | `'block' \| 'circle' \| 'paragraph'`                                                                                                |
| shadowVariant | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'`                                               |
| height        | `<string>` - The height in case of type Block. The diameter in case of a Circle. The height on of a line in case of type Paragraph. |
| width         | `<string>` - The widht in case of type Blocke. The with of the long lines in case of type Paragraph.                                |
| lines         | `<number>` - Has effect only if of type Paragraph.                                                                                  |

## Default Theme object

```javascript
{
  transitionsTime: 200,
  colors: {
    primary: {
      hue: 200,
      saturation: 80,
      lightness: 30,
    },
    secondary: {
      hue: 0,
      saturation: 0,
      lightness: 60,
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
    gap: '1rem',
    buttons: {
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
    surface: {
      base: 'hsl(0 0% 99%)',
      middle: 'hsl(0 0% 97%)',
      top: 'hsl(0 0% 95%)',
      paper: 'hsl(0 0% 100%)',
      disabledPaper: 'hsl(0 0% 96%)',
    },
  },
}
```
