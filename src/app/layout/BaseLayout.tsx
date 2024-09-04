import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  const { theme } = useTheme();

  return (
    <div className={`base-layout ${theme === Theme.DARK ? 'dark' : 'light'} `}>
      <Header />
      <div className='min-h-screen p-[20px]'>
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
