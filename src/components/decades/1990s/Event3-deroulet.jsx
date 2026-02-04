import "./style-1990.css";
import deroulet from "../../../assets/1990-kravis-deroulet.jpg";

const Event3 = () => {
  return (
    <div className="event-container panel-yellow">
      <div className="content">
        <div className="col-3">
          <h1 className="year-sm">1990</h1>
          <h2>Leading the charge</h2>
          <p>
            The inaugural session of the Kravis-de Roulet Conference was held by
            the{" "}
            <a
              href="https://www.cmc.edu/kli"
              target="_blank"
              aria-label="CMC Kravis Leadership Institute (opens in new tab)"
            >
              Kravis Leadership Institute
            </a>
            . The conference has grown into a major annual gathering of
            leadership scholars and practitioners, with groundbreaking
            scholarship into the unique challenges and opportunities for women
            leaders.
          </p>
        </div>
        <div className="col-3">
          <img
            src={deroulet}
            alt="Panelist during the 2025 Kravis deRoulet conference."
          />
        </div>
      </div>
    </div>
  );
};

export default Event3;
