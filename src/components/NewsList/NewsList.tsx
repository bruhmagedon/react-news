import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/hook/withSkeletont";
import { INews } from "../../pages/interfaces";

interface IProps {
  news?: INews[];
}

const NewsList = ({ news }: IProps) => {
  return (
    <>
      <ul className="w-full flex flex-col gap-6">
        {news?.map((item, index) => {
          if (index) return <NewsItem key={item.id} item={item} />;
        })}
      </ul>
    </>
  );
};

const NewsListWithSkeleton = withSkeleton<IProps>(NewsList, "item", 10);

export default NewsListWithSkeleton;
