import ThemeContext from './lib/ThemeContext';
import { theme } from './lib/theme';
import Buttons from './components/Buttons';
import Spinners from './components/Spinners';

const App = () => (
  <ThemeContext.Provider value={theme}>
    <main>
      <h1>Component showcase</h1>
      <Buttons />
      <Spinners />
    </main>
  </ThemeContext.Provider>
);

export default App;
