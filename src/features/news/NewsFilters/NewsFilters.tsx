import { useTheme } from '@/app/providers/ThemeProvider';
import Categories from '@/features/category/ui/Categories/Categories';
import Search from '@/features/search/ui/Search/Search';
import Slider from '@/features/slider/ui/Slider/Slider';
import { setFilters } from '@/entities/news/model/newsSlice';
import { CategoriesType } from '@/entities/category';
import { useAppDispatch } from '@/app/store/appStore';
import { IFilters } from '@/shared/interfaces';

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

const NewsFilters = ({ filters, categories }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className='flex flex-col gap-[12px]'>
      {categories ? (
        <Slider>
          <Categories
            categories={categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(setFilters({ key: 'keywords', value: keywords }))}
      />
    </div>
  );
};

export default NewsFilters;
