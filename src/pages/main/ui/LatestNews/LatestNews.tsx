import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import { NewsList } from '@/widgets/news';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/app/store/appStore';
import { INews } from '@/entities/news';
import { setCurrentNews } from '@/entities/news/model/newsSlice';

const LatestNews = () => {
  // Запрос на получение новостей
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Переход к странице новости
  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <section className='flex w-full flex-col gap-[32px] overflow-hidden'>
      <NewsList
        type='banner'
        direction='row'
        news={data && data.news}
        isLoading={isLoading}
        viewNewsSlot={(news: INews) => <p onClick={() => navigateTo(news)}>view more...</p>}
      />
    </section>
  );
};

export default LatestNews;
