import "./list-chapter.scss"

export default function ListChapterComponent() {
  return (
    <div className="chapter-container">
    <h3>
      <i className="fa fa-database" aria-hidden="true"></i>
      Danh sách chương
    </h3>

    <div className="list-chapter">
      <div className="chapter-item">
        <div className="chapter-content">
          <div className="name-chap">
            <a
              href="https://truyenqqviet.com/truyen-tranh/quy-vuong-ve-huu-15663-chap-20.html"
            >
              Chương 20
            </a>
          </div>
          <div className="time-chap">02/05/2024 </div>
        </div>
        <div className="chapter-content">
          <div className="name-chap">
            <a
              href="https://truyenqqviet.com/truyen-tranh/quy-vuong-ve-huu-15663-chap-20.html"
            >
              Chương 20
            </a>
          </div>
          <div className="time-chap">02/05/2024 </div>
        </div>
      </div>
    </div>
  </div>
  )
}
