import ThemeButton from '@/features/theme/ui/ThemeButton/ThemeButton';
import { Link } from 'react-router-dom';
import { formatDate } from '@/shared/utils/formatDate';

export const Header = () => {
  return (
    <header className='border-b-[2px] border-b-[#e1e1e1] p-[20px] dark:border-b-[#333333]'>
      <div className='flex items-center gap-[12px] rounded-lg px-[32px] py-[32px] shadow-md dark:bg-[#272727]'>
        <div className='flex flex-1 flex-col gap-[12px]'>
          <Link to={'/'}>
            <h1 className='text-[28px] font-semibold'>Segoe News</h1>
          </Link>
          <p className='text-[16px]'>{formatDate(new Date())}</p>
        </div>
        <ThemeButton />
      </div>
    </header>
  );
};
