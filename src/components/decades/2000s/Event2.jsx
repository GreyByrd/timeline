import "./style-2000.css";

const Event2 = () => {
  return (
    <div className="event-container-sm panel-purple">
      <div className="col-2 white-txt">
        <h1 className="date">October 24</h1>
        <h1 className="year-sm white-txt">2010</h1>
        <p>
          <strong>Dr. Jeane Kirkpatrick</strong>, United States representative
          to the United Nations under President Ronald Regan and first woman to
          serve as Permanent Representative to the UN, was the featured Res
          Publica speaker.
        </p>
        <p>The title of her talk was "Year 2000: Global Issues."</p>
      </div>
      <div className="col-3">
        <img src="src/assets/profile-img.png" alt="Image." />
      </div>
    </div>
  );
};

export default Event2;
