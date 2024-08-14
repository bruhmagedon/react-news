import { LatestNews, NewsByFilters } from '@/widgets/news';

const MainPage = () => {
  return (
    <main className='main gap-5'>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default MainPage;
