import { useTheme } from '@/app/providers/ThemeProvider';
import { Header } from '@/widgets/header/ui';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  const { isDark } = useTheme();

  return (
    <div className={`base-layout ${isDark ? 'dark' : 'light'} `}>
      <Header />
      <div className='min-h-screen p-[20px]'>
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
