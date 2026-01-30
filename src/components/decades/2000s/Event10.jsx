import "./style-2000.css";
import kravis from "../../../assets/2000-kravis-groundbreaking.jpg";

const Event10 = () => {
  return (
    <div className="event-container kravis">
      <div className="col-3 white-txt">
        <div>
          <h1 className="year white-txt">2008</h1>
          <p>
            At an event that realized years of preparation and planning,
            President Gann presided over the ceremonial groundbreaking of the
            Kravis Center. Named for Henry Kravis ’67 and holding space for
            instruction, research, and community, the Kravis Center balances the
            Bauer Center along the east-west axis of campus.
          </p>
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
