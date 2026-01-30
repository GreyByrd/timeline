import "./style-2000.css";

const Event7 = () => {
  return (
    <div className="event-container panel-gray">
      <div className="col-2">
        <div>
          <h1 className="date">April 26</h1>
          <h1 className="year-sm purple-txt">2006</h1>
          <h2>Challenger</h2>
          <p>
            Kenyan environmentalist and political activist{" "}
            <strong>Wangari Maathai</strong>, winner of the 2004 Nobel Peace
            Prize and first African woman to win the Nobel Prize for her
            “contribution to sustainable development, democracy, and peace,”
            visits the Marian Miner Cook Athenaeum for her presentation,
            <a
              className="purple-txt"
              href="https://www.cmc.edu/athenaeum/historical-archives-apr-26-2006"
              aria-label="Athenaeum Archive (opens in new tab)"
              target="_blank"
            >
              “Sustainable Development, Democracy, and Peace: A Critical Link.”
            </a>
          </p>
        </div>
      </div>
      <div className="col-3">
        <img src="src/assets/Wangari-Maathai_stockoptions.png" alt="Image." />
      </div>
    </div>
  );
};

export default Event7;
