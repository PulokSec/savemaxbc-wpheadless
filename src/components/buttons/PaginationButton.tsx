'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
interface PaginationButtonsProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

const PaginationButtons = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationButtonsProps) => {
  const router = useRouter();
  const handlePageClick = ({ selected }: { selected: number }) => {
    router.push(`/listings?page=${selected}`);
    setCurrentPage(selected);
  };

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
  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;
  return (
    <motion.div variants={paginationVariants} initial='block' animate='visible'>
      <ReactPaginate
        breakLabel={<span className='mr-4'>...</span>}
        nextLabel={
          showNextButton ? (
            <span className='flex h-10 w-10 items-center justify-center rounded-md bg-[#115E59] text-white'>
              <BsChevronRight />
            </span>
          ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={
          showPrevButton ? (
            <span className='mr-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#115E59] text-white'>
              <BsChevronLeft />
            </span>
          ) : null
        }
        containerClassName='flex items-center justify-center mt-8 mb-4'
        pageClassName='block border-solid border-[#115E59] hover:bg-[#115E59] hover:text-white w-10 h-10 flex items-center justify-center rounded-md mr-4'
        activeClassName='bg-[#115E59] text-white'
      />
    </motion.div>
  );
};

export default PaginationButtons;
