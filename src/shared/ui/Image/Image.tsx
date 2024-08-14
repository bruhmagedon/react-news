import news_plug from '@/shared/assets/News_Plug.jpg';
import { cn } from '@/shared/utils/cn';

interface IProps {
  className?: string;
  image: string;
}

const Image = ({ image, className }: IProps) => {
  return (
    <>
      {/* растягивающийся в пропорциях экран */}
      <div className={cn('', className)}>
        {image ? (
          <img
            src={image == 'None' ? news_plug : image}
            alt='news'
            className='absolute left-0 top-0 h-full w-full rounded-lg object-cover'
            // className=''
          />
        ) : null}
      </div>
    </>
  );
};

export default Image;
