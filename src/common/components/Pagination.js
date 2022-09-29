import React from "react"; 

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <>
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </>
  );
};

export default Pagination;
