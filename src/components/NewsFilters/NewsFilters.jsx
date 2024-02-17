import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCategories } from "../../API/apiNews";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);
  return (
    <>
      <div className="flex w-full gap-[12px] flex-col">
        {dataCategories ? (
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
          />
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
