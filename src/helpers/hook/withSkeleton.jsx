import Skeleton from "../../components/Skeleton/Skeleton";

// HOOK (функция высшего порядка)
// условно рендерим либо компонент либо скелетон
// компонент может быть любым
const withSkeleton = (Component, type, count, direction) => {
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
