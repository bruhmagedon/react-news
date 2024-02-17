import withSkeleton from "../../helpers/hook/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";

const BannersList = ({ banners }) => {
  return (
    <>
      <ul className="banners-list w-full gap-[12px]">
        {banners?.map((banner) => {
          return <NewsBanner key={banner.id} item={banner} />;
        })}
      </ul>
    </>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
