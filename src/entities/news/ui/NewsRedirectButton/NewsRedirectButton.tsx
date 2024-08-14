import { Button } from '@/shared/ui/Button/button';
import { cn } from '@/shared/utils/cn';

interface NewsButtonProps {
  className?: string;
  onClick?: any;
}

export const NewsButton = ({ className, onClick }: NewsButtonProps) => {
  return (
    <Button className={cn('', className)} onClick={onClick}>
      {'View more'}
    </Button>
  );
};
