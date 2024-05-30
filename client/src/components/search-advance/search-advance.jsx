import "./search-advance.scss";

const SeachAdvanceComponent = () => {
  return (
    <>
      <div className="story-list-bl01 box">
        <div className="text-center">
          <button type="button" className="btn btn-info btn-collapse">
            <span className="show-text hidden">Hiện </span>
            <span className="hide-text">Ẩn </span>khung tìm kiếm
          </button>
        </div>

        <div className="advsearch-form">
          <div className="form-group clearfix">
            <p>
              <span className="icon-tick"></span> Tìm trong những thể loại này
            </p>
            <p>
              <span className="icon-cross"></span> Loại trừ những thể loại này
            </p>
            <p>
              <span className="icon-checkbox"></span> Truyện có thể thuộc hoặc
              không thuộc thể loại này
            </p>
          </div>

          <div className="form-group row text-center">
            <a
              className="btn btn-primary btn-sm btn-reset"
              href="https://truyenqqviet.com/tim-kiem-nang-cao.html">
              <i className="fa fa-repeat"></i> Reset
            </a>
          </div>

          <div className="form-group row">
            <div className="label-search">Thể loại truyện</div>
            <div
              className="genre-item"
              title="Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn, với diễn biến nhanh"
            >
              <span className="icon-checkbox" data-id="26"></span>Action{" "}
            </div>
          </div>

          <div className="form-group row">
            <div className="label-search">Tình Trạng</div>
            <div className="select select-search is-warning">
              <select className="custom-select" id="status">
                <option value="-1">Tất cả</option>
                <option value="0">Đang tiến hành</option>
                <option value="2">Hoàn thành</option>
              </select>
            </div>
          </div>

          <div className="form-group row">

            <div className="label-search">Số lượng chương</div>
            <div className="select select-search is-warning">
              <select className="custom-select" id="minchapter">
                <option value="0">&gt; 0</option>
                <option value="50">&gt;= 50</option>
                <option value="100">&gt;= 100</option>
                <option value="200">&gt;= 200</option>
                <option value="300">&gt;= 300</option>
                <option value="400">&gt;= 400</option>
                <option value="500">&gt;= 500</option>
              </select>
            </div>

            <div className="label-search">Sắp xếp</div>
            <div className="select select-search is-warning">
              <select className="custom-select" id="sort">
                <option value="0">Ngày đăng giảm dần</option>
                <option value="1">Ngày đăng tăng dần</option>
                <option value="2">Ngày cập nhật giảm dần</option>
                <option value="3">Ngày cập nhật tăng dần</option>
                <option value="4">Lượt xem giảm dần</option>
                <option value="5">Lượt xem tăng dần</option>
              </select>
            </div>
            
          </div>
          <div className="form-group clearfix">
            <div className="text-center">
              <button
                type="button"
                className="btn btn-success btn-search is-danger"
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeachAdvanceComponent;
