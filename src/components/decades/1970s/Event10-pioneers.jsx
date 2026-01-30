import "./style-1970.css";
import pioneers from "../../../assets/1970-pioneers-updated.png";

const Event10 = () => {
  return (
    <div className="event-container panel-2">
      <div className="content-container">
        <div className="col-2">
          <h1 className="date">Spring</h1>
          <h1 className="year purple-txt">1978</h1>
          <h2>Congratulations to the first CMC co-educational class</h2>
          <p>
            In a milestone moment, CMC honored its first women
            graduates—including these four transfer students who completed their
            final two years at the College. Already making their mark in a short
            span of time, CMC’s female students were creating history at the
            College: Women's cross country became the first
            Claremont-Mudd-Scripps women's sport to win a conference title, and
            Mary Tracey ’81 was first female All-American for CMS Athletics. By
            the fall of 1978, 17 percent of ROTC students at the College were
            women.
          </p>
        </div>
        <div className="img-container col-3">
          <img
            src={pioneers}
            alt="(Top) Mary Tracey ’81, the first female to win and (bottom) the first female graduate class."
          />
        </div>
      </div>
    </div>
  );
};

export default Event10;
