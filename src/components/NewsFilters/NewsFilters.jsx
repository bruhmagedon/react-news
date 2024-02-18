import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../API/apiNews";
import Slider from "../Slider/Slider";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);
  return (
    <>
      <div className="flex w-full gap-[12px] flex-col">
        {dataCategories ? (
          <Slider>
            <Categories
              categories={dataCategories.categories}
              selectedCategory={filters.category}
              setSelectedCategory={(category) =>
                changeFilter("category", category)
              }
            />
          </Slider>
        ) : null}

        <Search
          keywords={filters.keywords}
          setKeywords={(keywords) => changeFilter("keywords", keywords)}
        />
      </div>
    </>
  );
};

export default NewsFilters;
