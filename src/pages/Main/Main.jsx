import { useEffect, useState } from "react";
import { getNews, getCategories } from "../../API/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";

const Main = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [keywords, setKeywords] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const debouncedKeywords = useDebounce(keywords, 1500);

  const fetchNews = async (currentPage) => {
    try {
      setLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategories === "All" ? "" : selectedCategories,
        keywords: debouncedKeywords,
      });
      setLoading(false);
      setNews(response.news);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategories = async (currentPage) => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategories, debouncedKeywords]);

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
        <Categories
          categories={categories}
          setSelectedCategories={setSelectedCategories}
          selectedCategories={selectedCategories}
        />
        <Search keywords={keywords} setKeywords={setKeywords} />
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

        <Pagination
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
          handlePrevPage={handlePrevPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </main>
    </>
  );
};

export default Main;
