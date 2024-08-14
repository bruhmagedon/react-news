import { formatTimeAgo } from '@/shared/utils/formatTimeAgo';
import { INews, NewsButton } from '../..';
import Image from '@/shared/ui/Image/Image';
import { ReactNode } from 'react';
import { cva } from 'class-variance-authority';

interface Props {
  item: INews;
  type: 'banner' | 'item';
  viewNewsSlot?: boolean;
  onRedirectClick?: (news: INews) => void;
}

const NewsCard = ({ item, type = 'item', onRedirectClick }: Props) => {
  return (
    <li
      className={`flex items-center justify-between gap-[12px] rounded-lg bg-[#efefef] p-[10px] dark:bg-[#2d2d2d] ${type === 'banner' && 'flex-col'}`}
    >
      {type === 'banner' ? (
        <Image className='relative h-auto w-full pt-[80%]' image={item?.image} />
      ) : (
        <Image
          className='relative h-[64px] w-[64px] shrink-0 bg-cover bg-center'
          image={item?.image}
        />
      )}
      <div className='flex flex-col gap-2'>
        <h3 className='text-[14px]'>{item.title}</h3>
        <p className='text-[12px] text-[#6c7072]'>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
      {onRedirectClick && (
        <NewsButton
          className={`font-semibold ${type === 'banner' ? 'w-full' : ''}`}
          onClick={() => onRedirectClick(item)}
        />
      )}
    </li>
  );
};

export default NewsCard;
