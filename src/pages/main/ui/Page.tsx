import LatestNews from './LatestNews/LatestNews';
import NewsByFilters from './NewsByFilters/NewsByFilters';

const MainPage = () => {
  return (
    <main className='main gap-8'>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default MainPage;
