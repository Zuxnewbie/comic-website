import "./comment.scss"

const CommentComponent = () => {
    return ( 
        <div className="comment-container">
        <span className="story-detail-title">
          <i className="fa fa-comments"></i>
          Bình Luận (<span className="comment-count">13</span>)
        </span>
        <div className="notify-fanpage">
          Vào <a href="https://www.facebook.com/truyenqqq">Fanpage</a> like và
          theo dõi để ủng hộ TruyenQQ nhé.
        </div>

        <div className="comment-layout">
          <div className="form-comment">
            <div className="message-content">
              <div className="comment-placeholder">
                hãy bình luận có văn hóa để tránh bị khóa tài khoản
              </div>
              <div className="mess-input hidden">
                <textarea
                  className="textarea"
                  placeholder="Nội dung bình luận"
                  id="content_comment"
                ></textarea>
                <div>
                  <span className="text-center">
                    <input
                      value="thevupro753"
                      className="input"
                      id="name_comment"
                      type="text"
                      placeholder="Họ tên"
                    />
                  </span>
                  <span className="text-center">
                    <input
                      value="thevupro753@gmail.com"
                      className="input"
                      id="email_comment"
                      type="email"
                      placeholder="Email"
                      disabled=""
                    />
                  </span>
                  <button
                    type="submit"
                    className="button is-info is-rounded submit_comment"
                  >
                    Gửi
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="list-comment">
            <div className="outside-comment">
              <div className="avatar-comment">
                <img
                  src="https://avatar.truyenvua.com/160x160/avatar_1714549106.jpg?gt=hdfgdfg&amp;mobile=2"
                  alt="Mình Nguyễn"
                />
              </div>

              <div className="item-comment">
                <div className="outline-content-comment">
                  <div className="username">
                    <strong>Mình Nguyễn</strong>
                  </div>
                  <div className="content-comment">
                    <span>Dù bộ này vứt hết nhận thức bình thường đi nma nó đủ hài để t k để tâm đến nó</span>{" "}

                  </div>
                </div>
                <div className="action-comment">
                  <span className="like-comment">
                    <i className="fa fa-thumbs-up"></i>{" "}
                    <span className="total-like-comment">0</span>
                  </span>
                  <span className="reply-comment">
                    <i className="fa fa-comment"></i> Trả lời
                  </span>

                  <span className="time">
                    <i className="fa fa-clock"></i> 8 Ngày Trước
                  </span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
     );
}
 
export default CommentComponent;