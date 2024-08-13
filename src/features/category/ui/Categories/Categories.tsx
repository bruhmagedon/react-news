import { CategoriesType } from "@/entities/category";
import { ForwardedRef, forwardRef } from "react";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

/*№Кейс - обернуть компонет в forwardRef чтобы получить реф как пропсы */
const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className="flex w-full gap-[8px] items-start box-border overflow-x-auto whitespace-nowrap scrollbar-none"
      >
        <button
          onClick={() => setSelectedCategory(null)}
          className={`flex items-center py-[8px] px-[16px] border-none rounded-[32px] bg-[#E7E7FF] ${
            !selectedCategory ? "text-[#6B4EFF] " : ""
          }`}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center py-[8px] px-[16px] border-none rounded-[32px] bg-[#E7E7FF] ${
                selectedCategory === category ? "text-[#6B4EFF] " : ""
              }`}
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
