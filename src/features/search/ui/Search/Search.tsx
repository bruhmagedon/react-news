interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  return (
    <div className="flex w-full bg-white gap-[12px]">
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className="w-full py-[6px] px-[10px] border-[1px] border-[#f2f3f5] rounded-[12px]"
        placeholder="Javascript"
      />
    </div>
  );
};

export default Search;
