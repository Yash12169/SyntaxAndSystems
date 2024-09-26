import { useAtom } from 'jotai';
import { themeAtom } from '../../atoms/atoms';

const ThemeController = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const themes = ['light', 'dark', 'cupcake', 'bumblebee', 'emerald'];

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  return (
    <select value={theme} onChange={handleThemeChange}>
      {themes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
};

export default ThemeController;