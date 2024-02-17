import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/hook/withSkeleton";

const NewsList = ({ news }) => {
  return (
    <>
      <ul className="w-full flex flex-col gap-6">
        {news.map((item, index) => {
          if (index) return <NewsItem key={item.id} item={item} />;
        })}
      </ul>
    </>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
