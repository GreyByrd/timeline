import "./style-1980.css";
import sciac from "../../../assets/1980-sciac-wins.png";

const Event9 = () => {
  return (
    <div className="event-container panel-maroon">
      <div className="col-2">
        <h1 className="year-sm white-txt">1988</h1>
        <h2>Athletic achievement</h2>
        <p>
          CMS Athletics won men's, women's, and overall Southern California
          Intercollegiate Athletics Conference All-Sports trophies for the first
          time. In addition, Athena soccer player and future CMC Hall of Famer
          <strong> Robyn Hollingshead</strong> was named a SCIAC Player of the
          Year.
        </p>
      </div>
      <br />
      <div className="col-3">
        <img src={sciac} alt-text="Collage of CMC women's sports teams." />
      </div>
    </div>
  );
};

export default Event9;
