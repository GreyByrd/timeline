import "./style-1980.css";
import jil02 from "../../../assets/1980-profile-jil-ath.png";

const Event8 = () => {
  return (
    <div className="event-container-sm panel-white">
      <div className="col-3">
        <h1 className="year-sm maroon">1987</h1>
        <h2>Familiar face at the Ath</h2>
        <p>
          CMC First Lady <strong>Jil Stark</strong> is named the first female director of the
          Athenaeum, carrying Marian Miner Cook’s charge to bring “intellectual
          challenges and excitement” to CMC students.
        </p>
      </div>
      <div className="col-3">
        <img
          className="ani"
          src={jil02}
          alt-text="Jil Stark, January 1986."
        ></img>
      </div>
    </div>
  );
};

export default Event8;
