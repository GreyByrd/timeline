import "./style-2010.css";
import ROTC from "../../../assets/2010-ROTC-centenial.jpg";

const Event9 = () => {
  return (
    <div className="event-container panel-maroon white-txt">
      <div className="content">
        <div className="col-2">
          <h1 className="honors-trailblazer">Trailblazer</h1>
          <h1 className="year-sm white-txt">2018</h1>
          <h2>Achievement in Uniform</h2>
          <p>
            As the Claremont Colleges’ ROTC program celebrated its centennial,
            the 29th CMC woman to complete ROTC,{" "}
            <strong>Lindsay Burton ’19</strong>,{" "}
            <a
              href="https://www.cmc.edu/news/lindsay-burton-%E2%80%9919-explores-history-of-women-in-cmcs-rotc"
              target="_blank"
              aria-label="Read article:Lindsay Burton ’19 explores the history of women in CMC’s ROTC (opens in new tab)"
            >
              reflected on her time
            </a>{" "}
            as a cadet by exploring the history of women in the program.
            Following graduation, Burton served four years on active duty in the
            U.S. Army as a Platoon Leader.
          </p>
        </div>
        <div className="col-4">
          <img
            className="fullwidth"
            src={ROTC}
            alt="Lindsay Burton and other ROTC students performing march."
          />
        </div>
      </div>
    </div>
  );
};

export default Event9;
