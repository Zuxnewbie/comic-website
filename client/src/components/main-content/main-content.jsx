import "./main-content.scss"
// import { apiGetAllStory } from '../../services/listStory'
import { getStories } from "../../store/actions/story";
import {  useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

const MainContentComponent = () => {
  const dispatch = useDispatch()
  const { stories } = useSelector(state => state.story)

  // const [listStory, setListStory] = useState([])

  useEffect(() => {
    dispatch(getStories())
  }, [])
  console.log("stories result =>>>", stories);


  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const response = await apiGetAllStory()
  //     // console.log("response from category", response);
  //     if (response?.data.err === 0) {
  //       setListStory(response.data.response)
  //     }
  //   }
  //   fetchCategories()
  // }, [])
    return ( 
        <div className="homepage-list">
        <ul className="homepage-list-item">
          {stories?.length > 0 && stories.map((item) => {
            return(
                <li key={item.story_id}>
                  <div className="book_avatar">
                    <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893">
                      <img
                        className="center"
                        src={item.image}
                        alt={item.name}
                      />
                    </a>
                    <div className="top-notice">
                      <span className="time-ago">{item.timeSinceLastUpdate}</span>
                      <span className="type-label hot">Hot</span>
                    </div>
                  </div>
                  <div className="book_info">
                    <div className="book_name">
                      <h3 className="name">
                        <a
                          title={item.name}
                          href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893"
                        >
                          {item.name}
                        </a>
                      </h3>
                    </div>
                    <div className="last_chapter">
                      <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893-chap-669.html">
                        Chương {item.chapter_count}
                      </a>
                    </div>
                  </div>
                </li>
            )
          })}

        </ul>
      </div>
     );
}
 
export default MainContentComponent;