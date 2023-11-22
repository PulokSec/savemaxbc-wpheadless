import { motion } from 'framer-motion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  setCurrentPage: (selected: number) => void;
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  setCurrentPage,
  currentPage,
  totalPages,
}) => {
  const handlePageClick = ({ selected }: { selected: number }) => {
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
    <motion.div
      variants={paginationVariants}
      initial='hidden'
      animate='visible'
    >
      <ReactPaginate
        breakLabel={<span className='mr-4'>...</span>}
        nextLabel={
          showNextButton ? (
            <span className='bg-lightGray flex h-10 w-10 items-center justify-center rounded-md'>
              <BsChevronRight />
            </span>
          ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={
          showPrevButton ? (
            <span className='bg-lightGray mr-4 flex h-10 w-10 items-center justify-center rounded-md'>
              <BsChevronLeft />
            </span>
          ) : null
        }
        containerClassName='flex items-center justify-center mt-8 mb-4'
        pageClassName='block border- border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4'
        activeClassName='bg-[#082f49] text-white'
      />
    </motion.div>
  );
};

export default Pagination;
