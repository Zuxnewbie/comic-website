import "./main-content.scss"
import { apiAllComic } from '../../services/listComic'
import { useState, useEffect } from "react";

const MainContentComponent = () => {

  const [listComic, setListComic] = useState([])


  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiAllComic()
      // console.log("response from category", response);
      if (response?.data.err === 0) {
        setListComic(response.data.response)
      }
    }
    fetchCategories()
  }, [])
    return ( 
        <div className="homepage-list">
        <ul className="homepage-list-item">
          {listComic?.length > 0 && listComic.map((item) => {
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