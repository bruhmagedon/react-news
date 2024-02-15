import { formatDate } from "../../helpers/formateDate";

// Пагинация новостей (по 10 штук)
const Pagination = ({
  totalPages,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  currentPage,
}) => {
  const activePageStyles = "font-medium cursor-auto";

  return (
    <>
      <div className="flex items-center w-full justify-center gap-[12px]">
        <button
          disabled={currentPage <= 1}
          onClick={handlePrevPage}
          className="border-none bg-white cursor-pointer disabled:cursor-auto"
        >
          {"<"}
        </button>
        <div className="flex items-center justify-center ">
          {/* пустой массив размера количества страниц */}
          {[...Array(totalPages)].map((_, index) => {
            const activePage = currentPage === index + 1;

            return (
              <button
                onClick={() => handlePageClick(index + 1)}
                className={
                  "p-[8px] border-none bg-white " +
                  // активная страница
                  (activePage ? activePageStyles : "cursor-pointer")
                }
                key={index}
                disabled={activePage}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <button
          disabled={currentPage >= 10}
          onClick={handleNextPage}
          className="border-none bg-white cursor-pointer disabled:cursor-auto"
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default Pagination;
