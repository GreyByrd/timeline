import "./style-2010.css";
import spotlight from "../../../assets/2010-profile-kristin-chelina.png";

const Event5 = () => {
  return (
    <div className="event-container panel-maroon">
      <div className="content">
        <div className="col-3">
          <img
            src={spotlight}
            alt="Kristin Lim (bottom left) and Chelina Odbert’99."
          />
        </div>
        <div className="col-1 border-01">
          <h1 className="honors-influencer">Influencer</h1>
          <h1 className="date white-txt">June</h1>
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

export default Event5;
