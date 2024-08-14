import { useAppSelector } from '@/app/store/appStore';
import { useDebounce } from '@/shared/hooks/useDebounde';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import NewsFilters from '@/features/news/NewsFilters/NewsFilters';
import NewsListWithPagination from '@/features/news/ui/NewsListWithPagination/NewsListWithPagination';

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords
  });
  const { data } = useGetCategoriesQuery(null);

  return (
    <section className='flex w-full flex-col gap-[32px] overflow-hidden rounded-lg bg-[#f9f9f9] p-[20px] shadow-md dark:bg-[#272727]'>
      <NewsFilters filters={filters} categories={data?.categories || []} />
      <NewsListWithPagination isLoading={isLoading} news={news} filters={filters} />
    </section>
  );
};

export default NewsByFilters;
