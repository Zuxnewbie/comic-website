import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import "./pageNumber.scss";
import { memo } from "react";

const PageNumber = ({ text, currentPage, icon, setCurrentPage }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()
  let entries = searchParams.entries()

  const append = (entries) => {
    let params = []
    searchParams.append('page', +text)
    for(let entry of entries){
      params.push(entry)
    }
    console.log(params);
    let a = {}
    return a
  }



  const handleChangePage = () => {
    if (!(text === '...')) {

        append(entries)

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
