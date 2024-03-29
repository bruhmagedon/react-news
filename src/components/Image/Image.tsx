interface IProps {
  image: string;
}

const Image = ({ image }: IProps) => {
  return (
    <>
      {/* растягивающийся в пропорциях экран */}
      <div className="w-full h-auto relative pt-[80%] bg-[#f2f4f5]">
        {image ? (
          <img
            src={image}
            alt="news"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        ) : null}
      </div>
    </>
  );
};

export default Image;
