import { useAppDispatch } from '@/app/store/appStore';
import { INews } from '@/entities/news';
import { setCurrentNews } from '@/entities/news/model/newsSlice';
import NewsCard from '@/entities/news/ui/NewsCard/NewsCard';
import withSkeleton from '@/shared/hocs/withSkeleton';
import { cn } from '@/shared/utils/cn';
import { cva } from 'class-variance-authority';
import { useNavigate } from 'react-router-dom';

interface NewsListProps {
  className?: string;
  news?: INews[];
  type?: 'banner' | 'item';
  direction?: 'row' | 'column';
}

const NewsListVariants = cva('', {
  variants: {
    type: {
      item: 'flex flex-col gap-6',
      banner: 'banners-list box-border w-full gap-[12px] md:max-h-[1200px] md:overflow-y-auto'
    },
    direction: {
      row: '',
      column: ''
    }
  }
});

const NewsList = ({ news, type = 'item', direction }: NewsListProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Переход к странице новости
  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <ul className={cn(NewsListVariants({ type, direction }))}>
      {news?.map((item) => {
        return <NewsCard key={item.id} item={item} type={type} onRedirectClick={navigateTo} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<NewsListProps>(NewsList, 10);

export default NewsListWithSkeleton;
