import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFiltes";

const Main = () => {
  return (
    <main className="main w-full gap-8 max-md:grid-cols-1">
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default Main;
