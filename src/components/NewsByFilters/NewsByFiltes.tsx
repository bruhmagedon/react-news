import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/Constants";
import { getNews } from "../../API/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import NewsList from "../NewsList/NewsList";
import NewsFilters from "../NewsFilters/NewsFilters";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import { NewsApiResponse, ParamsType } from "../../pages/interfaces";

// Новости по фильтрам + поиск + пагинация
const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <>
      <section className="flex flex-col w-full overflow-hidden gap-[32px]">
        <NewsFilters filters={filters} changeFilter={changeFilter} />
        <PaginationWrapper
          top
          bottom
          handlePrevPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
          totalPages={TOTAL_PAGES}
          currentPage={filters.page_number}
        >
          <NewsList isLoading={isLoading} news={data?.news} />
        </PaginationWrapper>
      </section>
    </>
  );
};

export default NewsByFilters;
