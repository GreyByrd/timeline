import "./style-2010.css";
import chelina from "../../../assets/2010-profile-chelina_alt.png";

const Event4 = () => {
  return (
    <div className="event-container panel-maroon">
      <div className="content white-txt">
        <div className="col-3">
          <img src={chelina} alt="Chelina Odbert’99." />
        </div>
        <div className="col-3">
          <h1 className="honors-influencer">Influencer</h1>
          <h1 className="date">June</h1>
          <h1 className="year-sm white-txt">2012</h1>
          <h2>Change from the Heart</h2>
          <p>
            <strong>Chelina Odbert ’99</strong>, who co-founded the Kounkey
            Design Initiative in 2006, was one of 15 social entrepreneurs
            recognized by American Express and Ashoka Changemakers. The
            selection committee chose top innovators who were most likely to
            become the next generation of leaders solving the world's critical
            challenges. Odbert founded Kounkey to help people from communities
            with fewer resources build neighborhoods that promote health and
            increased connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event4;
