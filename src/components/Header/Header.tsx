import { formatDate } from "../../helpers/formateDate";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-[12px] w-full px-[12px] py-[24px] font-bold bg-white border-b-[2px] border-b-[#F2F4F5]">
        <h1 className="text-[28px]">NEWS BRUHMAGOMED</h1>
        <p className="text-[16px]">{formatDate(new Date())}</p>
      </header>
    </>
  );
};

export default Header;
