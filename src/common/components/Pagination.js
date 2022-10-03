import React from "react";

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <>
      {goToPrevPage && (
        <button onClick={goToPrevPage}> 
          <a href="#top" style={{textDecoration: "none"}}>Previous</a>
        </button>
      )}
      {goToNextPage && (
        <button onClick={goToNextPage}>
          <a href="#top" style={{textDecoration: "none"}}>Next</a>
        </button>
      )}
    </>
  );
};

export default Pagination;
