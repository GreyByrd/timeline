import "./style-2020.css";

const Event9 = () => {
  return (
    <div className="event-container panel-yellow">
      <div className="content">
        <div className="col-2">
          <h1 className="date">November</h1>
          <h1 className="year-sm">2023</h1>
          <h2>“Rhodes” to Success</h2>
          <p>
            <strong>Bertha Tobias ’24</strong> became the second woman and first
            student of African descent to be{" "}
            <a
              href="https://www.cmc.edu/newsfeed/bertha-tobias-23-honored-rhodes-scholar"
              target="_blank"
              aria-label="Read article: Bertha Tobias ’23 honored as Rhodes Scholar"
            >
              awarded the competitive and prestigious Rhodes Scholarship
            </a>
            . An International Relations major with a sequence in Leadership
            Studies, Tobias also became the fourth Rhodes Scholar in Namibian
            history.
          </p>
        </div>
        <div className="col-3">
          <img src="/src/assets/placeholder.png" />
        </div>
      </div>
    </div>
  );
};

export default Event9;
