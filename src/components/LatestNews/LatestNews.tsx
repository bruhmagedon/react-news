import { getLatestNews } from "../../API/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { NewsApiResponse } from "../../interfaces";
import BannersList from "../BannersList/BannersList";

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <>
      <section className="flex flex-col w-full overflow-hidden gap-[32px]">
        <BannersList banners={data && data.news} isLoading={isLoading} />
      </section>
    </>
  );
};

export default LatestNews;
