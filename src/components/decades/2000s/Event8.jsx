import "./style-2000.css";

const Event8 = () => {
  return (
    <div className="event-container panel-gray">
      <div className="col-2">
        <div>
          <h1 className="date">April 8</h1>
          <h1 className="year-sm purple-txt">2006</h1>
          <h2>Challenger</h2>
          <p>
            Kenyan environmentalist and political activist{" "}
            <strong>Wangari Maathai</strong>, winner of the 2004 Nobel Peace
            Prize and first African woman to win the Nobel Prize for her
            "contribution to sustainable development, democracy, and peace,
            visits the Marian Miner Cook Athenaeum for her presentation,
            "Sustainable Development, Democracy, and Peace: A Critical Link."
          </p>
        </div>
        <p className="caption-alt">
          <a
            className="purple-txt"
            href="https://www.cmc.edu/athenaeum/historical-archives-apr-26-2006"
            aria-label="Athenaeum Archive (opens in new tab)"
            target="_blank"
          >
            See more information
          </a>
        </p>
      </div>
      <div className="col-3">
        <img src="src/assets/placeholder.png" alt="Image." />
      </div>
    </div>
  );
};

export default Event8;
