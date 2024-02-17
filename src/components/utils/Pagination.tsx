import { motion } from 'framer-motion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { getPaginationItems } from '@/lib/usePagination';

import PageLink from './PageLink';

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage,
}: Props) {
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);
  console.log(lastPage);
  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      variants={paginationVariants}
      initial='hidden'
      animate='visible'
    >
      <nav className={`flex flex-wrap ${pageNums?.length === 1 && 'hidden'}`} aria-label='Pagination'>
        <PageLink
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className='flex h-10 w-10 items-center justify-center rounded-md'
        >
          <p className='text-white'>
            <BsChevronLeft />
          </p>
        </PageLink>
        {pageNums.map((pageNum, idx) => (
          <PageLink
            key={idx}
            active={currentPage === pageNum}
            disabled={isNaN(pageNum)}
            onClick={() => setCurrentPage(pageNum)}
          >
            {pageNum === -1 || NaN ? '...' : pageNum}
          </PageLink>
        ))}
        <PageLink
          disabled={currentPage === lastPage || lastPage === 0}
          onClick={() => setCurrentPage(currentPage + 1)}
          className='flex h-10 w-10 items-center justify-center rounded-md '
        >
          <p className='text-white'>
            <BsChevronRight />
          </p>
        </PageLink>
      </nav>
    </motion.div>
  );
}
