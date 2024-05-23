import "./new.scss"
import ContentHomeComponent from "../../components/content-home/content-home";
import PaginateComponent from "../../components/paginate/paginate";
import PopupComponent from "../../components/popup/popup";
import SearchCategory from "../../components/search/search";
import { useSearchParams } from "react-router-dom";
const NewPage = () => {
  const [params] = useSearchParams()
  console.log("params ==>", params.get('page'));

  return (
    <>
      <SearchCategory />
      <ContentHomeComponent />
      <PaginateComponent number = {params.get('page')}/>
      <PopupComponent />
    </>
  );
};

export default NewPage;
