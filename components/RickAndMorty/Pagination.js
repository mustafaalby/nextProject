import React, { useState, useEffect } from "react";
import RickStyle from "../../styles/RickItem.module.css";
const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(props.page);

  const [pageList, setPageList] = useState([]);
  const [a, setA] = useState(false);
  useEffect(() => {
    setPageList([]);
    for (let i = 1; i <= props.maxPage; i++) {
      setPageList((prev) => [...prev, i]);
    }
  }, [props.maxPage]);
  const updatePage = (e) => {
    let p = e.target.value;
    props.updatePage({ page: p });
  };
  return (
    <div>
      <div className={RickStyle.List}>
        <label>Page No: </label>
        <select onChange={updatePage}>
          {pageList.map((x, index) => (
            <option key={index} value={x}>
              {x}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Pagination;
