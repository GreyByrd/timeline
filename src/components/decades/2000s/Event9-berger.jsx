import "./style-2000.css";
import berger from "../../../assets/women_and_leadership_berger.jpg";

const Event9 = () => {
  return (
    <div className="event-container panel-gray">
      <div className="col-3">
        <h1 className="date">March 24</h1>
        <h1 className="year-sm purple-txt">2007</h1>
        <h2>The Women in Real Life: The Work/Family Challenge conference</h2>
        <p>
          For the first-ever event for women (and men) of all ages, stages, and
          choices, the conference was held to explore the struggle for balance
          throughout the work/family spectrum, and is co-hosted by CMC, the
          Berger Institute for Work, Family and Children, and the CMC Women’s
          Forum.
        </p>
      </div>
      <div className="col-3">
        <img src={berger} alt="Image." />
      </div>
    </div>
  );
};

export default Event9;
