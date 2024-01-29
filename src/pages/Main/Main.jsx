import { useEffect, useState } from "react";
import { getNews } from "../../API/apiNews";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await getNews();
                setLoading(false);
                setNews(response.news);
            } catch (err) {
                console.log(err);
            }
        };
        fetchNews();
    }, []);

    return (
        <>
            <main className="flex w-full flex-col gap-8">
                {news.length > 0 && !isLoading ? (
                    <NewsBanner item={news[0]} />
                ) : (
                    <Skeleton count={1} type="banner" />
                )}
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
