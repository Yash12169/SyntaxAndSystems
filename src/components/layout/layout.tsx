import { useAtom } from 'jotai';
import { themeAtom } from '../../atoms/atoms';
import { ReactNode } from 'react';

const Layout = ({ children}:{children:ReactNode}) => {
  const [theme,] = useAtom(themeAtom);

  return (
    <div data-theme={theme}>
      {children}
    </div>
  );
};

export default Layout;