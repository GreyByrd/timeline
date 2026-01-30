import "./style-2000.css";
import kravis from "../../../assets/2000-kravis-groundbreaking.jpg";

const Event10 = () => {
  return (
    <div className="event-container kravis">
      <div className="col-3 white-txt">
        <div>
          <h1 className="year white-txt">2008</h1>
          <h2>Kravis Center groundbreaking</h2>
          <img
            className="kravis-img"
            src={kravis}
            alt="President Pam Gann (second from the right) and trustees breaking first ground at the build site."
          />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Event10;
