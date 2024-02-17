import BannersList from "../BannersList/BannersList";

const LatestNews = ({ banners, isLoading }) => {
  return (
    <>
      <section className="flex flex-col w-full overflow-hidden gap-[32px]">
        <BannersList banners={banners} isLoading={isLoading} />
      </section>
    </>
  );
};

export default LatestNews;
