import NewsList from '@/features/news/NewsList/NewsList';
import PaginationWrapper from '@/features/pagination/ui/Pagination/Pagination';
import { IFilters } from '@/shared/interfaces';
import { usePaginationNews } from '../../utils/hooks/usePaginationNews';
import { INews } from '@/entities/news';
import { TOTAL_PAGES } from '@/shared/constants/constants';

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } = usePaginationNews(filters);

  return (
    <PaginationWrapper
      top
      bottom
      handlePreviousPage={handlePreviousPage}
      handleNextPage={handleNextPage}
      handlePageClick={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <NewsList direction='column' type='item' isLoading={isLoading} news={news} />
    </PaginationWrapper>
  );
};

export default NewsListWithPagination;
