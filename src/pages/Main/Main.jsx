import { useEffect, useState } from "react";
import { getNews } from "../../API/apiNews";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setLoading(true);
            const response = await getNews(currentPage, pageSize);
            setLoading(false);
            setNews(response.news);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        console.log(currentPage);
        fetchNews(currentPage);
    }, [currentPage]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <main className="flex w-full flex-col gap-8">
                {news.length > 0 && !isLoading ? (
                    <NewsBanner item={news[0]} />
                ) : (
                    <Skeleton count={1} type="banner" />
                )}
                <Pagination
                    handleNextPage={handleNextPage}
                    handlePageClick={handlePageClick}
                    handlePrevPage={handlePrevPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
                {!isLoading ? (
                    <NewsList news={news} />
                ) : (
                    <Skeleton count={10} type="item" />
                )}
            </main>
        </>
    );
};

export default Main;
