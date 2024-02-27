import Skeleton from "../../components/Skeleton/Skeleton";
import { DirectionType, SkeletonType } from "../../interfaces";

interface IProps {
  isLoading: boolean;
}

// HOOK
const withSkeleton = <P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) => {
  const WithSkeleton = (props: IProps & P) => {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }
    return <Component {...(restProps as P)} />;
  };

  return WithSkeleton;
};

export default withSkeleton;
