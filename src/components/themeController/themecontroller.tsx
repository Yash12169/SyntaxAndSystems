import { useAtom } from 'jotai';
import { themeAtom } from '../../atoms/atoms';

const ThemeController = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const themes: readonly string[] = [
    "dark",
    "cupcake",
    "emerald",
    "forest",
    "lofi",
    "autumn",
    "coffee",
    "dim",
    "sunset"
  ];
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  return (
    <select value={theme} onChange={handleThemeChange} className='h-[80%] bg-primary-content text-primary rounded outline-none'>
      {themes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </select>
  );
};

export default ThemeController;