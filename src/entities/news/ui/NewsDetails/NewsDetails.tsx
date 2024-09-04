import { formatTimeAgo } from '@/shared/utils/formatTimeAgo';
import { INews } from '../..';
import styles from './styles.module.css';
import Image from '@/shared/ui/Image/Image';

interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className='grid grid-cols-[1fr_1fr] md:grid-cols-[1fr]'>
      <Image image={item.image} />

      <div className='text-xs text-[#6c7072]'>
        <p>
          {item.description} ({item.language}){' '}
          <a target='_blank' href={item.url}>
            Read more...
          </a>
        </p>
        <p className='px-[20px] py-0 md:px-0 md:py-[20px]'>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul>
          {item.category.map((category) => {
            return (
              <button className='flex items-center rounded-[32px] border-[none] bg-[#e7e7ff] px-4 py-2 text-[#6b4eff]'>
                {category}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;
