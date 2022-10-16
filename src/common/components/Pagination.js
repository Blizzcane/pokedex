import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <>
      {goToPrevPage && (
        <Button onClick={goToPrevPage} style={{ marginRight:"5px"}}> 
          <a href="#top" style={{textDecoration: "none", color:"white"}}>Prev</a>
        </Button>
      )}
      {goToNextPage && (
        <Button onClick={goToNextPage}>
          <a href="#top" style={{textDecoration: "none", color:"white"}}>Next</a>
        </Button>
      )}
    </>
  );
};

export default Pagination;
