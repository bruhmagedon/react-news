import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/Constants";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import NewsFilters from "../NewsFilters/NewsFilters";

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
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

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <>
      <section className="flex flex-col w-full overflow-hidden gap-[32px]">
        <NewsFilters filters={filters} changeFilter={changeFilter} />
        <Pagination
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
          totalPages={TOTAL_PAGES}
          currentPage={filters.page_number}
        />
        <NewsList isLoading={isLoading} news={news} />
        <Pagination
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
          totalPages={TOTAL_PAGES}
          currentPage={filters.page_number}
        />
      </section>
    </>
  );
};

export default NewsByFilters;
