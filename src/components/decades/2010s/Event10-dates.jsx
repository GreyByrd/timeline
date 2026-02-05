import "./style-2010.css";
import ROTC from "../../../assets/2010-ROTC-centenial.jpg";

const Event10 = () => {
  return (
    <div className="event-container panel-maroon">
      <div className="content">
        <div className="col-2">
          <h1 className="year-sm white-txt">2018</h1>
          <p>
            <strong>2017:</strong> First women CARE fellows
          </p>
          <h1 className="year-sm white-txt">2018</h1>
          <p>
            The 29th CMC woman to complete ROTC,{" "}
            <strong>Lindsay Burton ’19</strong> reflected on her time as a cadet
            by exploring the history of women in the program, one year before
            its centennial. Following graduation, Burton served four years on
            active duty in the U.S. Army as a Platoon Leader.
          </p>
        </div>
        <div className="col-4">
          <img src={ROTC} />
        </div>
      </div>
    </div>
  );
};

export default Event10;
