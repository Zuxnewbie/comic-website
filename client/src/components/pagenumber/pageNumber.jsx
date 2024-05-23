import { createSearchParams, useNavigate } from "react-router-dom";
import "./pageNumber.scss";
import { memo } from "react";

const PageNumber = ({ text, currentPage, icon, setCurrentPage }) => {
  const navigate = useNavigate();


  // const handleChangePage = () => {

  //     navigate({
  //       pathname: "/",
  //       search: createSearchParams({
  //         page: text,
  //       }).toString(),
  //     });
  // };

  const handleChangePage = () => {
    if (!(text === '...')) {
        setCurrentPage(+text)
        navigate({
            pathname: "/",
            search: createSearchParams({
                page: text
            }).toString()
        });
    }
  }

  return (
    <div className={+text === +currentPage ? `page-number active` : `page-number`} onClick={handleChangePage}>
      {icon || text}
    </div>
  );
};

export default memo(PageNumber);
