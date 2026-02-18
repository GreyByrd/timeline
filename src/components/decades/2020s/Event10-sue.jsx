import "./style-2020.css";
import awardees from "../../../assets/2020-profile-sue.png";

const Event10 = () => {
  return (
    <div className="event-container">
      <div className="content">
        <div className="col-3">
          <h1 className="date">Jan 1</h1>
          <h1 className="year-sm yellow-txt">2023</h1>
          <h2>On the March</h2>
          <p>
            Led by the efforts of <strong>Sue Matteson King ’85 P’18</strong>,
            who chaired CMC’s 75th Anniversary Committee, Claremont McKenna
            College was represented in flowers and steel with an award-winning
            float in the 2023 Rose Parade. “Over 100 million people got to see
            CMC” thanks to Matteson King’s work, said CMC Alumni Association
            President Scott Torrey ‘P91 P’23 P’26.
          </p>
        </div>
        <div className="col-3">
          <img src={awardees} alt="Sue Matteson King." />
        </div>
      </div>
    </div>
  );
};

export default Event10;
