import "./style-2020.css";

const Event4 = () => {
  return (
    <div className="event-container-sm panel-white">
      <div className="col-2">
        <div>
          <h1 className="date">April 5</h1>
          <h1 className="year-sm yellow-txt">2023</h1>
          <p>
            <strong>Alice Chang ’15</strong> and{" "}
            <strong>Sara Linssen ’16</strong> work for Uzima Chicken Rwanda and
            Uganda.
          </p>
        </div>
      </div>
      <div className="col-3">
        <img src="src/assets/profile-img.png" alt="Image." />
      </div>
    </div>
  );
};

export default Event4;
