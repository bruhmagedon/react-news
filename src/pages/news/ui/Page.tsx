import { useAppSelector } from "@/app/store/appStore";
import { NewsDetails } from "@/entities/news";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const currentNews = useAppSelector((state) => state.news.currentNews);

  if (!currentNews) {
    return (
      <div>
        <h1>Cannot find news</h1>
        <Link to={"/"}>
          <h3>Go to main page</h3>
        </Link>
      </div>
    );
  }
  return (
    <main className="flex flex-col gap-[32px] w-full gap-[">
      <h1>{currentNews.title}</h1>
      <NewsDetails item={currentNews} />
    </main>
  );
};

export default NewsPage;
