import { useEffect, useState } from "react";
import { getNews } from "../../API/apiNews";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";

const Main = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
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
                {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
                <NewsList news={news} />
            </main>
        </>
    );
};

export default Main;
