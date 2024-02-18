import Skeleton from "../../components/Skeleton/Skeleton";

// HOС (компонент высшего порядка) / рендер пропсы
// условно рендерим либо компонент либо скелетон
// компонент может быть любым
const withSkeleton = (Component, type, count, direction) => {
  /*№Кейс - сделать унифицированный скелетон для разных компонентов */
  const WithSkeleton = (props) => {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }
    return <Component {...restProps} />;
  };

  return WithSkeleton;
};

export default withSkeleton;
