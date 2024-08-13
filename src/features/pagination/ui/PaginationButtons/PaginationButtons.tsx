import { IPaginationProps } from "../../model/types";

const PaginationButtons = ({
  totalPages,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
  currentPage,
}: IPaginationProps) => {
  return (
    <div className="flex items-center w-full justify-center gap-[12px]">
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
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
                (activePage ? "font-medium cursor-auto" : "cursor-pointer")
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
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className="border-none bg-white cursor-pointer disabled:cursor-auto"
      >
        {">"}
      </button>
    </div>
  );
};

export default PaginationButtons;
