import "./style-1980.css";
import laura from "../../../assets/1980-profile-laura-gg.png";

const Event7 = () => {
  return (
    <div className="event-container panel-maroon">
      <h1 className="honors-gray">Trailblazers</h1>
      <div className="col-3">
        <h1 className="year-sm white-txt">1985</h1>
        <h2>CMC’s first female Marshall Scholar</h2>
        <p>
          <strong>Michele Walsh ’85</strong>, a ROTC cadet with majors in
          psychology and philosophy, became the first woman and third Marshall
          Scholar in CMC history during her senior year. She would go on to
          study at Oxford and earn her Ph.D. at the University of Arizona, where
          she is currently on the faculty.
        </p>
        <br />
        <h2>Scholars of distinction</h2>
        <p>
          <strong>Laura (May) Grisolano ’86</strong> and{" "}
          <strong>Diane Silver ’88</strong> became CMC's first women students to
          become Truman Scholars — and third and fourth Truman Scholars in CMC
          history. A CMC Trustee and past president of the CMC Alumni
          Association, Grisolano earned her J.D. from the University of Chicago
          and is a licensed mediator practicing in Arizona. Silver has built a
          career as an advocate for good governance and environmental education.
        </p>
      </div>
      <div className="col-3">
        <img
          src={laura}
          alt-text="Collage of Laura Grisolano ’86 during her time at CMC and now."
        ></img>
      </div>
    </div>
  );
};

export default Event7;
