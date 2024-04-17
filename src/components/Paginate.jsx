import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Paginate = () => {
  const [pagenumber, setPagenumber] = useState(0);
  function handlePagechange(e) {
    setPagenumber(e.selected);
    console.log(pagenumber);
  }

  return (
    <ReactPaginate
      previousLabel={"<<"}
      nextLabel={">>"}
      pageCount={9}
      onPageChange={handlePagechange}
      pageRangeDisplayed={8}
      containerClassName={"paginationbttn"}
      disabledClassName={"disabledbttn"}
      previousLinkClassName={"previousbttn"}
      nextLinkClassName={"nextbttn"}
      activeClassName={"activebttn"}
    />
  );
};

export default Paginate;
