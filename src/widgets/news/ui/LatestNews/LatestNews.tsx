import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import { NewsList } from '@/features/news';

const LatestNews = () => {
  // Запрос на получение новостей
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className='h-full rounded-lg bg-[#f9f9f9] p-[20px] shadow-md dark:bg-[#272727]'>
      <NewsList type='banner' direction='row' news={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
