import { NewsFilters } from "@/widgets/news";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";
import { useAppSelector } from "@/app/store/appStore";
import { useDebounce } from "@/shared/hooks/useDebounde";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });
  const { data } = useGetCategoriesQuery(null);

  return (
    <section className="flex flex-col w-full overflow-hidden gap-[32px]">
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination
        isLoading={isLoading}
        news={news}
        filters={filters}
      />
    </section>
  );
};

export default NewsByFilters;
