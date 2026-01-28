import "./style-2000.css";
import suzi from "../../../assets/2000-profile-suzi.png";

const Event4 = () => {
  return (
    <div className="event-container panel-white">
      <div className="col-2">
        <div>
          <h1 className="date purple-txt">March 16</h1>
          <h1 className="year-sm purple-txt">2002</h1>
          <h2>Champion Swimmer</h2>
          <p>
            In 2002, <strong>Suzy Nicoletti ’02</strong> became the first woman
            to be a CMS national swimming champion with her CMS and SCIAC
            record-breaking time of 2:21.17 for the 200-yard breaststroke during
            the NCAA Division III Swimming and Diving Championships in Oxford,
            Ohio.
          </p>
        </div>
      </div>
      <div className="col-2">
        <img src={suzi} alt="Suzi Nicoletti ’02." />
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

export default Event4;
