import "./style-2010.css";
import spotlight from "../../../assets/2010-profile-kristin-chelina.png";

const Event6 = () => {
  return (
    <div className="event-container wide panel-gray">
      <div className="content">
        <div className="col-1">
          <h1 className="date maroon">January</h1>
          <h1 className="year-sm maroon">2012</h1>
          <p>
            CMC student-athlete <strong>Kristin Lim</strong> has been selected
            as the Honda Award nominee in NCAA Division III tennis by the
            Collegiate Women Sports Awards Program. Lim is the first CMS/CMC
            student athlete to receive this recognition which was given for her
            outstanding athletic achievements as well as her excellent example
            of leadership, academic excellence and community involvement.
          </p>
        </div>
        <div className="col-3">
          <img
            src={spotlight}
            alt="Kristin Lim (bottom left) and Chelina Odbert’99."
          />
        </div>
        <div className="col-1">
          <h1 className="date maroon">June</h1>
          <h1 className="year-sm maroon">2012</h1>
          <p>
            <strong>
              <a
                className="maroon-txt"
                href="https://www.cmc.edu/news/cmcs-new-center-for-global-education-is-circle-of-life-for-cmc-students"
                target="_blank"
                aria-label="Read Article: Building Bridges has a special meaning for Cheline Odbert’99"
              >
                Chelina Odbert ’99
              </a>
            </strong>
            , who in 2006 co-founded Kounkey Design Initiative, Kenya, is among
            15 social entrepreneurs recently recognized by American Express, in
            partnership with Ashoka Changemakers, as top innovators most likely
            to become the next generation of leaders who will solve the world's
            critical challenges.
          </p>
          <br />
          <h1 className="date maroon">May 30</h1>
          <h1 className="year-sm maroon">2013</h1>
          <p>
            Pam Gann{" "}
            <a
              className="maroon-txt"
              href="https://www.cmc.edu/news/president-gann-honored-with-southern-california-intercollegiate-athletic-conference-distinguished-service-award"
              target="_blank"
              aria-label="Read article about Pam Gann's award."
            >
              honored
            </a>{" "}
            with the 2013 SCIAC Distinguished Service Award, served as Chair of
            SCIAC Presidents Council .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event6;
