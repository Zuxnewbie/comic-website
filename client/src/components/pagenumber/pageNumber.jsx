import { createSearchParams, useNavigate } from "react-router-dom";
import "./pageNumber.scss";
import { memo } from "react";

const PageNumber = ({ text, currentPage, icon, setCurrentPage }) => {
  const navigate = useNavigate();


  const handleChangePage = () => {
    if (!(text === '...')) {
        setCurrentPage(+text)
        navigate({
            pathname: "/new/",
            search: createSearchParams({
                page: text
            }).toString()
        });
    }
  }

  return (
    <div
      className={`${+text === +currentPage ? 'active' : 'not-active'} ${text === '...' ? 'cursor-text' : 'cursor-pointer'} page-number`}
      onClick={handleChangePage}
    >
      {icon || text}
    </div>
  );
};


export default memo(PageNumber);
