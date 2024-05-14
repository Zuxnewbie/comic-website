import "./banner.scss"

const BannerComponent = () => {
  return (
    <>
        <div className="container">
          <div className="hero">
            <div className="hero-content">
              <div className='hero-content-left'>

                <div className="content-left-child">
                  <a href="/">
                    <div className="child-item">
                        <img className="cover" src="https://i.truyenvua.com/slider/290x191/slider_1559213537.jpg?gt=hdfgdfg&amp;mobile=2" alt="cover"/>
                        <div className="bottom-shadow"></div>
                        <div className="captions">
                            <h3>Thanh Gươm Diệt Quỷ</h3>
                        </div>
                        <div className="chapter red">Chương 205.6</div>
                    </div>
                  </a>
                </div>

                <div className="content-left-child">
                  <a href="/">
                    <div className="child-item">
                        <img className="cover" src="https://i.truyenvua.com/slider/290x191/slider_1559213335.jpg?gt=hdfgdfg&mobile=2" alt="cover"/>
                        <div className="bottom-shadow"></div>
                        <div className="captions">
                            <h3>Onepunch Man</h3>
                        </div>
                        <div className="chapter orange">Chương 254</div>
                    </div>
                  </a>
                </div>

              </div>


              <div className='hero-content-middle'>
                <div className="content-middle-child">
                    <a href="/">
                      <div className="child-item open">
                          <img className="cover" src="https://i.truyenvua.com/slider/583x386/slider_1560573084.jpg?gt=hdfgdfg&mobile=2" alt="cover"/>
                          <div className="bottom-shadow"></div>
                          <div className="captions">
                            <h5>Thể loại: Action, Adventure, Comedy, Shounen, Supernatural</h5>
                              <h3>Học Viện Anh Hùng</h3>
                          </div>
                          <div className="chapter green">Chương 420</div>
                          <div className="excerpt">Tuyện tiếp nối chap 545 của Fairy Tail, khi nhóm Natsu đi làm nhiệm vụ trăm năm.</div>
                      </div>
                    </a>
                </div>

              </div>
              <div className='hero-content-left'>
              <div className="content-left-child">
                  <a href="/">
                    <div className="child-item">
                        <img className="cover" src="https://i.truyenvua.com/slider/290x191/slider_1567830171.jpg?gt=hdfgdfg&mobile=2" alt="cover"/>
                        <div className="bottom-shadow"></div>
                        <div className="captions">
                            <h3>Vương Giả Thiên Hạ</h3>
                        </div>
                        <div className="chapter blue">Chương 794</div>
                    </div>
                  </a>
                </div>

                <div className="content-left-child">
                  <a href="/">
                    <div className="child-item">
                        <img className="cover" src="https://i.truyenvua.com/slider/290x191/slider_1559213335.jpg?gt=hdfgdfg&mobile=2" alt="cover"/>
                        <div className="bottom-shadow"></div>
                        <div className="captions">
                            <h3>Onepunch Man</h3>
                        </div>
                        <div className="chapter purple">Chương 254</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default BannerComponent;