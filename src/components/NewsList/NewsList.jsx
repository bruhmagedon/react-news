const NewsList = ({ news }) => {
  return (
    <>
      <ul className="">
        {news.map((item) => {
          return <li key={item.id}></li>;
        })}
      </ul>
    </>
  );
};

export default NewsList;
