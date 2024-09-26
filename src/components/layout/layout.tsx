import { useAtom } from 'jotai';
import { themeAtom } from '../../atoms/atoms';

const Layout = ({ children }) => {
  const [theme] = useAtom(themeAtom);

  return (
    <div data-theme={theme}>
      {children}
    </div>
  );
};

export default Layout;