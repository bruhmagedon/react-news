import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../API/apiNews";
import Slider from "../Slider/Slider";
import { CategoriesApiResponse, IFilters } from "../../interfaces";

interface IProps {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: IProps) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );
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
