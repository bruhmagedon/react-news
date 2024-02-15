import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ news }) => {
    return (
        <>
            <ul className="w-full flex flex-col gap-6">
                {news.map((item, index) => {
                    if (index) return <NewsItem key={item.id} item={item} />;
                })}
            </ul>
        </>
    );
};

export default NewsList;
