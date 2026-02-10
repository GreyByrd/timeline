import "./style-1990.css";
import tamaratina from "../../../assets/1990-profile-tamara-tina.png";

const Event7 = () => {
  return (
    <div className="event-container-wide">
      <h1 className="honors-yellow">Notables</h1>
      <div className="col-1">
        <h1 className="date">May</h1>
        <h1 className="year-sm yellow-txt">1992</h1>
        <h2>Impactful Lawyer</h2>
        <p>
          <strong>Tamara Lawson</strong>, who earned her degree in government
          from CMC in 1992, was{" "}
          <a
            className="yellow-txt"
            href="https://www.cmc.edu/newsfeed/tamara-lawson-92-named-dean-uw-law-school"
            target="_blank"
          >
            named the dean of the University of Washington School of Law
          </a>{" "}
          in 2022. Lawson returned to her alma mater the following year to
          deliver the 2023 Dr. Martin Luther King Jr. Commemorative Lecture at
          the Athenaeum.
        </p>
      </div>
      <div className="col-3">
        <img src={tamaratina}></img>
      </div>
      <div className="col-1">
        <h1 className="date">May</h1>
        <h1 className="year-sm yellow-txt">1993</h1>
        <h2>Connector at heart</h2>
        <p>
          CMC alumna <strong>Tina Daniels</strong>, who graduated in 1993, has
          spent her career bringing people together. In fact, one of her
          favorite books is Priya Parker’s <em>The Art of Gathering</em>, which
          encourages us to “examine the deeper assumptions behind why we gather”
          around an event or an idea. Daniels has built a career connecting
          people, leading teams at Google and serving on the CMC Board of
          Trustees and the Kravis Leadership Institute Advisory Board. “The
          world needs thoughtful, open-minded leaders,” she said.
        </p>
      </div>
    </div>
  );
};

export default Event7;
