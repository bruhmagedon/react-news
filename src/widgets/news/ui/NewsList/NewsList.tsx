import { INews } from "@/entities/news";
import NewsCard from "@/entities/news/ui/NewsCard/NewsCard";
import withSkeleton from "@/shared/hocs/withSkeleton";

interface Props {
  news?: INews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
  viewNewsSlot?: (news: INews) => React.ReactNode;
}

const NewsList = ({ news, type = "item", viewNewsSlot }: Props) => {
  return (
    <ul
      className={`${
        type === "item"
          ? "w-full flex flex-col gap-6"
          : "banners-list w-full  gap-[12px] box-border md:max-h-[1200px] md:overflow-y-auto"
      }`}
    >
      {news?.map((item) => {
        return (
          <NewsCard
            key={item.id}
            viewNewsSlot={viewNewsSlot}
            item={item}
            type={type}
          />
        );
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
