import "./paginate.scss";
const PaginateComponent = () => {
  return (
    <>
      <div className="page_redirect">
        <a href="/">
          <p className="active">1</p>
        </a>
        <a href="/">
          <p>2</p>
        </a>
        <a href="/">
          <p>3</p>
        </a>
        <a href="/">
          <p>4</p>
        </a>
        <a href="/">
          <p>5</p>
        </a>
        <a href="/">
          <p>
            <span aria-hidden="true">›</span>
          </p>
        </a>
        <a href="/">
          <p>
            <span aria-hidden="true">»</span>
          </p>
        </a>{" "}
      </div>
    </>
  );
};

export default PaginateComponent;
