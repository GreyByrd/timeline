import "./style-1990.css";
import harriet from "../../../assets/1990-profile-harriet.png";

const Event4 = () => {
  return (
    <div className="event-container small">
      <div className="content">
        <h1 className="honors-yellow">Notables</h1>
        <div className="col-3">
          <h1 className="date">May</h1>
          <h1 className="year-sm yellow-txt">1991</h1>
          <h2>Presidential Leader</h2>
          <p>
            Thirty-two years after she graduated from Claremont-McKenna College,{" "}
            <strong>Harriet Nembhard '91</strong> was{" "}
            <a
              className="yellow-txt"
              href="https://www.cmc.edu/newsfeed/harvey-mudd-college-inaugurates-harriet-nembhard-91-president"
            >
              inaugurated as the sixth president of Harvey Mudd College
            </a>
            . A nationally respected leader in industrial and operations
            engineering, she has served as a CMC Alumna Trustee and was a member
            of CMC’s inaugural Integrated Sciences Advisory Council.
          </p>
        </div>
        <div className="col-3">
          <img src={harriet} alt="Harriet Nembhard ’91."></img>
        </div>
      </div>
    </div>
  );
};

export default Event4;
