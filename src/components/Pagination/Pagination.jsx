import { formatDate } from "../../helpers/formateDate";

const Pagination = ({
    totalPages,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
    currentPage,
}) => {
    const activePageStyles = "font-medium";

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
                    {/* пустой массив размера количество страниц */}
                    {[...Array(totalPages)].map((_, index) => {
                        const activePage = currentPage === index + 1;

                        return (
                            <button
                                onClick={() => handlePageClick(index + 1)}
                                className={
                                    "p-[8px] border-none bg-white cursor-pointer " +
                                    (activePage ? activePageStyles : "")
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
