const Search = ({ keywords, setKeywords }) => {
  return (
    <>
      <div className="flex w-full bg-white gap-[12px]">
        <input
          type="text"
          value={keywords}
          className="w-full py-[6px] px-[10px] border-[1px] border-[#f2f3f5] rounded-[12px]"
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Поиск новости"
        />
      </div>
    </>
  );
};

export default Search;
