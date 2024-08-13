import { useTheme } from '@/app/providers/ThemeProvider';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className='ease transition-all duration-500 ease-out' onClick={toggleTheme}>
      {isDark ? <Sun width={35} height={35} /> : <Moon width={35} height={35} />}
    </div>
  );
};

export default ThemeButton;
