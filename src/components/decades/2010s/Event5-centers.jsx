import "./style-2010.css";
import CGE from "../../../assets/2010-cge.jpg";

const Event5 = () => {
  return (
    <div className="event-container-wide panel-maroon">
      <div className="content">
        <div className="col-1">
          <h1 className="date white-txt">March</h1>
          <h1 className="year-sm white-txt">2011</h1>
          <p>
            <strong>
              <a
                href="https://www.cmc.edu/news/cmcs-new-center-for-global-education-is-circle-of-life-for-cmc-students"
                target="_blank"
                aria-label="Read Article: CMC's New Center for Global Education is 'Circle of Life' for CMC Students
"
              >
                Center for Global Education
              </a>
            </strong>{" "}
            opens, encompassing CMC's Office of Off-Campus Study, including
            Study Abroad and The Washington Program, as well as coordination and
            promotion of fellowship programs and national awards for CMC
            students and faculty.
          </p>
        </div>
        <div className="col-3">
          <img src={CGE} alt="Two students at a temple during study abroad." />
        </div>
        <div className="col-1">
          <h1 className="date white-txt">April</h1>
          <h1 className="year-sm white-txt">2011</h1>
          <p>BA/MA program launches</p>
          <br />
          <h1 className="date white-txt">September</h1>
          <h1 className="year-sm white-txt">2011</h1>
          <p>
            Thanks to a grant from the Annenberg Foundation,{" "}
            <a
              href="https://www.cmc.edu/news/cmcs-center-for-civic-engagement-builds-community-into-cmc-culture"
              target="_blank"
              aria-label="Read Article: CMC's Center for Civic Engagement builds community into CMC culture
"
            >
              CMC's Center for Civic Engagement (CCE)
            </a>{" "}
            opened its doors in September 2011, with the goal of providing an
            umbrella for the community service activities at CMC, and expanding
            the reach of those activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event5;
