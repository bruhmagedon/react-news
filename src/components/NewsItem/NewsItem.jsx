import { formatTimeAgo } from "../../helpers/formateTimeAgo";
const NewsItem = ({ item }) => {
    // console.log(`${item.image}`);
    return (
        <>
            <li className="flex w-full flex-col gap-[12px]">
                <div
                    className={`w-[64px] h-[64px] bg-[#f2f4f5] bg-center shrink-0 bg-cover`}
                    style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="flex flex-col gap-[8px]">
                    <h3 className="font-medium text-[14px]">{item.title}</h3>
                    <p className=" text-[12px] text-[#6c7072]">
                        {formatTimeAgo(item.published)} · by {item.author}
                    </p>
                </div>
            </li>
        </>
    );
};

export default NewsItem;
