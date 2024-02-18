import withSkeleton from "../../helpers/hook/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";

const BannersList = ({ banners }) => {
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

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
