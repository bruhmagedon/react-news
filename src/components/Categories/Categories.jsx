const Categories = ({
  categories,
  setSelectedCategories,
  selectedCategories,
}) => {
  return (
    <>
      <div className="flex w-full gap-[8px] items-start box-border overflow-x-auto whitespace-nowrap scrollbar-none">
        {categories.map((category) => {
          return (
            <button
              className={
                selectedCategories === category
                  ? "flex items-center py-[8px] px-[16px] border-none rounded-[32px] bg-[#E7E7FF] text-[#6B4EFF] "
                  : "flex items-center py-[8px] px-[16px] border-none rounded-[32px] bg-[#f2f4f5]"
              }
              key={category}
              onClick={() => setSelectedCategories(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
