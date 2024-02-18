import withSkeleton from "../../helpers/hook/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";

const BannersList = ({ banners }) => {
  return (
    <>
      <ul className="banners-list w-full gap-[12px] md:overflow-y-auto md:max-h-[1200px]">
        {/* Не переходит к map, если banners - null/undefined */}
        {banners?.map((banner) => {
          return <NewsBanner key={banner.id} item={banner} />;
        })}
      </ul>
    </>
  );
};
// Обращаемся к HOOK (работает как обычные callbacks)
const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
