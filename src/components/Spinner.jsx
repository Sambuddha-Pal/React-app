const Spinner = () => {
  return (
    <div class="d-flex justify-content-center ">
      <div
        className="spinner-border spinner"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Spinner;