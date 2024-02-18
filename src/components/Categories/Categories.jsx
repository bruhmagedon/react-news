import { forwardRef } from "react";

/*№Кейс - обернуть компонет в forwardRef чтобы получить реф как пропсы */
const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }, ref) => {
    return (
      <div
        ref={ref}
        className="flex w-full gap-[8px] items-start box-border overflow-x-auto whitespace-nowrap scrollbar-none"
      >
        {/* Возможно можно и лучше сделать активность элемента через tailwind */}
        <button
          onClick={() => setSelectedCategory(null)}
          className={
            !selectedCategory
              ? "flex items-center py-[8px] px-[16px] border-none rounded-[32px] bg-[#E7E7FF] text-[#6B4EFF] "
              : "flex items-center py-[8px] px-[16px] border-none rounded-[32px] bg-[#f2f4f5]"
          }
        >
          All
        </button>
        {categories.map((categories) => {
          return (
            <button
              className={
                selectedCategory === categories
                  ? "flex items-center py-[8px] px-[16px] border-none rounded-[32px] bg-[#E7E7FF] text-[#6B4EFF] "
                  : "flex items-center py-[8px] px-[16px] border-none rounded-[32px] bg-[#f2f4f5]"
              }
              key={categories}
              onClick={() => setSelectedCategory(categories)}
            >
              {categories}
            </button>
          );
        })}
      </div>
    );
  }
);

export default Categories;
