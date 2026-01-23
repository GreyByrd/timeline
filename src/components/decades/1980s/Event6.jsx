import "./style-1980.css";
import ath from "../../../assets/1980-ath.png";

const Event6 = () => {
  return (
    <div className="event-container-wide panel-gray">
      <div className="col-2">
        <h1 className="date">Fall of</h1>
        <h1 className="year-sm maroon-txt">1982</h1>
        <h2>The Ath gets a new home</h2>
        <p>
          To keep engaging in the conversations that drove world affairs, the
          first fundraisers for the Athenaeum, led by a $1 million gift from
          Marian Miner Cook, broke ground on a new building. Ms. Cook’s gift
          continued the tradition of her late husband, John Brown Cook, who
          sponsored congressional and senatorial internships, a lecture series,
          and a library. "My husband was a creative man in his business and
          philanthropic interests. I shared many of his interests, and he shared
          many of mine,” said Ms. Cook. “Together, we had a challenging and
          exciting life. I hope the Athenaeum will help students to experience
          similar intellectual challenges and excitement."
        </p>
      </div>
      <div className="col-3">
        <img src={ath} alt="xxx." />
      </div>
    </div>
  );
};

export default Event6;
