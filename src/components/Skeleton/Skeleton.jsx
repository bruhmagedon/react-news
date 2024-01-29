import { formatDate } from "../../helpers/formateDate";

const Skeleton = ({ count = 1, type = "banner" }) => {
    return (
        <>
            {count > 1 ? (
                <ul className="flex flex-col gap-[12px]">
                    {[...Array(count)].map((_, index) => {
                        return (
                            <li
                                key={index}
                                className={
                                    type === "banner"
                                        ? "pt-[100%] relative skeleton"
                                        : "h-[80px] skeleton"
                                }
                            ></li>
                        );
                    })}
                </ul>
            ) : (
                <li
                    className={
                        type === "banner"
                            ? "pt-[100%] relative skeleton"
                            : "h-[80px] skeleton"
                    }
                >
                    {}
                </li>
            )}
        </>
    );
};

export default Skeleton;
