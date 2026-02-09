import "./style-2020.css";

const Event5 = () => {
  return (
    <div className="event-container-sm panel-white">
      <div className="content info-panel">
        <div className="col-2">
          <div>
            <h1 className="date">May 25</h1>
            <h1 className="year-sm yellow-txt">2022</h1>
            <h2>National Champions</h2>
            <p>
              The Claremont-Mudd-Scripps women's tennis team{" "}
              <a
                href="https://www.cmc.edu/newsfeed/athenas-tennis-team-wins-national-title"
                target="_blank"
                aria-label="Read article: Athenas tennis team wins national title! (opens in new tab)"
              >
                beat No. 1 University of Chicago
              </a>{" "}
              to earn the 2022 NCAA Division III National Championship at the
              USTA National Campus in Orlando.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event5;
