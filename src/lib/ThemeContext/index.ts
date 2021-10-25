import React, { useContext } from 'react';
import { theme, ITheme } from '../theme';

const ThemeContext: React.Context<ITheme> = React.createContext(theme);

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
