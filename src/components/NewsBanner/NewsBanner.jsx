import { formatTimeAgo } from "../../helpers/formateTimeAgo";
import Image from "../Image/Image";

const NewsBanner = ({ item }) => {
  return (
    <>
      <div className="flex w-full flex-col gap-[12px]">
        <Image image={item?.image} />
        <h3 className="font-medium text-[16px]">{item.title}</h3>
        <p className=" text-[12px] text-[#6c7072]">
          {formatTimeAgo(item.published)} · by {item.author}
        </p>
      </div>
    </>
  );
};

export default NewsBanner;
