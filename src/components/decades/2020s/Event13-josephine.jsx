import "./style-2020.css";
import josephine from "../../../assets/2020-profile-josephine-aspromonte.png";

const Event13 = () => {
  return (
    <div className="event-container">
      <div className="content">
        <div className="col-3">
          <h1 className="year-sm">2025</h1>
          <h2>Riding into the Future</h2>
          <p>
            Economics and Public Policy major{" "}
            <strong>Josephine Aspromonte ’26</strong> found that high-end
            bicycle frames were rarely built to fit the unique proportions of
            female cyclists. She spent 12 weeks in Roubaix, France, doing
            research and building her own frames, in pursuit of a{" "}
            <a
              className="yellow-txt"
              href="https://gouldcenter.org/creative-works-fellowship-homepage"
              target="_blank"
              aria-label="Gould Center (opens in new tab)"
            >
              Gould Center for Humanistic Studies Creative Works
            </a>{" "}
            project. Aspromonte was also selected to become a Handley Leadership
            Fellow through the{" "}
            <a
              className="yellow-txt"
              href="https://www.cmc.edu/kli/about/women-leadership-development-initiative"
              target="_blank"
              aria-label="Kravis Leadership Institute (opens in new tab)"
            >
              Kravis Leadership Institute’s Women in Leadership Development
              (WLD) Initiative
            </a>
            .
          </p>
        </div>
        <div className="col-3">
          <img src={josephine} />
        </div>
      </div>
    </div>
  );
};

export default Event13;
