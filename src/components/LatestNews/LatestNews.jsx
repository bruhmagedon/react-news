import { getLatestNews } from "../../API/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import BannersList from "../BannersList/BannersList";

// Список баннеров
const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <>
      <section className="flex flex-col w-full overflow-hidden gap-[32px]">
        {/* №Кейс - проверка на сущетвование пропса*/}
        <BannersList banners={data && data.news} isLoading={isLoading} />
      </section>
    </>
  );
};

export default LatestNews;
