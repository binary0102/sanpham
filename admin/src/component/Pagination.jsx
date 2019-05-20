import React, { useState, useEffect } from 'react';
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
}
export const Pagination = ({ totalRecords, pageLimits = 30, pageNeighbours = 0 , onPageChanged, ...props}) => {
    const totalPages = Math.ceil(totalRecords / pageLimits);
    const [currentPage, setCurrentPage] = useState(1);
    const fetchPageNumber = () => {
        const totalNumbers = (pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;
        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
            let pages = range(startPage, endPage);
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);
            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }

            return [1, ...pages, totalPages];

        }

        return range(1, totalPages);

    }
    function gotoPage(page) {
        setCurrentPage(page); 
        onPageChanged(page);
    } 

    function handleClick(page,e) {
        e.preventDefault();
        gotoPage(page);
    }
    function handleMoveLeft(e) {
        e.preventDefault();
        gotoPage(currentPage - pageNeighbours * 2 - 1);
      };
    
    function handleMoveRight(e) {
        e.preventDefault();
        gotoPage(currentPage + pageNeighbours * 2 + 1);
      };

    const pages = fetchPageNumber();
    useEffect(() => {
        gotoPage(1);
    
    },[]) 
 
   
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page, index) => {
                    if (page === LEFT_PAGE) return (
                        <li onClick={handleMoveLeft} key={index} className="page-item">
                            <a className="page-link" href="#" aria-label="Previous" >
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                    );

                    if (page === RIGHT_PAGE) return (
                        <li onClick={handleMoveRight} key={index} className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    );

                    return (
                        <li onClick={(e) => handleClick(page,e)} key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                            <a className="page-link" href="#" >{page}</a>
                        </li>
                    );
                }
                )}
            </ul>
        </nav>
    )
}
