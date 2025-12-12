import "./style-2000.css";

const Event3 = () => {
  return (
    <div className="event-container panel-white">
      <div className="col-2">
        <div>
          <h1 className="date">October 24</h1>
          <h1 className="year purple-txt">2000</h1>
          <h2>Student Excellence</h2>
          <p>
            <strong>March 16: Suzy Nicoletti ’02</strong> becomes the first CMS
            women’s national champion. She was awarded the Avery scholarship to
            swim in China to study first-hand what the country’s rigorous swim
            institutes are like.
          </p>
        </div>
      </div>
      <div className="col-3">
        <img src="src/assets/1980s-placeholder.png" alt="Image." />
        <p className="caption-alt">
          During the NCAA Division III Swimming and Diving Championships in
          Oxford, Ohio, Nicoletti, who had just missed winning the 100-yard
          breaststroke (her strongest event) during Friday's finals, went on the
          next day to win the 200-yard breaststroke with a CMS and SCIAC record
          time of 2:21.17.
        </p>
      </div>
    </div>
  );
};

export default Event3;
