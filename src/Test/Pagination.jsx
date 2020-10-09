import React from 'react';
import lodash from 'lodash';

const Pagination = props => {
const pagesCount = Math.ceil(props.totalCount / props.pageSize);
if(pagesCount === 1) return null;
const pages = lodash.range(1, pagesCount + 1)

  return (
    <div>
     <nav>
      <ul className='pagination'>
       {pages.map(page => 
       <li key={page} className={page === props.currentPage ? 'page-item active' : 'page-item'}>
       <a href='#' className='page-link' onClick = {() => props.onPageChange(page)}>{page}</a>
       </li> )}
       
      </ul>
     </nav>
    </div>
  )
}

export default Pagination;