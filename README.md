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

| Component | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Button    | Can receive the following props:<br /><br />**variant**: 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light' <br />**loading**: true \| false                                                                                                                                                                                                                                                                                                                                                                                                             |
| Spinner   | Can receive the following props:<br /><br />**variant**: 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light' <br />**size**: \<number\>                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Slider    | Can receive the following props:<br /><br />**variant**: 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light' <br />**values**: array\<string \| number ><br />**selected**: the selected value from the _values_ array<br />**onChange**: function receiving as argument the new value from the _values_ array<br />**showStepBullets**: boolean<br />**showLabels**: boolean<br />**labelVariant**: 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light'<br />**labelTransform**: function taking the values as arguments |
| Card      | Can receive the following props:<br /><br />**elevation**: 0 \| 1 \| 2 \| 3 \| 4<br />**shadowVariant**: 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'dark' \| 'light' <br />**interactive**: true \| false<br />**size**: 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'full'                                                                                                                                                                                                                                                                                          |
| Page      | A standard <strong>main</strong> HTML element with teh aria role also as <strong>main</strong>. Additionally, it's padding can be configured with though the theme.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Group     | Can receive the following props:<br /><br />**direction**: 'vertical' \| 'horizontal' <br /><br />A simple flex container that removes any margins, any rounded corners from the children and adds them only to the 4 newly formed corners from the group. Also adds a small gap for separation of the elements. Recommended to use for grouping: Buttons, Cards                                                                                                                                                                                                                          |

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
}
```
