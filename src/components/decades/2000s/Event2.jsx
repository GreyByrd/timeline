import "./style-2000.css";

const Event2 = () => {
  return (
    <div className="event-container panel-purple">
      <div className="col-2">
        <div>
          <h1 className="date">October 24</h1>
          <h1 className="year white-txt">2000</h1>
          <p>
            October 24: Dr. Jeane Kirkpatrick, United States representative to
            the United Nations under President Ronald Regan and first woman to
            serve as Permanent Representative to the UN, was the featured Res
            Publica speaker. The title of her talk was "Year 2000: Global
            Issues."
          </p>
        </div>
      </div>
      <div className="col-3">
        <img src="src/assets/placeholder.png" alt="Image." />
      </div>
    </div>
  );
};

export default Event2;
