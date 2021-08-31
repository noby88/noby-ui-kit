import React from 'react';
import { theme, ITheme } from '../theme';

const ThemeContext: React.Context<ITheme> = React.createContext(theme);

export default ThemeContext;
