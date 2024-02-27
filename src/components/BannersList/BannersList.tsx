import withSkeleton from "../../helpers/hook/withSkeletont";
import NewsBanner from "../NewsBanner/NewsBanner";
import { INews } from "../../interfaces";

interface IProps {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: IProps) => {
  return (
    <>
      <ul className="banners-list w-full gap-[12px] md:overflow-y-auto md:max-h-[1200px]">
        {banners?.map((banner) => {
          return <NewsBanner key={banner.id} item={banner} />;
        })}
      </ul>
    </>
  );
};

const BannersListWithSkeleton = withSkeleton<IProps>(
  BannersList,
  "banner",
  10,
  "row"
);

export default BannersListWithSkeleton;
