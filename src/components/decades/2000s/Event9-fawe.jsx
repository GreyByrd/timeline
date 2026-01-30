import "./style-2000.css";
import fawe from "../../../assets/2008_FAWE.png";

const Event9 = () => {
  return (
    <div className="event-container panel-gray">
      <div className="col-3">
        <h1 className="date">April 10</h1>
        <h1 className="year-sm purple-txt">2008</h1>
        <h2>Henry R. Kravis Prize in Leadership to awarded FAWE</h2>
        <p>
          <strong>Takako Mino 11’s</strong> debate program The Forum for African
          Women Educationalists (FAWE) earned the third annual Henry R. Kravis
          Prize in Leadership for its outstanding record providing 12 million
          Ugandan girls and women with access to education, contributing to
          improving their economic and social well-being.
        </p>
      </div>
      <div className="col-3">
        <img src={fawe} alt="Ugandan classroom." />
      </div>
    </div>
  );
};

export default Event9;
